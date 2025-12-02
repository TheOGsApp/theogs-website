'use client';

import React, { useState, useEffect } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import Image from 'next/image';

import { appLinks } from '@/constants';

const devWords = [
  'async/await',
  'Microservices',
  'Kubernetes',
  'React Hooks',
  'GraphQL',
  'Docker',
  'CI/CD',
  'Typescript',
  'Redis',
  'Postgres',
  'Mongodb',
  'REST APIs',
  'Websockets',
  'Serverless',
  'Terraform',
  'Jenkins',
];

const floatingWord = (word: string, delay: number) => (
  <div
    key={word}
    className="absolute text-slate-500 text-sm font-mono opacity-20 animate-pulse"
    style={{
      left: `${Math.floor(Math.random() * 80 + 10)}%`,
      top: `${Math.floor(Math.random() * 80 + 10)}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }}
  >
    {word}
  </div>
);

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navToAppLinks = () => {
    document
      .getElementById('app-download')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Floating Dev Words Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {devWords.map((word, i) => floatingWord(word, i * 0.5))}
        </div>

        <div
          className={`text-center max-w-5xl transition-all duration-1000 relative z-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
            TheOGs
          </h1>

          <div className="relative mb-8">
            <div className="w-24 h-[3px] bg-white mx-auto" />
          </div>

          <h2 className="text-xl md:text-4xl font-light text-gray-300 mb-8 leading-tight">
            OGs is the space for experienced tech professionals who want
            meaningful roles, not clutter.{' '}
            <span className="font-bold text-white relative">
              Here, your experience is valued and every job is curated.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Trusted companies, real openings, no distractions.{' '}
            <span className="text-white font-medium mx-2">
              Only opportunities that match your level.
            </span>{' '}
            If you are an OG in your field, this is where you belong. Find the
            perfect fit for your next chapter.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              className="group px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={navToAppLinks}
            >
              <span className="flex items-center justify-center">
                Explore Opportunities
                <DynamicIcon
                  name="arrow-right"
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>

            <button
              className="group px-12 py-4 border-2 border-gray-600 text-white font-bold text-lg rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:scale-105"
              onClick={navToAppLinks}
            >
              <span className="flex items-center justify-center">
                Learn More
                <DynamicIcon
                  name="chevron-down"
                  className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"
                />
              </span>
            </button>
          </div>

          {/* Quick Stats */}
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
      <section className="py-24 px-4 mt-4 bg-[#0a0a0a]">
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
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">
                  Developers Avoid:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Mislabelled &quot;experienced&quot; positions</li>
                  <li>• Hidden salary ranges</li>
                  <li>• Unnecessary hoops & irrelevant tests</li>
                  <li>• Roles that don&apos;t fit your expertise</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">
                  Companies Avoid:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Underqualified applicants</li>
                  <li>• Long, drawn-out hiring cycles</li>
                  <li>• Misaligned expectations</li>
                  <li>• Recruiting noise & spam</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  Our Solution:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Verified minimum 2+ years of experienced candidates</li>
                  <li>• 100% upfront salary transparency</li>
                  <li>• Relevant matches only</li>
                  <li>• Mutual respect from day one</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">
                  TheOGs Difference:
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Built for experienced engineers</li>
                  <li>• Streamlined hiring for companies</li>
                  <li>• Quality over quantity</li>
                  <li>• Better long-term hires</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative flex justify-center items-center min-h-[600px]">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-12 w-[330px] h-[680px] bg-black rounded-[55px] p-3 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[45px] overflow-hidden relative">
                <Image
                  src="/applicant.png"
                  alt="phone"
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
                    <a
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
                    </a>
                  ))}
              </div>
            </div>

            <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-12  w-[330px] h-[680px] bg-black rounded-[55px] p-3 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[45px] overflow-hidden relative">
                <Image
                  src="/job.png"
                  alt="phone"
                  width={400}
                  height={800}
                  unoptimized
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-3 left-1/2 -translate-x-1/2  w-[130px] h-[35px] bg-black rounded-full z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies & Developers Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Built for Both Sides
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Developers */}
            <div className="bg-white/5 border border-gray-800 rounded-2xl p-8">
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
            </div>

            {/* For Companies */}
            <div className="bg-white/5 border border-gray-800 rounded-2xl p-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-24 px-4 mt-4 bg-[#0a0a0a]">
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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Why People Choose TheOGs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Skilled-Only Roles',
                desc: 'Every position requires minimum 2+ years of proven experience. No entry-level noise.',
                icon: () => (
                  <DynamicIcon
                    name="shield"
                    className="w-8 h-8 text-white group-hover:text-black transition-colors"
                  />
                ),
              },
              {
                title: 'Transparent Salaries',
                desc: 'No hidden numbers. Every role shows exact salary ranges upfront.',
                icon: () => (
                  <DynamicIcon
                    name="dollar-sign"
                    className="w-8 h-8 text-white group-hover:text-black transition-colors"
                  />
                ),
              },
              {
                title: 'Respect for Time',
                desc: 'Efficient, relevant hiring without irrelevant tests or drawn-out processes.',
                icon: () => (
                  <DynamicIcon
                    name="clock"
                    className="w-8 h-8 text-white group-hover:text-black transition-colors"
                  />
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group border border-gray-800 rounded-2xl p-8 hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6">
                  <feature.icon />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Language Section */}
      <section className="py-24 px-4 mt-4 bg-[#0a0a0a]">
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
      <section className="py-32 px-4 bg-black text-center relative">
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
              className="group px-16 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={navToAppLinks}
            >
              <span className="flex items-center justify-center">
                Join TheOGs
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
      {/* Background Video */}
      <section className="flex justify-center w-full">
        <video autoPlay loop muted className="w-full h-full object-contain">
          <source src="/theogs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}
