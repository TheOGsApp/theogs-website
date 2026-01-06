import { HomePage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TheOGs | Your Experience Speaks',
  description:
    'No resume. No cover letter. No nonsense. Just your work, real companies, and opportunities that actually fit.',
  openGraph: {
    title: 'TheOGs | Your Experience Speaks',
    description:
      'The job platform for developers with 2+ years of experience and 100% salary transparency.',
    url: 'https://theogs.app',
    type: 'website',
    images: [{ url: '/logo.png' }],
  },
};

export default function Home() {
  return <HomePage />;
}
