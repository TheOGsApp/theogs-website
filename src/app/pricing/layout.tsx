import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Pricing | TheOGs - 5% Flat Fee Technical Recruitment',
  description:
    'Hire experienced developers with 100% salary transparency. Pay only a 5% success fee—saving you 75% compared to traditional recruitment agencies.',
  keywords: [
    'technical recruitment pricing',
    'hiring software engineers cost',
    'developer recruitment fee',
    'recruitment agency alternatives',
    'TheOGs pricing',
    'affordable tech hiring',
  ],
  openGraph: {
    title: 'TheOGs | Transparent 5% Recruitment Fee',
    description:
      'Stop paying 25% to headhunters. Hire vetted developers for a flat 5% success fee.',
    url: 'https://theogs.app/pricing',
    siteName: 'TheOGs',
    images: [
      {
        url: 'https://theogs.app/theogs-pricing.png', // Ensure you have an OG image at this path
        width: 1200,
        height: 630,
        alt: 'TheOGs 5% Success Fee Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheOGs | 5% Success Fee for Tech Hiring',
    description:
      'The standard is 25%. We charge 5%. Only pay when you hire a vetted OG.',
    images: ['https://theogs.app/theogs-pricing.png'],
  },
};

// ... inside your Pricing Page component
<Script id="pricing-schema" type="application/ld+json">
  {JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'TheOGs Technical Recruitment',
    description:
      'High-quality hiring platform for experienced developers (2+ years). Only 5% success fee on annual base salary.',
    provider: {
      '@type': 'Organization',
      name: 'TheOGs',
      url: 'https://theogs.app',
    },
    serviceType: 'Technical Recruitment',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      description: '5% of annual base salary',
      url: 'https://theogs.app/pricing',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Recruitment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Candidate Matching',
            description: 'Human-curated technical matching',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Assessment',
            description: 'Role-specific technical evaluation',
          },
        },
      ],
    },
  })}
</Script>;

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
