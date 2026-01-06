'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DynamicIcon } from 'lucide-react/dynamic';

import { appConfig } from '@/config';
import { useAuthStore } from '@/store';
import Link from 'next/link';
import { teamMembers } from '@/constants';

export default function AboutPage() {
  const { setOpen } = useAuthStore();
  return (
    <div className="animate-fade-in-scale max-w-6xl mx-auto text-white p-10 border border-gray-800 shadow-xl">
      <header>
        <h1 className="text-4xl font-playfair font-bold mb-6 text-center">
          About <span className="text-gray-300">TheOGs</span>
        </h1>
      </header>

      <section className="mb-12 pb-8 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">
          TheOGs was founded with a simple goal: to make job searching as
          intuitive as swiping on your favorite app. Launched in 2026, we’ve
          grown into a global platform connecting job seekers and employers
          across regions like the EU, US, India, UAE, Singapore, Australia, and
          beyond.
        </p>
      </section>

      <section className="mb-12 pb-8 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-8 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <motion.article
              key={member.name}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-xl p-6 text-center shadow-lg border border-transparent hover:border-gray-700 transition-all"
            >
              <Image
                src={member.image}
                alt={`Photo of ${member.name}, ${member.role} at TheOGs`}
                width={member.largeImage ? 120 : 60}
                height={member.largeImage ? 120 : 60}
                className="rounded-full mx-auto mb-4 object-cover"
                priority={member.largeImage}
              />

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-3 font-medium">
                {member.role}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.description}
              </p>

              <div className="flex justify-center space-x-4 mt-4">
                {member.socialMediaLinks.map((link) => (
                  <Link
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow ${member.name} on ${link.platform}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <DynamicIcon name={link.icon} size={20} />
                  </Link>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-playfair font-semibold mb-4">Join Us</h2>
        <div className="text-gray-300 mb-6">
          Ready to swipe your way to a new career?{' '}
          <button
            className="underline underline-offset-2 hover:text-gray-100 transition-colors font-semibold cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Get started with TheOGs
          </button>{' '}
          or contact us at{' '}
          <address className="inline not-italic">
            <Link
              href={`mailto:${appConfig.supportEmail}`}
              className="underline underline-offset-2 hover:text-gray-100 transition-colors font-semibold"
            >
              {appConfig.supportEmail}
            </Link>
          </address>
        </div>
      </section>
    </div>
  );
}
