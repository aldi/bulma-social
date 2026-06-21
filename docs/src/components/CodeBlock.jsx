import { cache } from 'react';
import { codeToHtml } from 'shiki';
import CopyButton from './CopyButton';

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const highlightCode = cache(async (code, language) => {
  try {
    return await codeToHtml(code, {
      lang: language,
      theme: "slack-dark",
    });
  } catch (error) {
    console.error("Shiki highlighting error:", error);
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  }
});

export default async function CodeBlock({ children, className, language = "html" }) {
  const code = typeof children === "string" ? children : String(children);
  const highlightedCode = await highlightCode(code, language);

  return (
    <figure className={`highlight ${className || ""}`}>
      <CopyButton code={code} />
      <div
        className="shiki-wrapper"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </figure>
  );
}
