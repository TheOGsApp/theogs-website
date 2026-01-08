// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { Footer, Header } from '@/components';
import CookieConsentModal from '@/components/CookieConsentModal';

export const metadata: Metadata = {
  title: {
    default: 'TheOGs – Swipe-Based Job Matching for Experienced Professionals',
    template: '%s | TheOGs',
  },
  description:
    'TheOGs is a swipe-based job matching platform for experienced professionals. Discover curated job opportunities and connect with top companies faster.',
  keywords: [
    'TheOGs',
    'job matching app',
    'senior jobs',
    'techjobs',
    'swipe-based job platform',
    'job search',
    'career opportunities',
    'job matching',
    'tech careers',
    'job discovery',
    'experienced professionals',
    'hiring platform',
  ],
  metadataBase: new URL('https://theogs.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TheOGs – Swipe-Based Job Matching',
    description:
      'Swipe, match, and connect with top companies. Built for experienced professionals.',
    url: 'https://theogs.app',
    siteName: 'TheOGs',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'TheOGs',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheOGs – Swipe-Based Job Matching',
    description:
      'A swipe-based job platform designed for experienced professionals.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const geist = Geist({
  subsets: ['latin'],
  fallback: ['inter', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <title>
          TheOGs – Swipe-Based Job Matching for Experienced Professionals
        </title>

        <meta
          name="description"
          content="TheOGs is a swipe-based job matching platform for experienced professionals. Discover curated job opportunities, connect with top companies, and advance your career faster."
        />

        <meta
          name="keywords"
          content="TheOGs, theogs app, swipe job matching, jobs for experienced professionals, senior jobs, professional hiring platform, tech jobs, executive jobs, career opportunities, recruitment app, hiring platform, job discovery app, talent marketplace"
        />

        <link rel="canonical" href="https://theogs.app/" />

        <link
          rel="icon"
          href="https://theogs.app/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://theogs.app/logo.png"
          sizes="180x180"
        />

        <meta property="og:title" content="TheOGs – Swipe-Based Job Matching" />
        <meta
          property="og:description"
          content="Swipe, match, and connect with top companies. TheOGs helps experienced professionals find the right career opportunities faster."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theogs.app/" />
        <meta property="og:image" content="https://theogs.app/logo.png" />
        <meta property="og:site_name" content="TheOGs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TheOGs – Swipe-Based Job Matching"
        />
        <meta
          name="twitter:description"
          content="A swipe-based job platform designed for experienced professionals and senior talent."
        />
        <meta name="twitter:image" content="https://theogs.app/logo.png" />

        <meta name="author" content="TheOGs" />
      </head>
      <body className="bg-app text-white font-inter">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentModal />
      </body>
    </html>
  );
}
