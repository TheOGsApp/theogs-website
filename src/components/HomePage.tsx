'use client';

import React, { useState, useEffect } from 'react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { appLinks } from '@/constants';
import { useAuthStore } from '@/store';
import { FloatingWords } from './FloatingWords';

interface Feature {
  title: string;
  desc: string;
  icon: IconName;
}

const features: Feature[] = [
  {
    title: 'Skilled-Only Roles',
    desc: 'Every position requires minimum 2+ years of proven experience. No entry-level noise. 0% juniors and No unqualified applicants - ever',
    icon: 'shield',
  },
  {
    title: 'Transparent Salaries',
    desc: 'No hidden numbers. Every role shows exact salary ranges upfront.',
    icon: 'dollar-sign',
  },
  {
    title: 'Respect for Time',
    desc: 'Efficient, relevant hiring without irrelevant tests or drawn-out processes.',
    icon: 'clock',
  },
];

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const { setOpen } = useAuthStore();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'TheOGs',
    description:
      'Job platform for experienced developers with 2+ years experience.',
    operatingSystem: 'iOS, Android, Web',
    applicationCategory: 'RecruitmentPlatform',
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingWords />
        </div>

        <div
          className={`text-center max-w-5xl transition-all duration-1000 relative z-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 text-white wrap-break-word whitespace-break-spaces typewriter">
            Your Experience
            <span className="ml-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Speaks
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            No resume. No cover letter. No nonsense. Just your work, real
            companies, and opportunities that actually fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              className="group cursor-pointer px-8 py-3 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={() => setOpen(true)}
            >
              <span className="flex items-center justify-center">
                Join TheOGs
                <DynamicIcon
                  name="arrow-right"
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <DynamicIcon name="users" className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                Minimum 2+
              </div>
              <div className="text-sm text-gray-500">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <DynamicIcon
                  name="dollar-sign"
                  className="w-6 h-6 text-white"
                />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                100%
              </div>
              <div className="text-sm text-gray-500">Salary Transparency</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <DynamicIcon name="shield" className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                Curated
              </div>
              <div className="text-sm text-gray-500">High-Quality Matches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 px-4 mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Tired of the Hiring Noise?
            </h2>
            <p className="text-xl text-gray-400">
              Developers waste time on mismatched roles. Companies waste time on
              mismatched candidates. We solve both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <article className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">
                  Developers Avoid:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Mislabelled &quot;experienced&quot; positions</li>
                  <li>• Hidden salary ranges</li>
                  <li>• Unnecessary hoops & irrelevant tests</li>
                  <li>• Roles that don&apos;t fit your expertise</li>
                </ul>
              </article>

              <article className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">
                  Companies Avoid:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Underqualified applicants</li>
                  <li>• Long, drawn-out hiring cycles</li>
                  <li>• Misaligned expectations</li>
                  <li>• Recruiting noise & spam</li>
                </ul>
              </article>
            </div>

            <div className="space-y-8">
              <article className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  Our Solution:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Verified minimum 2+ years of experienced candidates</li>
                  <li>• 100% upfront salary transparency</li>
                  <li>• Relevant matches only</li>
                  <li>• Mutual respect from day one</li>
                </ul>
              </article>

              <article className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">
                  TheOGs Difference:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Built for experienced engineers</li>
                  <li>• Streamlined hiring for companies</li>
                  <li>• Quality over quantity</li>
                  <li>• Better long-term hires</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 min-h-[600px]">
            <div className="md:absolute -left-12 top-1/2 md:-translate-y-1/2 md:-rotate-12 w-[330px] h-[680px] bg-black rounded-[55px] p-3 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[45px] overflow-hidden relative">
                <Image
                  src="/applicant.png"
                  alt="talent app"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[130px] h-[35px] bg-black rounded-full z-10" />
              </div>
            </div>

            <div className="max-w-md mx-auto text-center z-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
                Get TheOGs App
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For you as a talent, TheOGs is completely free — and incredibly
                helpful. Download the app and get started instantly.
              </p>
              <div className="flex justify-center gap-4 cursor-pointer">
                {appLinks
                  .filter((link) => link.published)
                  .map((link) => (
                    <Link
                      key={link.alt}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={link.imgSrc}
                        alt={link.alt}
                        width={150}
                        height={30}
                        unoptimized
                        className="object-cover"
                      />
                    </Link>
                  ))}
              </div>
            </div>

            <div className="md:absolute -right-12 top-1/2 md:-translate-y-1/2 md:rotate-12 w-[330px] h-[680px] bg-black rounded-[55px] p-3 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[45px] overflow-hidden relative">
                <Image
                  src="/job.png"
                  alt="job app"
                  width={400}
                  height={800}
                  unoptimized
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[130px] h-[35px] bg-black rounded-full z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies & Developers Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Built for Both Sides
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <article className="bg-white/5 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <DynamicIcon
                  name="code"
                  className="w-8 h-8 text-blue-400 mr-4"
                />
                <h3 className="text-3xl font-bold">For Developers</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Skip the noise and find opportunities that value your skills.
                  TheOGs connects you with teams who know the value of clean
                  code, scalable systems, and real engineering culture.
                </p>
                <div className="pt-4">
                  <h4 className="text-white font-semibold mb-3">
                    You’ll find:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">▸</span>
                      <span>
                        Teams using modern workflows like{' '}
                        <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                          git
                        </code>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">▸</span>
                      <span>
                        Real{' '}
                        <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">
                          code reviews
                        </code>{' '}
                        culture
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">▸</span>
                      <span>
                        Positions with meaningful{' '}
                        <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">
                          technical challenges
                        </code>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="bg-white/5 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <DynamicIcon
                  name="briefcase"
                  className="w-8 h-8 text-purple-400 mr-4"
                />
                <h3 className="text-3xl font-bold">For Companies</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Access a pool of proven developers who have shipped real
                  products, solved production issues, and think in systems — not
                  just syntax.
                </p>
                <div className="pt-4">
                  <h4 className="text-white font-semibold mb-3">You’ll get:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▸</span>
                      <span>
                        Engineers who understand{' '}
                        <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                          system design
                        </code>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▸</span>
                      <span>
                        People who’ve handled{' '}
                        <code className="bg-gray-800 px-2 py-1 rounded text-red-400">
                          critical incidents
                        </code>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▸</span>
                      <span>
                        Talent that knows when to{' '}
                        <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                          refactor vs rebuild
                        </code>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 mt-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">Our Mission</h2>
          <div className="text-xl text-gray-300 font-light leading-relaxed space-y-8">
            <p>
              We’re building the hiring platform that{' '}
              <span className="text-white font-semibold">
                top developers trust
              </span>{' '}
              and{' '}
              <span className="text-white font-semibold">
                companies rely on
              </span>
              .
            </p>
            <p>
              No more vague job titles.{' '}
              <span className="text-white font-semibold">
                No more salary guessing games
              </span>
              .
            </p>
            <p>
              Just{' '}
              <span className="text-white font-semibold">real companies</span>{' '}
              with{' '}
              <span className="text-white font-semibold">
                real opportunities
              </span>{' '}
              hiring{' '}
              <span className="text-white font-semibold">real talent</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Why People Choose TheOGs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <article
                key={i}
                className="group border border-gray-800 rounded-2xl p-8 hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6">
                  <DynamicIcon
                    name={f.icon}
                    className="w-8 h-8 text-white group-hover:text-black transition-colors"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-700">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dev Language Section */}
      <section className="py-24 px-4 mt-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            We Speak Developer
          </h2>
          <div className="bg-black/50 border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  For Developers:
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    • No pointless{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-red-400">
                      whiteboarding
                    </code>
                  </p>
                  <p>
                    • Companies that understand{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                      Docker
                    </code>{' '}
                    and modern DevOps
                  </p>
                  <p>
                    • Teams that practice{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                      TDD
                    </code>
                  </p>
                  <p>
                    • Roles where{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">
                      technical debt
                    </code>{' '}
                    is taken seriously
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  For Companies:
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    • Developers with{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">
                      event-driven architecture
                    </code>{' '}
                    experience
                  </p>
                  <p>
                    • Engineers who’ve scaled{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">
                      distributed systems
                    </code>
                  </p>
                  <p>
                    • People who know when to{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-pink-400">
                      optimize vs ship
                    </code>
                  </p>
                  <p>
                    • Team players who write{' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">
                      maintainable code
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ready to Level Up <br />
            <span className="text-white">Your Dev Career?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            TheOGs is for developers with minimum 2+ years of experience seeking
            and offering quality opportunities.{' '}
            <span className="text-white font-medium">
              Join us and cut through the noise.
            </span>
          </p>
          <div className="space-y-6">
            <button
              className="group cursor-pointer px-16 py-3 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl"
              onClick={() => setOpen(true)}
            >
              <span className="flex items-center justify-center">
                Join TheOGs{' '}
                <DynamicIcon
                  name="arrow-right"
                  className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform"
                />
              </span>
            </button>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <DynamicIcon name="users" className="w-4 h-4 mr-1" />
                2+ years experience required
              </span>
              <span>•</span>
              <span className="flex items-center">
                <DynamicIcon name="dollar-sign" className="w-4 h-4 mr-1" />
                Transparent salaries
              </span>
              <span>•</span>
              <span className="flex items-center">
                <DynamicIcon name="zap" className="w-4 h-4 mr-1" />
                Quality positions only
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="flex justify-center w-full py-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-contain max-w-5xl"
        >
          <source src="/theogs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
}
