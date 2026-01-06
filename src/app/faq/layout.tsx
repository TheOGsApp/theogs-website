import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | TheOGs Support & Help Center',
  description:
    'Find answers to common questions about TheOGs job platform. Learn about our 5% commission, job matching, technical checks, and account security.',
  keywords: [
    'hiring faq',
    'TheOGs help',
    'job matching process',
    'recruitment costs',
    'background checks',
  ],
  openGraph: {
    title: 'TheOGs Frequently Asked Questions',
    description:
      'Everything you need to know about hiring and job seeking on TheOGs.',
    type: 'website',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
