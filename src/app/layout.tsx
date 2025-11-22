import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components';
import Link from 'next/link';
import { appConfig } from '@/config';

export const metadata: Metadata = {
  title: 'TheOGs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@500;700&display=swap"
          rel="stylesheet"
        />
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
        <footer className="border-t border-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* About */}
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  About TheOGs
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  TheOGs connects proven developers with top-tier opportunities
                  at unicorns, leading startups, and respected tech companies.
                  We cut the noise so skilled talent and great companies connect
                  faster.
                </p>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Legal
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    { name: 'User Agreement', href: '/legal/user-agreement' },
                    { name: 'Privacy Policy', href: '/legal/privacy-policy' },
                    { name: 'Cookie Policy', href: '/legal/cookie-policy' },
                    {
                      name: 'Copyright Policy',
                      href: '/legal/copyright-policy',
                    },
                    { name: 'Consent Settings', href: '/legal/consent' },
                    {
                      name: 'Child Safety Standards',
                      href: '/legal/child-safety',
                    },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="hover:text-black transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Contact
                </h3>
                <p className="text-sm text-gray-400">
                  Email:{' '}
                  <a
                    href={`mailto:${appConfig.supportEmail}`}
                    className="hover:text-black transition-colors"
                  >
                    {appConfig.supportEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Footer Bottom */}
            <p className="text-center text-xs text-gray-500 mt-12">
              &copy; {new Date().getFullYear()} TheOGs. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
