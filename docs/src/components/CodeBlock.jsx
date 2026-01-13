import { codeToHtml } from 'shiki';
import CopyButton from './CopyButton';

export default async function CodeBlock({ children, className, language = "html" }) {
  let highlightedCode;
  
  try {
    highlightedCode = await codeToHtml(children, {
      lang: language,
      theme: "slack-dark",
    });
  } catch (error) {
    console.error("Shiki highlighting error:", error);
    highlightedCode = `<pre><code>${children}</code></pre>`;
  }

  return (
    <figure className={`highlight ${className || ""}`}>
      <CopyButton code={children} />
      <div
        className="shiki-wrapper"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </figure>
  );
}
