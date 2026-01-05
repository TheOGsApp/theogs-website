'use client';

import { useState } from 'react';
import { Check, TrendingDown } from 'lucide-react';
import { useAuthStore } from '@/store';

export default function PricingSection() {
  const [active, setActive] = useState('companies');

  return (
    <section
      className="text-white py-24 px-6"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-900/30 border border-emerald-500/50 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">
              Industry-Leading Pricing
            </span>
          </div>
          <h1
            id="pricing-heading"
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
          >
            Transparent Pricing Built for Growth
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Success-based fees that align our interests with yours.
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Only pay when you win - no hidden costs, no surprises.
          </p>
        </header>

        {/* Toggle - Uses Aria Roles for Accessibility/SEO */}
        <div className="flex justify-center mb-16">
          <nav
            className="bg-slate-800/50 backdrop-blur rounded-full p-1.5 flex border border-slate-700"
            role="tablist"
          >
            <button
              role="tab"
              aria-selected={active === 'companies'}
              onClick={() => setActive('companies')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  active === 'companies'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
            >
              For Employers
            </button>
            <button
              role="tab"
              aria-selected={active === 'applicants'}
              onClick={() => setActive('applicants')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  active === 'applicants'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
            >
              For Candidates
            </button>
          </nav>
        </div>

        {/* Content - Both rendered for SEO, visibility toggled by CSS */}
        <div className="relative">
          <div
            className={
              active === 'companies'
                ? 'block animate-in fade-in duration-500'
                : 'hidden'
            }
          >
            <CompaniesPricing />
          </div>
          <div
            className={
              active === 'applicants'
                ? 'block animate-in fade-in duration-500'
                : 'hidden'
            }
          >
            <ApplicantsPricing />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompaniesPricing() {
  const { setOpen } = useAuthStore();
  return (
    <article className="space-y-16">
      {/* Main Pricing Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl border border-emerald-500/30 rounded-3xl p-12 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 backdrop-blur-xl">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Employer Pricing</h2>
              <p className="text-slate-400">Performance-based success fees</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-6 py-3">
              <span className="text-emerald-400 font-semibold uppercase tracking-wider text-xs">
                Best Value
              </span>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-7xl font-bold text-white mb-3">5%</p>
            <p className="text-slate-400 text-lg">of annual base salary</p>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 mb-10">
            <p className="text-slate-300 leading-relaxed">
              A single success-based fee calculated on the candidate&apos;s{' '}
              <strong className="text-white font-semibold">
                annual base salary
              </strong>
              . The fee is charged only after the candidate officially starts
              employment.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-10">
            <h3 className="font-semibold text-white mb-4 text-lg">
              What&apos;s Included
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Unlimited job postings',
                'Human-curated candidate matching',
                'Direct messaging & interview coordination',
                'Candidate onboarding support',
                'Full refund if hire leaves within 30 days',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fee Terms */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <section className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
              <h4 className="font-semibold text-white mb-3">Fee Terms</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Applied to base salary only
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Bonuses & equity excluded
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Payment on candidate&apos;s start date
                </li>
              </ul>
            </section>

            <section className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
              <h4 className="font-semibold text-white mb-3">Refund Policy</h4>
              <p className="text-slate-300 text-sm">
                If the candidate leaves within 30 days of their start date, a
                full refund is issued. No questions asked.
              </p>
            </section>
          </div>

          {/* Example */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <h4 className="text-sm text-emerald-400 font-semibold mb-2 uppercase">
              SAVINGS EXAMPLE
            </h4>
            <div className="flex items-baseline gap-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Base Salary</p>
                <p className="text-2xl font-bold text-white">€100,000</p>
              </div>
              <TrendingDown
                className="w-6 h-6 text-emerald-400"
                aria-hidden="true"
              />
              <div>
                <p className="text-slate-400 text-sm mb-1">Success Fee (5%)</p>
                <p className="text-2xl font-bold text-emerald-400">€5,000</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-white text-black py-2 px-8 rounded-full font-semibold hover:scale-110 transition-all duration-300 text-lg cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Start Hiring Now
            </button>
          </div>
        </div>
      </div>

      <CompetitorComparison />
    </article>
  );
}

function CompetitorComparison() {
  const competitors = [
    { name: 'Traditional Agencies', fee: '20-30%', terms: 'Upon placement' },
    {
      name: 'Executive Search Firms',
      fee: '25-35%',
      terms: 'Partially upfront',
    },
    { name: 'Retainer Recruiters', fee: '20-30%', terms: 'Upfront retainer' },
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white mb-2">
          Why We&apos;re Different
        </h3>
        <p className="text-slate-400 text-lg">
          Significantly lower costs with no hidden fees
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {/* Our Pricing */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-2 border-emerald-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <h4 className="text-2xl font-bold text-white">Our Pricing</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
              <p className="text-emerald-400 font-semibold mb-1">Success Fee</p>
              <p className="text-4xl font-bold text-white">5%</p>
              <p className="text-emerald-300 text-sm mt-2">Only on placement</p>
            </div>
            <ul className="space-y-3">
              {[
                'No upfront payments',
                'No hidden costs',
                'Full transparency',
                'Aligned incentives',
                '75% savings on average',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industry Standard */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-2 border-slate-700/50 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
            <h4 className="text-2xl font-bold text-white">Industry Standard</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-700/20 rounded-lg p-4 border border-slate-700/50">
              <p className="text-slate-400 font-semibold mb-1">Typical Fee</p>
              <p className="text-4xl font-bold text-white">20-30%</p>
              <p className="text-slate-400 text-sm mt-2">
                Often with upfront costs
              </p>
            </div>
            <ul className="space-y-3">
              {[
                'Retainer fees common',
                'Upfront payments required',
                'Hidden service charges',
                'Variable fee structures',
                'Higher barriers to entry',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400">
                  <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-slate-500"></div>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Competitor Table */}
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="pb-4 text-slate-300 font-semibold">
                Provider Type
              </th>
              <th className="pb-4 text-slate-300 font-semibold">Typical Fee</th>
              <th className="pb-4 text-slate-300 font-semibold">
                Payment Terms
              </th>
              <th className="pb-4 text-slate-300 font-semibold text-right">
                vs. Our 5%
              </th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((comp, i) => (
              <tr
                key={i}
                className="border-b border-slate-800 hover:bg-slate-800/30 transition"
              >
                <td className="py-4 text-white font-medium">{comp.name}</td>
                <td className="py-4 text-slate-300">{comp.fee}</td>
                <td className="py-4 text-slate-300 text-sm">{comp.terms}</td>
                <td className="py-4 text-right">
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {comp.fee.startsWith('20') ? 'Save 75-80%' : 'Save 80-85%'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Advantages */}
      <div className="max-w-5xl mx-auto mt-12 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
        <h4 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
          The Real Advantage
        </h4>
        <div className="grid md:grid-cols-3 gap-8">
          <section className="space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-emerald-400 font-bold text-xl">75%</span>
            </div>
            <h5 className="font-semibold text-white text-lg">Lower Costs</h5>
            <p className="text-slate-400 text-sm">
              On average, you&apos;ll pay 75% less than traditional recruitment
              agencies.
            </p>
          </section>

          <section className="space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
              <Check className="text-emerald-400 w-6 h-6" />
            </div>
            <h5 className="font-semibold text-white text-lg">No Surprises</h5>
            <p className="text-slate-400 text-sm">
              Transparent fees with no hidden costs or surprise charges.
            </p>
          </section>

          <section className="space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-emerald-400 font-bold text-xl">→</span>
            </div>
            <h5 className="font-semibold text-white text-lg">
              Aligned Incentives
            </h5>
            <p className="text-slate-400 text-sm">
              We only succeed when you succeed - we&apos;re invested in
              long-term quality hires.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

function ApplicantsPricing() {
  const services = [
    {
      title: 'Communication Skills',
      description:
        'Expert verification of professional communication and language proficiency.',
      validity: '6 months',
    },
    {
      title: 'Technical Assessment',
      description:
        'Rigorous technical evaluation matched to your specific engineering role.',
      validity: '6 months',
    },
    {
      title: 'Background Check',
      description:
        'Comprehensive employment history and credential verification for trust.',
      validity: 'Per engagement',
    },
  ];

  return (
    <article className="space-y-12">
      <h2 className="sr-only">Developer Assessment and Verification Fees</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <section
            key={i}
            className="border border-slate-700/50 rounded-2xl p-8 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur hover:border-emerald-500/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              {service.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="pt-6 border-t border-slate-700/50">
              <p className="text-sm text-slate-500 mb-1">Validity Period</p>
              <p className="text-emerald-400 font-semibold">
                {service.validity}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Localized Pricing by Country
        </h3>
        <p className="text-slate-400 leading-relaxed">
          Candidate service fees are calculated based on your specific location
          to ensure market fairness. Download the TheOGs App to view transparent
          pricing available in your region.
        </p>
      </div>
    </article>
  );
}
