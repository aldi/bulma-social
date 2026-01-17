import { cache } from 'react';
import { codeToHtml } from 'shiki';
import CopyButton from './CopyButton';

const highlightCode = cache(async (code, language) => {
  try {
    return await codeToHtml(code, {
      lang: language,
      theme: "slack-dark",
    });
  } catch (error) {
    console.error("Shiki highlighting error:", error);
    return `<pre><code>${code}</code></pre>`;
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
