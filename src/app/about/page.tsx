'use client';

import { appConfig } from '@/config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="animate-fade-in-scale max-w-6xl mx-auto bg-black text-white p-10 border border-gray-800 shadow-xl">
      {/* Heading */}
      <h1 className="text-4xl font-playfair font-bold mb-6 text-center">
        About <span className="text-gray-300">TheOGs</span>
      </h1>

      {/* Our Story */}
      <section className="mb-12 pb-8 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">
          TheOGs was founded with a simple goal: to make job searching as
          intuitive as swiping on your favorite app. Launched in 2025, we’ve
          grown into a global platform connecting job seekers and employers
          across regions like the EU, US, India, UAE, Singapore, Australia, and
          beyond. Our swipe-based approach, inspired by modern technology,
          streamlines the hiring process, making it fast, engaging, and
          effective.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-12 pb-8 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Our Vision
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We envision a world where finding the right job or talent is seamless
          and accessible for everyone, everywhere. TheOGs empowers professionals
          to discover opportunities that align with their skills and
          aspirations, while helping employers find the perfect match with ease.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-12 pb-8 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-8 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Person 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center shadow-lg"
          >
            <Image
              src="/team/naren.png"
              alt="Naren"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4 border border-gray-700"
            />
            <h3 className="text-xl font-semibold">Naren</h3>
            <p className="text-gray-400 text-sm mb-3">Founder & CEO</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tech mastermind shaping careers and creating limitless
              opportunities.
            </p>
          </motion.div>

          {/* Person 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center shadow-lg"
          >
            <Image
              src="/team/vinay.jpeg"
              alt="Vinay"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4 border border-gray-700"
            />
            <h3 className="text-xl font-semibold">Vinay</h3>
            <p className="text-gray-400 text-sm mb-3">
              Co-founder & Cloud Engineer
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tech innovator building intelligent hiring tools for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Us */}
      <section className="text-center">
        <h2 className="text-2xl font-playfair font-semibold mb-4">Join Us</h2>
        <p className="text-gray-300 mb-6">
          Ready to swipe your way to a new career?{' '}
          <Link
            href="/get-started"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors font-semibold"
          >
            Get started with TheOGs
          </Link>{' '}
          or contact us at{' '}
          <a
            href={`mailto:${appConfig.supportEmail}`}
            className="underline underline-offset-2 hover:text-gray-100 transition-colors font-semibold"
          >
            {appConfig.supportEmail}
          </a>{' '}
          to learn more.
        </p>
      </section>
    </div>
  );
}
