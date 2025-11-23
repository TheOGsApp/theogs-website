import './globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { Footer, Header } from '@/components';
import CookieConsentModal from '@/components/CookieConsentModal';

export const metadata: Metadata = {
  title: 'TheOGs',
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <title>
          TheOGs | Swipe-Based Job Matching for Experienced Professionals
        </title>
        <meta
          name="description"
          content="TheOGs is a swipe-based job matching platform exclusively for experienced professionals, helping you find your ideal career opportunity faster."
        />
        <meta
          name="keywords"
          content="TheOGs, job matching, swipe jobs, experienced professionals, career, hiring, recruitment"
        />
        <meta name="author" content="TheOGs" />
        <meta name="publisher" content="TheOGs" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="TheOGs | Swipe-Based Job Matching" />
        <meta
          property="og:description"
          content="Exclusive job matching for experienced professionals with a swipe-based interface to find your next career opportunity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theogs.com" />
        <meta property="og:image" content="https://theogs.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@TheOGsOfficial" /> */}
        <meta
          name="twitter:title"
          content="TheOGs | Swipe-Based Job Matching"
        />
        <meta
          name="twitter:description"
          content="Find your next career opportunity fast with TheOGs, the swipe-based job platform for experienced professionals."
        />
        <meta
          name="twitter:image"
          content="https://theogs.com/twitter-image.jpg"
        />
      </head>
      <body className="bg-black text-white font-inter">
        <Header />
        <main className="bg-black">{children}</main>

        {/* Footer */}
        <Footer />
        <CookieConsentModal />
      </body>
    </html>
  );
}
