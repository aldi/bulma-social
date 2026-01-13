import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata = {
  title: "Bulma-Social - Social Buttons and Colors for Bulma",
  description: "Social Buttons and Colors for Bulma. Lightweight, customizable button components for all major social platforms.",
  keywords:
    "bulma, social, font-awesome, buttons, colors, colours, icons, socialmedia, addon, media, css, html",
  authors: [{ name: "Aldi Duzha" }],
  metadataBase: new URL('https://aldi.github.io'),
  alternates: {
    canonical: '/bulma-social',
  },
  openGraph: {
    title: 'Bulma-Social - Social Buttons and Colors for Bulma',
    description: 'Lightweight, customizable social buttons for Bulma CSS framework. Supports 24+ social platforms with 4 button styles.',
    url: 'https://aldi.github.io/bulma-social',
    siteName: 'Bulma-Social',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulma-Social - Social Buttons for Bulma',
    description: 'Lightweight, customizable social buttons for Bulma CSS framework.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@1/css/bulma.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7/css/all.min.css"
        />
        <link rel="stylesheet" href="/all.min.css" />
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}

