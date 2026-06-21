const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PROVIDERS_SCSS_PATH = path.join(ROOT, "sass", "utilities", "_providers.scss");
const ALL_SCSS_PATH = path.join(ROOT, "sass", "social-providers", "_all.scss");
const SINGLE_SCSS_DIR = path.join(ROOT, "sass", "social-providers", "single");
const CSS_DIR = path.join(ROOT, "css");
const DOCS_PROVIDERS_PATH = path.join(ROOT, "docs", "src", "data", "socialProviders.js");
const DOCS_CSS_PATH = path.join(ROOT, "docs", "public", "all.min.css");

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function normalizeHsl(value) {
  return value.replace(/\s+/g, "").toLowerCase();
}

function parseSassProviders(content) {
  const providers = new Map();
  const providerPattern = /"([^"]+)":\s*hsl\(([^)]+)\)/g;

  let match = providerPattern.exec(content);
  while (match) {
    const [, code, hslValue] = match;
    providers.set(code, `hsl(${hslValue})`);
    match = providerPattern.exec(content);
  }

  return providers;
}

function parseDocsProviders(content) {
  const providers = new Map();
  const providerPattern = /\{\s*code:\s*"([^"]+)",\s*name:\s*"[^"]+",\s*hsl:\s*"([^"]+)"/g;

  let match = providerPattern.exec(content);
  while (match) {
    const [, code, hslValue] = match;
    providers.set(code, hslValue);
    match = providerPattern.exec(content);
  }

  return providers;
}

function listSingleProviderSources() {
  return fs.readdirSync(SINGLE_SCSS_DIR)
    .filter((file) => file.startsWith("_") && file.endsWith(".scss"))
    .map((file) => file.replace(/^_/, "").replace(/\.scss$/, ""))
    .sort();
}

function hasClass(css, className) {
  return css.includes(className);
}

function fail(messages) {
  console.error("Provider sync check failed:");
  for (const message of messages) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

function checkProviderData(sassProviders, docsProviders, errors) {
  const allCodes = new Set([...sassProviders.keys(), ...docsProviders.keys()]);

  for (const code of [...allCodes].sort()) {
    if (!sassProviders.has(code)) {
      errors.push(`Missing in Sass providers map: "${code}"`);
      continue;
    }

    if (!docsProviders.has(code)) {
      errors.push(`Missing in docs providers list: "${code}"`);
      continue;
    }

    const sassHsl = sassProviders.get(code);
    const docsHsl = docsProviders.get(code);

    if (normalizeHsl(sassHsl) !== normalizeHsl(docsHsl)) {
      errors.push(`HSL mismatch for "${code}" (sass=${sassHsl}, docs=${docsHsl})`);
    }
  }
}

function checkSingleProviderSources(providerCodes, errors) {
  const sourceCodes = listSingleProviderSources();

  for (const code of providerCodes) {
    if (!sourceCodes.includes(code)) {
      errors.push(`Missing single-provider Sass entrypoint: "_${code}.scss"`);
      continue;
    }

    const filePath = path.join(SINGLE_SCSS_DIR, `_${code}.scss`);
    const content = readFile(filePath);

    if (!content.includes('@use "../../elements/animations";')) {
      errors.push(`Single-provider Sass entrypoint omits animations: "_${code}.scss"`);
    }

    if (!content.includes(`dv.get-provider-color("${code}")`)) {
      errors.push(`Single-provider Sass entrypoint uses wrong provider color: "_${code}.scss"`);
    }
  }

  for (const code of sourceCodes) {
    if (!providerCodes.includes(code)) {
      errors.push(`Unexpected single-provider Sass entrypoint: "_${code}.scss"`);
    }
  }
}

function checkAllEntrypoint(errors) {
  const content = readFile(ALL_SCSS_PATH);

  if (!content.includes('@use "../elements/animations";')) {
    errors.push("_all.scss omits shared animations");
  }

  if (!content.includes("$button-colors: dv.$all-provider-colors")) {
    errors.push("_all.scss does not build buttons from all provider colors");
  }
}

function checkGeneratedCss(providerCodes, errors) {
  const allCssPath = path.join(CSS_DIR, "all.css");

  for (const filePath of [allCssPath, DOCS_CSS_PATH]) {
    if (!fs.existsSync(filePath)) {
      errors.push(`Missing generated CSS file: ${path.relative(ROOT, filePath)}`);
      continue;
    }

    const css = readFile(filePath);
    for (const code of providerCodes) {
      if (!hasClass(css, `.button.is-${code}`)) {
        errors.push(`${path.relative(ROOT, filePath)} omits .button.is-${code}`);
      }
    }

    if (!hasClass(css, ".button.is-animated")) {
      errors.push(`${path.relative(ROOT, filePath)} omits .button.is-animated`);
    }
  }

  for (const code of providerCodes) {
    const cssPath = path.join(CSS_DIR, "single", code, `${code}.css`);
    const minCssPath = path.join(CSS_DIR, "single", code, `${code}.min.css`);

    for (const filePath of [cssPath, minCssPath]) {
      if (!fs.existsSync(filePath)) {
        errors.push(`Missing generated single-provider CSS file: ${path.relative(ROOT, filePath)}`);
        continue;
      }

      const css = readFile(filePath);
      if (!hasClass(css, `.button.is-${code}`)) {
        errors.push(`${path.relative(ROOT, filePath)} omits .button.is-${code}`);
      }

      if (!hasClass(css, ".button.is-animated")) {
        errors.push(`${path.relative(ROOT, filePath)} omits .button.is-animated`);
      }
    }
  }
}

function main() {
  const sassProviders = parseSassProviders(readFile(PROVIDERS_SCSS_PATH));
  const docsProviders = parseDocsProviders(readFile(DOCS_PROVIDERS_PATH));
  const providerCodes = [...sassProviders.keys()].sort();
  const errors = [];

  checkProviderData(sassProviders, docsProviders, errors);
  checkSingleProviderSources(providerCodes, errors);
  checkAllEntrypoint(errors);
  checkGeneratedCss(providerCodes, errors);

  if (errors.length > 0) {
    fail(errors);
  }

  console.log(`Provider sync check passed (${providerCodes.length} providers).`);
}

main();
