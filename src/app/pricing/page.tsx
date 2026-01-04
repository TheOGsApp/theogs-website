'use client';

import { useState } from 'react';
import { Check, TrendingDown } from 'lucide-react';

export default function PricingSection() {
  const [active, setActive] = useState('companies');

  return (
    <section className=" text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-900/30 border border-emerald-500/50 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">
              Industry-Leading Pricing
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Transparent Pricing Built for Growth
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Success-based fees that align our interests with yours. Only pay
            when you win—no hidden costs, no surprises.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-800/50 backdrop-blur rounded-full p-1.5 flex border border-slate-700">
            <button
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
          </div>
        </div>

        {/* Content */}
        {active === 'companies' ? <CompaniesPricing /> : <ApplicantsPricing />}
      </div>
    </section>
  );
}

function CompaniesPricing() {
  return (
    <div className="space-y-16">
      {/* Main Pricing Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl border border-emerald-500/30 rounded-3xl p-12 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 backdrop-blur-xl">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Employer Pricing</h3>
              <p className="text-slate-400">Performance-based success fees</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-6 py-3">
              <p className="text-emerald-400 font-semibold">Best Value</p>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-7xl font-bold text-white mb-3">5%</p>
            <p className="text-slate-400 text-lg">of annual base salary</p>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 mb-10">
            <p className="text-slate-300 leading-relaxed">
              A single success-based fee calculated on the candidate&apos;s{' '}
              <span className="text-white font-semibold">
                annual base salary
              </span>
              . The fee is charged only after the candidate officially starts
              employment.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-10">
            <h4 className="font-semibold text-white mb-4 text-lg">
              What&apos;s Included
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Unlimited job postings',
                'Human-curated candidate matching',
                'Direct messaging & interview coordination',
                'Candidate onboarding support',
                'Full refund if hire leaves within 30 days',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Terms */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
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
            </div>

            <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
              <h4 className="font-semibold text-white mb-3">Refund Policy</h4>
              <p className="text-slate-300 text-sm">
                If the candidate leaves within 30 days of their start date, a
                full refund is issued. After 30 days, the fee becomes
                non-refundable.
              </p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-sm text-emerald-400 font-semibold mb-2">
              EXAMPLE CALCULATION
            </p>
            <div className="flex items-baseline gap-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Base Salary</p>
                <p className="text-2xl font-bold text-white">€100,000</p>
              </div>
              <TrendingDown className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-slate-400 text-sm mb-1">Success Fee (5%)</p>
                <p className="text-2xl font-bold text-emerald-400">€5,000</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 text-lg">
            Create Employer Account
          </button>
        </div>
      </div>

      {/* Comparison Section */}
      <CompetitorComparison />
    </div>
  );
}

function CompetitorComparison() {
  const competitors = [
    { name: 'Traditional Agencies', fee: '20-30%', terms: 'Upon placement' },
    {
      name: 'Executive Search Firms',
      fee: '25-35%',
      terms: 'Partially upfront + placement',
    },
    {
      name: 'Retainer Recruiters',
      fee: '20-30%',
      terms: 'Upfront retainer required',
    },
  ];

  return (
    <div>
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

            <div className="space-y-3">
              {[
                'No upfront payments',
                'No hidden costs',
                'Full transparency',
                'Aligned incentives',
                '75% savings on average',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-100">{item}</span>
                </div>
              ))}
            </div>
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

            <div className="space-y-3">
              {[
                'Retainer fees common',
                'Upfront payments required',
                'Hidden service charges',
                'Variable fee structures',
                'Higher barriers to entry',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400">
                  <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-slate-500"></div>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Table */}
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="pb-4 text-slate-300 font-semibold">
                Provider Type
              </th>
              <th className="pb-4 text-slate-300 font-semibold">Typical Fee</th>
              <th className="pb-4 text-slate-300 font-semibold">
                Payment Terms
              </th>
              <th className="pb-4 text-slate-300 font-semibold">vs. Our 5%</th>
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
                <td className="py-4">
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
        <h4 className="text-2xl font-bold text-white mb-6">
          The Real Advantage
        </h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-emerald-400 font-bold text-xl">75%</span>
            </div>
            <h5 className="font-semibold text-white">Lower Costs</h5>
            <p className="text-slate-400 text-sm">
              On average, you&apos;ll pay 75% less than traditional recruitment
              agencies.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-emerald-400 font-bold">✓</span>
            </div>
            <h5 className="font-semibold text-white">No Surprises</h5>
            <p className="text-slate-400 text-sm">
              Transparent fees with no hidden costs or surprise charges.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-emerald-400 font-bold">→</span>
            </div>
            <h5 className="font-semibold text-white">Aligned Incentives</h5>
            <p className="text-slate-400 text-sm">
              We only succeed when you succeed - we&apos;re invested in
              long-term quality hires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicantsPricing() {
  const services = [
    {
      title: 'Communication Verification',
      description:
        'Verifies professional communication proficiency in your required language(s).',
      validity: '6 months',
    },
    {
      title: 'Technical Assessment',
      description:
        'Role-specific technical evaluation aligned with industry standards and best practices.',
      validity: '6 months',
    },
    {
      title: 'Background Verification',
      description:
        'Comprehensive verification of employment history and educational qualifications.',
      validity: 'Per engagement',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="border border-slate-700/50 rounded-2xl p-8 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition">
              {service.title}
            </h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="pt-6 border-t border-slate-700/50">
              <p className="text-sm text-slate-500 mb-1">Validity</p>
              <p className="text-emerald-400 font-semibold">
                {service.validity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 text-center">
        <p className="text-slate-300 mb-2">Transparent pricing by location</p>
        <p className="text-2xl font-bold text-white mb-6">
          Pricing displayed within the platform
        </p>
        <p className="text-slate-400">
          Candidate service fees are determined by your country and location,
          ensuring fair and competitive pricing. All costs are transparent and
          displayed before you engage with any assessment or verification
          service.
        </p>
      </div>
    </div>
  );
}
