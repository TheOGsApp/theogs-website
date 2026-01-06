import { IconName } from 'lucide-react/dynamic';

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

export const teamMembers: TeamMember[] = [
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
    role: 'Cloud & DevOps Engineer',
    image: '/team/vinay.jpeg',
    largeImage: true,
    enabled: true,
    description:
      'A cloud technology innovator, Vinay is dedicated to building cutting-edge solutions that leverage the power of the cloud. As a Cloud & DevOps Engineer, he’s shaping the future of cloud-based systems to drive efficiency and innovation.',
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
    role: 'Marketing Specialist',
    image: '/team/hilary.jpeg',
    largeImage: true,
    description:
      'Engr. Hilary Ogalagu: As a Marketing Specialist, Hilary brings expertise in crafting compelling campaigns that resonate with audiences. By leveraging data-driven strategies, Hilary helps elevate brand presence and drive engagement for TheOGs.',
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
