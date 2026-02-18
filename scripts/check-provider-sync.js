const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PROVIDERS_SCSS_PATH = path.join(ROOT, "sass", "utilities", "_providers.scss");
const DOCS_PROVIDERS_PATH = path.join(ROOT, "docs", "src", "data", "socialProviders.js");

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

function fail(messages) {
  console.error("Provider sync check failed:");
  for (const message of messages) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

function main() {
  const sassProviders = parseSassProviders(readFile(PROVIDERS_SCSS_PATH));
  const docsProviders = parseDocsProviders(readFile(DOCS_PROVIDERS_PATH));
  const allCodes = new Set([...sassProviders.keys(), ...docsProviders.keys()]);
  const errors = [];

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

  if (errors.length > 0) {
    fail(errors);
  }

  console.log(`Provider sync check passed (${sassProviders.size} providers).`);
}

main();
