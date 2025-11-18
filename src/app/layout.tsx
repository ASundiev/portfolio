import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

const BASE_URL = 'https://asundiev.com';

export const metadata: Metadata = {
  title: 'Andrey Sundiev - Design Leader',
  description: 'Leading teams and driving change at scale for over 12 years. Currently overseeing Product and Marketing Design at Beamery.',
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Andrey Sundiev - Design Leader',
    description: 'Leading teams and driving change at scale for over 12 years.',
    url: BASE_URL,
    siteName: 'Andrey Sundiev Portfolio',
    images: [
      {
        url: '/images/og-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrey Sundiev - Design leader',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrey Sundiev - Design Leader',
    description: 'Leading teams and driving change at scale for over 12 years.',
    images: ['/images/og-img.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

