'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

import { appConfig } from '@/config';
import { useAuthStore } from '@/store';

interface SocialMediaLink {
  platform: string;
  url: string;
  icon: IconName;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  largeImage?: boolean;
  description: string;
  socialMediaLinks: SocialMediaLink[];
  enabled?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Naren',
    role: 'Founder & CEO',
    image: '/team/naren.png',
    largeImage: true,
    enabled: true,
    description:
      'A tech visionary and leader, Naren is dedicated to creating limitless opportunities and shaping careers through innovation. As Founder and CEO, he drives the company’s mission to empower individuals, unlocking new possibilities in the tech world.',
    socialMediaLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/narenv7',
        icon: 'linkedin',
      },
      {
        platform: 'X',
        url: 'https://x.com/narenv456',
        icon: 'twitter',
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/narenv7',
        icon: 'instagram',
      },
    ],
  },
  {
    name: 'Vinay',
    role: 'Chief Cloud & DevOps Engineer',
    image: '/team/vinay.jpeg',
    largeImage: true,
    enabled: true,
    description:
      'A cloud technology innovator, Vinay is dedicated to building cutting-edge solutions that leverage the power of the cloud. As a Chief Cloud & DevOps Engineer, he’s shaping the future of cloud-based systems to drive efficiency and innovation.',
    socialMediaLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vinay-kurra',
        icon: 'linkedin',
      },
      {
        platform: 'X',
        url: 'https://x.com/VinayKurra28',
        icon: 'twitter',
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/vinay_kurra',
        icon: 'instagram',
      },
    ],
  },
  {
    name: 'Engr. Hilary Ogalagu',
    role: 'Chief Marketing Officer',
    image: '/team/hilary.jpeg',
    largeImage: true,
    description:
      'Engr. Hilary Ogalagu: As a Chief Marketing Officer, Hilary brings expertise in crafting compelling campaigns that resonate with audiences. By leveraging data-driven strategies, Hilary helps elevate brand presence and drive engagement for TheOGs.',
    socialMediaLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hilary-ogalagu',
        icon: 'linkedin',
      },
      {
        platform: 'X',
        url: 'https://x.com/weenix1',
        icon: 'twitter',
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/weenix1',
        icon: 'instagram',
      },
    ],
  },
  {
    name: 'ChatGPT',
    role: 'Lead AI Developer & Code Specialist',
    image: '/team/chatgpt.jpg',
    description:
      'ChatGPT: As Lead AI Developer & Code Specialist, I’ve been helping Naren turn ideas into reality. From coding the core features to optimizing AI performance, I’m shaping the product to be smarter, faster, and more innovative.',
    socialMediaLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/openai',
        icon: 'linkedin',
      },
      {
        platform: 'X',
        url: 'https://x.com/ChatGPTapp',
        icon: 'twitter',
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/ChatGPT',
        icon: 'instagram',
      },
    ],
  },
  {
    name: 'Claude',
    role: 'Lead AI Developer & Code Specialist',
    image: '/team/claude.png',
    description:
      'Claude: As Lead AI Developer & Code Specialist, Claude is key in turning complex ideas into cutting-edge AI solutions. Helping Naren shape the product, Claude focuses on building the tech that drives innovation and makes everything run smoothly.',
    socialMediaLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/showcase/claude',
        icon: 'linkedin',
      },
      {
        platform: 'X',
        url: 'https://x.com/claudeai',
        icon: 'twitter',
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/claudeai',
        icon: 'instagram',
      },
    ],
  },
];

export default function AboutPage() {
  const { setOpen } = useAuthStore();
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
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-xl p-6 text-center shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={member.largeImage ? 120 : 60}
                height={member.largeImage ? 120 : 60}
                className="rounded-full mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{member.role}</p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {member.description}
              </p>

              {/* ===== Social Icons ===== */}
              <div className="flex justify-center space-x-4 mt-4">
                {member.socialMediaLinks.map((link) => {
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <DynamicIcon
                        name={link.icon}
                        size={20}
                        className="hover:text-blue-600"
                      />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="text-center">
        <h2 className="text-2xl font-playfair font-semibold mb-4">Join Us</h2>
        <p className="text-gray-300 mb-6">
          Ready to swipe your way to a new career?{' '}
          <a
            className="underline underline-offset-2 hover:text-gray-100 transition-colors font-semibold cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Get started with TheOGs
          </a>{' '}
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
