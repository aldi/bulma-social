'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme">
        <i className="fa-solid fa-sun icon-sun"></i>
        <i className="fa-solid fa-moon icon-moon"></i>
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <i className="fa-solid fa-sun icon-sun"></i>
      <i className="fa-solid fa-moon icon-moon"></i>
    </button>
  );
}
