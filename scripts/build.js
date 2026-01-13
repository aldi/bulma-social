const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SASS_DIR = path.join(ROOT, "sass");
const CSS_DIR = path.join(ROOT, "css");
const DOCS_PUBLIC_DIR = path.join(ROOT, "docs", "public");

const pkg = require(path.join(ROOT, "package.json"));
const BANNER = `/*! bulma-social v${pkg.version} | MIT License | github.com/aldi/bulma-social */\n\n`;

async function buildCSS(input, outputDir, outputName) {
  fs.mkdirSync(outputDir, { recursive: true });

  const outputFile = path.join(outputDir, `${outputName}.css`);
  const outputMinFile = path.join(outputDir, `${outputName}.min.css`);

  console.log(`Building: ${outputName}`);

  const result = sass.compile(input, {
    style: "expanded",
    loadPaths: [SASS_DIR],
  });

  const processed = await postcss([autoprefixer]).process(result.css, {
    from: input,
    to: outputFile,
  });

  fs.writeFileSync(outputFile, BANNER + processed.css);

  const minified = await postcss([autoprefixer, cssnano]).process(result.css, {
    from: input,
    to: outputMinFile,
  });

  fs.writeFileSync(outputMinFile, minified.css);

  console.log(`  ✓ ${outputFile}`);
  console.log(`  ✓ ${outputMinFile}`);
}

async function buildAll() {
  const input = path.join(SASS_DIR, "social-providers", "_all.scss");
  await buildCSS(input, CSS_DIR, "all");
}

async function buildSingle() {
  const singleDir = path.join(SASS_DIR, "social-providers", "single");

  for (const file of fs.readdirSync(singleDir)) {
    if (file.startsWith("_") && file.endsWith(".scss")) {
      const provider = file.replace(/^_/, "").replace(".scss", "");
      const input = path.join(singleDir, file);
      const outputDir = path.join(CSS_DIR, "single", provider);

      await buildCSS(input, outputDir, provider);
    }
  }
}

function copyToDocsPublic() {
  console.log("");
  console.log("📦 Copying to docs/public...");
  fs.mkdirSync(DOCS_PUBLIC_DIR, { recursive: true });
  const src = path.join(CSS_DIR, "all.min.css");
  const dest = path.join(DOCS_PUBLIC_DIR, "all.min.css");
  fs.copyFileSync(src, dest);
  console.log(`  ✓ ${dest}`);
}

async function main() {
  console.log("🔨 Building bulma-social CSS...\n");
  const startTime = Date.now();

  await buildAll();
  console.log("");
  await buildSingle();
  copyToDocsPublic();

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Build completed in ${duration}s`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
