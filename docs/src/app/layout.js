import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata = {
  title: "Bulma-Social - Social Buttons and Colors for Bulma",
  description: "Social Buttons and Colors for Bulma. Lightweight, customizable button components for all major social platforms.",
  keywords:
    "bulma, social, font-awesome, buttons, colors, colours, icons, socialmedia, addon, media, css, html",
  authors: [{ name: "aldi" }],
  metadataBase: new URL('https://aldi.github.io'),
  openGraph: {
    title: 'Bulma-Social - Social Buttons and Colors for Bulma',
    description: 'Lightweight, customizable social buttons for Bulma CSS framework. Supports all major social platforms with multiple button styles.',
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
          href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
          integrity="sha384-DCY3M8xLkMu6c9IKcKbe+jHKMjelnwC0p+SBaxfHxoBYZWdJF2X400UdBCgATtAB"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.3.0/css/all.min.css"
          integrity="sha384-sTlsophtwz/I4myskS3OIJf5VvEojkXKZyBTWZm0YD/K1pN7C5wpBPLyrsbr1SU2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={`${process.env.BASE_PATH}/all.min.css`} />
        <link rel="stylesheet" href={`${process.env.BASE_PATH}/globals.css`} />
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
