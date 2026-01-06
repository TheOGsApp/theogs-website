import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | TheOGs Swipe-Based Hiring',
  description:
    'Discover how to find tech jobs or hire 10x faster with TheOGs. Explore our step-by-step guide for developers and companies using our swipe-to-match platform.',
  keywords: [
    'how to find tech jobs',
    'swipe for jobs',
    'hiring guide',
    'developer recruitment process',
    'direct hiring platform',
  ],
  openGraph: {
    title: 'How TheOGs Works: Step-by-Step Guide',
    description:
      'Get hired or find top talent in just 4 steps. No recruiters, no gatekeepers.',
    images: [
      {
        url: '/welcome/swipe.gif',
        width: 800,
        height: 600,
        alt: 'TheOGs Swiping UI',
      },
    ],
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
