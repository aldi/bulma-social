"use client";

import { useState } from 'react';

export default function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleCopy = async (e) => {
    try {
      const target = e.currentTarget;
      const figure = target.closest('figure');
      const codeElement = figure?.querySelector('code');

      if (codeElement) {
        const range = document.createRange();
        range.selectNodeContents(codeElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }

      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      className="button is-small bd-copy"
      onClick={handleCopy}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      title={copied ? "Copied!" : "Copy to clipboard"}
      data-hovering={isHovering}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
