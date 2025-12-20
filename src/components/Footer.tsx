import Link from 'next/link';
import Image from 'next/image';

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

interface SocialMediaLink {
  name: string;
  href: string;
  imageUrl: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/theogsapp',
    imageUrl: '/social/facebook.png',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/theogsapp',
    imageUrl: '/social/instagram.png',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/theogsapp',
    imageUrl: '/social/linkedIn.png',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/theogsapp',
    imageUrl: '/social/x.jpg',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16">
      <AppDownloadSection />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About TheOGs</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              TheOGs connects proven developers with top-tier opportunities at
              unicorns, leading startups, and respected tech companies. We cut
              the noise so skilled talent and great companies connect faster.
            </p>
          </div>

          {/* Legal */}
          <div>
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
          </div>

          {/* Socials */}
          <div id="socials">
            <h3 className="text-xl font-playfair font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    alt={social.name}
                    src={social.imageUrl}
                    width={30}
                    height={50}
                    className="hover:scale-150 transition-transform object-contain rounded-full"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-500">
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
  );
}
