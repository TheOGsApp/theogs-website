import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | TheOGs Customer Support',
  description:
    'Have questions or need support with TheOGs? Contact our team for help with bug reports, feature requests, or collaboration inquiries.',
  keywords: [
    'contact TheOGs',
    'hiring support',
    'recruitment platform feedback',
    'report a bug',
  ],
  openGraph: {
    title: 'Get in Touch with TheOGs',
    description:
      'We are here to help you navigate the future of hiring. Reach out via our contact form or email.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
