"use client";

import { useEffect, useRef, useState } from "react";

export default function InstallCommand({ command }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="home-install-box">
      <code>{command}</code>
      <button
        className="copy-btn"
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Install command copied" : "Copy install command"}
        aria-live="polite"
      >
        <i className={copied ? "fa-solid fa-check" : "fa-solid fa-copy"}></i>
      </button>
    </div>
  );
}
