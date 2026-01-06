import Link from 'next/link';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

import { appConfig } from '@/config';
import { AppDownloadSection } from './AppDownloadSection';

const legalLinks = [
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
];

const productLinks = [
  { name: 'How it works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Terms and Conditions', href: '/terms-and-conditions' },
];

interface SocialMediaLink {
  name: string;
  href: string;
  icon: IconName;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/theogsapp',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/theogsapp',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/theogsapp',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/theogsapp',
    icon: 'twitter',
  },
];

export function Footer() {
  // SEO: Social Profile Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TheOGs',
    url: 'https://theogs.com',
    logo: 'https://theogs.com/logo.png',
    sameAs: socialMediaLinks.map((link) => link.href),
  };

  return (
    <footer className="bg-white border-t border-gray-800 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <AppDownloadSection />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About */}
          <section>
            <h3 className="text-xl font-semibold mb-4">About TheOGs</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              TheOGs connects proven developers with top-tier opportunities at
              unicorns, leading startups, and respected tech companies. We cut
              the noise so skilled talent and great companies connect faster.
            </p>
          </section>

          {/* Product */}
          <nav aria-label="Product links">
            <h3 className="text-xl font-semibold mb-4">Product</h3>
            <ul className="text-sm text-gray-500 leading-relaxed">
              {productLinks.map((link, i) => (
                <li key={i} className="mb-1">
                  <Link
                    href={link.href}
                    className="hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="text-sm text-gray-500 leading-relaxed">
              {legalLinks.map((link, i) => (
                <li key={i} className="mb-1">
                  <Link
                    href={link.href}
                    className="hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div id="socials">
            <h3 className="text-xl font-playfair font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                  aria-label={`Follow TheOGs on ${social.name}`}
                >
                  <DynamicIcon name={social.icon} className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-playfair font-semibold mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-500">
              Email:{' '}
              <Link
                href={`mailto:${appConfig.supportEmail}`}
                className="hover:text-black transition-colors"
              >
                {appConfig.supportEmail}
              </Link>
            </p>
          </section>
        </div>

        {/* Footer Bottom */}
        <p className="text-center text-xs text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} TheOGs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
