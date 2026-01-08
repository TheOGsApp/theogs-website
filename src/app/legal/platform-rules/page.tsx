import React from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle, Scale } from 'lucide-react';
import { appConfig } from '@/config';

export default function PlatformRules() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-950 to-black pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Platform Rules & Community Guidelines
          </h1>
          <p className="text-xl text-neutral-300 mb-6">
            Clear, honest rules that keep hiring fair for developers and
            companies. These guidelines exist to protect everyone using TheOGs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How We Keep Things Fair</h2>
          <p className="text-neutral-300 mb-6 text-lg">
            TheOGs is a trusted hiring marketplace. That trust only works when
            everyone plays fair. These rules explain what we expect from both
            employers and developers when using the platform.
          </p>
          <p className="text-neutral-300 text-lg">
            By using TheOGs, you agree to follow these guidelines. Ignoring them
            can lead to account suspension, permanent removal, or further action
            if necessary.
          </p>
        </div>

        {/* Employers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Scale className="w-8 h-8 text-red-500" />
            Rules for Employers & Companies
          </h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Hire Freely - Just Don’t Bypass the Platform
            </h3>

            <div className="space-y-6">
              <p className="text-neutral-300">
                Once you match with a developer on TheOGs, you’re free to run
                your hiring process however you want - video calls, in-person
                interviews, technical tests, or offline discussions.
              </p>

              <p className="text-neutral-300">
                What’s not okay is using the platform to discover talent and
                then cutting TheOGs out of the hiring process.
              </p>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-white mb-2">
                  ❌ What’s Not Allowed:
                </h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>
                    • Hiring a matched developer without paying the 5% success
                    fee
                  </li>
                  <li>
                    • Reporting a lower salary or fake details to reduce fees
                  </li>
                  <li>• Lying about start dates to delay or avoid payment</li>
                  <li>• Offering side deals to move the hire off-platform</li>
                  <li>
                    • Claiming you “found the candidate elsewhere” after
                    matching
                  </li>
                  <li>
                    • Using candidate information for unrelated recruiting
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-white mb-2">
                  ✓ What We Expect Instead:
                </h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>
                    • Interview candidates using whatever process fits your team
                  </li>
                  <li>• Be honest about compensation and hiring details</li>
                  <li>
                    • Confirm the hire once the developer officially starts
                  </li>
                  <li>• Pay the 5% success fee as agreed</li>
                  <li>
                    • Use the {appConfig.refundPeriodDays}-day refund if the
                    hire doesn’t work out
                  </li>
                </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                <p className="text-neutral-100 flex gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-blue-500" />
                  <span>
                    <strong>Your Process, Your Choice:</strong> We don’t control
                    how you hire. We simply ask that if you hire through TheOGs,
                    you do it honestly and honor the agreement.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-blue-500" />
            Rules for Developers & Candidates
          </h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Accepting an Offer Is a Commitment
            </h3>

            <div className="space-y-6">
              <p className="text-neutral-300 text-lg">
                When you accept an offer through TheOGs, you’re saying yes to
                that job. At that point, you’re removed from the active job
                market on our platform.
              </p>

              <p className="text-neutral-300">
                This protects companies who stop interviewing others and gives
                other developers a fair shot at open roles.
              </p>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-white mb-2">❌ You Can’t:</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Keep interviewing after accepting an offer</li>
                  <li>• Apply to new roles while mid-interview elsewhere</li>
                  <li>• Accept multiple offers “just in case”</li>
                  <li>• Back out to chase another role on TheOGs</li>
                  <li>• Use the platform to casually test the market</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-white mb-2">
                  ✓ What We Recommend:
                </h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Apply only to roles you’re serious about</li>
                  <li>• Ask questions before accepting an offer</li>
                  <li>• Take time to review compensation and expectations</li>
                  <li>• Be upfront about your availability and situation</li>
                  <li>
                    • If something major changes, contact TheOGs support
                    immediately
                  </li>
                </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                <p className="text-neutral-100 flex gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-blue-500" />
                  <span>
                    <strong>Why This Matters:</strong> Companies commit time,
                    money, and trust when they make an offer. Honoring that
                    commitment keeps the platform fair for everyone.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Be Honest About Your Experience
            </h3>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-white mb-2">❌ Not Allowed:</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Lying or exaggerating skills or experience</li>
                <li>• Creating multiple accounts</li>
                <li>• Applying to roles you don’t actually want</li>
                <li>• Disappearing after interviews are scheduled</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consequences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            What Happens If Rules Are Broken
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 text-red-500">Employers</h4>
              <ul className="space-y-3 text-neutral-300">
                <li>• First issue: warning and review</li>
                <li>• Second issue: 30-day suspension</li>
                <li>• Repeated abuse: permanent removal</li>
                <li>• Fraud: account termination and legal action</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 text-red-500">
                Developers
              </h4>
              <ul className="space-y-3 text-neutral-300">
                <li>• First issue: warning and profile review</li>
                <li>• Second issue: temporary suspension</li>
                <li>• Ongoing violations: permanent ban</li>
                <li>• Fraud: removal and possible legal action</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <p className="text-neutral-100 flex gap-3">
              <AlertCircle className="w-6 h-6 flex-shrink-0 text-red-500" />
              <span>
                We actively investigate reports and patterns of abuse. These
                rules are enforced to protect the integrity of TheOGs.
              </span>
            </p>
          </div>
        </section>

        {/* Reporting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Report a Violation</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8">
            <p className="text-neutral-300 mb-6">
              If something doesn’t feel right, tell us. All reports are reviewed
              confidentially by our compliance team.
            </p>
            <div className="bg-neutral-800 rounded p-4 mb-6">
              <p className="text-white font-semibold mb-2">📧 Email</p>
              <a
                href={`mailto:${appConfig.supportEmail}`}
                className="text-blue-400 hover:text-blue-300"
              >
                {appConfig.supportEmail}
              </a>
            </div>
            <p className="text-neutral-400 text-sm">
              Please include dates, names, and any relevant context to help us
              investigate properly.
            </p>
          </div>
        </section>

        {/* Agreement */}
        <section className="mb-16">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              By Using TheOGs, You Agree To:
            </h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Follow platform rules and hiring guidelines</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Be honest with companies and candidates</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Report misuse when you see it</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Accept consequences if rules are violated</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12 border-t border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-neutral-400 mb-6">
            Our team is happy to clarify any part of these rules.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition"
          >
            Contact Support
          </Link>
        </section>
      </div>
    </div>
  );
}
