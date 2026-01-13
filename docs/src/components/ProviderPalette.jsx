"use client";

import { useState, useEffect } from 'react';
import { socialProviders } from '@/data/socialProviders';

export { socialProviders };

export default function ProviderPalette({ onHover }) {
  const [randomIndex] = useState(() =>
    Math.floor(Math.random() * socialProviders.length)
  );

  useEffect(() => {
    if (onHover) {
      onHover(socialProviders[randomIndex]);
    }
  }, [randomIndex, onHover]);

  return (
    <ul className="social-class list-unstyled">
      {socialProviders.map((provider) => (
        <li
          key={provider.code}
          data-code={provider.code}
          data-name={provider.name}
          onMouseEnter={() => onHover && onHover(provider)}
        >
          <code>.is-{provider.code}</code>{" "}
          <span className="social-hex">{provider.hsl}</span>
        </li>
      ))}
    </ul>
  );
}
