import { Metadata } from 'next';
import Script from 'next/script';

import { teamMembers } from '@/constants';

export const metadata: Metadata = {
  title: 'About TheOGs | Modern Swipe-Based Job Platform',
  description:
    'Learn about TheOGs, founded in 2026 to revolutionize job searching with a swipe-based approach. Meet our team of visionaries and AI specialists.',
  openGraph: {
    title: 'About TheOGs | Global Hiring Simplified',
    description:
      'Connecting job seekers and employers across the US, EU, and UAE with modern technology.',
    images: ['/og-about.png'], // Add a preview image to your public folder
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theogs',
  },
};

<Script id="pricing-schema" type="application/ld+json">
  {JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'TheOGs',
      url: 'https://theogs.app', // Replace with your actual URL
      logo: 'https://theogs.app/logo.png',
      description:
        'TheOGs is a swipe-based job platform connecting talent globally.',
      member: teamMembers.map((member) => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        description: member.description,
      })),
    },
  })}
</Script>;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
