// src/app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'BazmBooks', // ✅ Updated per TODO
  description: 'Discover, share, and trade your favorite books.',
  keywords: ['books', 'trading', 'community', 'reading']
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(', ')
              : typeof metadata.keywords === 'string'
              ? metadata.keywords
              : ''
          }
        />
      </head>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
