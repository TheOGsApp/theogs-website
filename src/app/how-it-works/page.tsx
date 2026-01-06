'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import {
  UserOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

import { useAuthStore } from '@/store';

const applicantSteps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description:
      'Sign up in seconds. Enter your details, skills, and experience. Everything handwritten, no third parties.',
    icon: <UserOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/connect.gif',
    highlight: 'Quick Setup',
  },
  {
    number: '02',
    title: 'Get Verified',
    description:
      'We verify your experience. Only 2+ years gets through. This keeps quality high.',
    icon: <CheckCircleOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/verification.gif',
    highlight: 'Quality Gate',
  },
  {
    number: '03',
    title: 'Swipe on Jobs',
    description:
      'Browse curated roles with full salary transparency. Swipe right on what fits.',
    icon: <ThunderboltOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/swipe.gif',
    highlight: 'No Surprises',
  },
  {
    number: '04',
    title: 'Match & Get Hired',
    description:
      'When companies like you back, chat directly. No recruiters, no gatekeepers.',
    icon: <RocketOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/find.gif',
    highlight: 'Direct Connect',
  },
];

const recruiterSteps = [
  {
    number: '01',
    title: 'Post Your Role',
    description:
      'List your position with real salary ranges. Tell us what you need, skip the fluff.',
    icon: <RocketOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/posting.gif',
    highlight: 'Be Honest',
  },
  {
    number: '02',
    title: 'Get Verified',
    description: 'We verify your company. This builds trust with developers.',
    icon: <CheckCircleOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/verification.gif',
    highlight: 'Build Trust',
  },
  {
    number: '03',
    title: 'Swipe on Talent',
    description:
      'Browse verified developers with 2+ years experience. See real skills.',
    icon: <UserOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/swipe.gif',
    highlight: 'Real Devs',
  },
  {
    number: '04',
    title: 'Hire Fast',
    description:
      'Match with developers who want your role. Chat directly and hire in days.',
    icon: <ThunderboltOutlined className="text-xl sm:text-2xl !text-white" />,
    gifUrl: '/welcome/find.gif',
    highlight: '10x Faster',
  },
];

export default function HowItWorksPage() {
  const { setOpen } = useAuthStore();

  const [activeTab, setActiveTab] = useState<'developers' | 'companies'>(
    'developers',
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const steps = activeTab === 'developers' ? applicantSteps : recruiterSteps;

  const handleTabChange = (tab: 'developers' | 'companies') => {
    setActiveTab(tab);
    setCurrentSlide(0);
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How TheOGs Works for ${activeTab === 'developers' ? 'Developers' : 'Companies'}`,
    description: `Step-by-step guide to ${activeTab === 'developers' ? 'finding a tech job' : 'hiring top talent'} using our swipe-based platform.`,
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: step.description,
        },
      ],
    })),
  };

  return (
    <div className="min-h-screen text-white pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4">
          <span className="text-gray-200">How It Works</span>
        </h1>
        <p className="text-gray-100 text-base md:text-lg leading-relaxed px-4">
          TheOGs uses a swipe-based approach to connect developers and companies
          in seconds.
        </p>
      </header>

      {/* Tabs - Semantic Navigation */}
      <nav
        className="max-w-4xl mx-auto px-4 pb-8 md:pb-12"
        aria-label="Role selection"
      >
        <div className="flex justify-center gap-2 sm:gap-4">
          <button
            onClick={() => handleTabChange('developers')}
            aria-pressed={activeTab === 'developers'}
            className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base ${
              activeTab === 'developers'
                ? 'bg-white text-blue-600'
                : 'bg-gray-800 text-white'
            }`}
          >
            For Developers
          </button>
          <button
            onClick={() => handleTabChange('companies')}
            aria-pressed={activeTab === 'companies'}
            className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base ${
              activeTab === 'companies'
                ? 'bg-white text-blue-600'
                : 'bg-gray-800 text-white'
            }`}
          >
            For Companies
          </button>
        </div>
      </nav>

      {/* Swiper Cards */}
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 pb-8">
        <div className="relative overflow-x-hidden md:overflow-x-visible">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            cardsEffect={{
              perSlideOffset: 8,
              perSlideRotate: 1,
              slideShadows: false,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            className="w-full h-full"
          >
            {steps.map((step, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="w-full h-full bg-white text-black rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black flex items-center justify-center rounded-lg">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-gray-500 font-bold">
                            {step.number}
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                            {step.highlight}
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 font-semibold">
                        {idx + 1}/{steps.length}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 mb-3 sm:mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                      <Image
                        src={step.gifUrl}
                        alt={step.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-black">
                        {step.title}
                      </h2>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 pb-8 md:pb-12">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperInstance?.slideTo(idx)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              idx === currentSlide
                ? 'w-6 sm:w-8 bg-white'
                : 'w-1.5 sm:w-2 bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-3 md:mb-4">
          <span className="text-gray-200">Ready to Get Started?</span>
        </h2>
        <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed px-4">
          {activeTab === 'developers'
            ? 'Join experienced developers finding better opportunities.'
            : 'Join companies hiring top talent faster.'}
        </p>
        <button
          className="bg-white hover:bg-gray-700 text-black font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-colors text-base sm:text-lg"
          onClick={() => setOpen(true)}
        >
          Sign Up Free
        </button>
      </div>
    </div>
  );
}
