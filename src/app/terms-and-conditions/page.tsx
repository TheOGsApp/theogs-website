'use client';

import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto text-white p-10 border border-gray-800 shadow-xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          <span className="text-gray-400">Terms & Conditions</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-300 leading-relaxed">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            1. Introduction
          </h2>
          <p>
            Welcome to TheOGs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;,
            or &quot;Platform&quot;). These Terms and Conditions
            (&quot;Terms&quot;) govern your use of our platform and services. By
            accessing or using TheOGs, you agree to be bound by these Terms. If
            you do not agree to any part of these Terms, please do not use our
            Platform.
          </p>
        </section>

        {/* 2. Services Overview */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            2. Services Overview
          </h2>
          <p className="mb-3">
            TheOGs is a matching platform that connects recruiters and employers
            with qualified job candidates. Our services include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Job posting and management tools</li>
            <li>Candidate matching using AI-powered algorithms</li>
            <li>Direct messaging and communication features</li>
            <li>Payment processing for successful hires</li>
          </ul>
        </section>

        {/* 3. Payment Terms */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            3. Payment Terms
          </h2>
          <p className="mb-3 font-semibold text-white">Commission Structure:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>We charge 5% of the candidate&apos;s annual base salary</li>
            <li>
              Commission is charged when the candidate officially joins and
              starts working
            </li>
            <li>
              Only base salary is counted. Bonuses, equity, and benefits are
              excluded
            </li>
          </ul>

          <p className="mb-3 font-semibold text-white">Payment Processing:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Payment processing details are coming soon</li>
            <li>
              You will need to provide valid payment information before posting
              jobs
            </li>
            <li>All payments will be processed in USD</li>
            <li>
              Payment will be charged automatically when the candidate&apos;s
              start date is confirmed
            </li>
          </ul>

          <p className="mb-3 font-semibold text-white">Refund Policy:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              If a candidate leaves within 30 days of their start date, you are
              eligible for a 100% refund
            </li>
            <li>Refunds are processed within 5-7 business days</li>
            <li>
              After 30 days, no refunds are available regardless of tenure
            </li>
            <li>
              To claim a refund, contact our support team with proof of
              departure
            </li>
          </ul>
        </section>

        {/* 4. Job Posting Rules */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            4. Job Posting Rules
          </h2>
          <p className="mb-3">
            <span className="font-semibold text-white">Duration & Limits:</span>{' '}
            Job postings remain active for 30 days. After expiration, you must
            repost if you wish to continue hiring.
          </p>
          <p className="mb-3">
            <span className="font-semibold text-white">Editing:</span> You may
            edit job title, description, and requirements after publishing.
            However, salary cannot be changed once posted. To change salary,
            close the posting and create a new one.
          </p>
          <p className="mb-3">
            <span className="font-semibold text-white">
              Prohibited Content:
            </span>{' '}
            Job postings must not contain:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Discriminatory language or requirements based on protected
              characteristics
            </li>
            <li>False or misleading information</li>
            <li>Spam, illegal activities, or harmful content</li>
            <li>Links to external recruitment platforms or contact methods</li>
            <li>Confidential or proprietary information</li>
          </ul>
        </section>

        {/* 5. User Responsibilities */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            5. User Responsibilities
          </h2>
          <p className="mb-3">
            <span className="font-semibold text-white">
              Account Information:
            </span>{' '}
            You are responsible for maintaining accurate and complete account
            information. You must keep your password confidential and notify us
            immediately of any unauthorized access.
          </p>
          <p className="mb-3">
            <span className="font-semibold text-white">Legal Compliance:</span>{' '}
            You agree to comply with all applicable laws and regulations when
            using our Platform, including employment laws in your jurisdiction.
          </p>
          <p className="mb-3">
            <span className="font-semibold text-white">
              Fair Hiring Practices:
            </span>{' '}
            You agree not to discriminate against candidates based on race,
            gender, age, religion, disability, or other protected
            characteristics. You are solely responsible for employment decisions
            and compliance with labor laws.
          </p>
        </section>

        {/* 6. Candidate Verification */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            6. Candidate Verification
          </h2>
          <p className="mb-3">
            <span className="font-semibold text-white">
              Our Verification Process:
            </span>{' '}
            We verify candidate profiles and validate their information during
            signup, including identity, email, and work history. We display
            verified badges on genuine profiles to help you identify trusted
            candidates.
          </p>
          <p className="mb-3">
            <span className="font-semibold text-white">
              Your Due Diligence:
            </span>{' '}
            However, candidate information may change over time. While we strive
            to maintain profile accuracy, we recommend that you conduct your own
            verification and background checks before finalizing any hire. You
            should not rely solely on our verification and should independently
            verify candidate qualifications, experience, and credentials.
          </p>
          <p>
            We are not liable for any inaccuracies in candidate profiles
            discovered after hire. It is your responsibility to verify all
            information before making employment decisions.
          </p>
        </section>

        {/* 7. Candidate Conduct */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            7. Candidate Conduct
          </h2>
          <p className="mb-3">
            Candidates must provide honest and accurate information in their
            profiles. We reserve the right to suspend accounts for false
            information, fraudulent behavior, or violation of platform
            guidelines.
          </p>
        </section>

        {/* 8. Intellectual Property */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            8. Intellectual Property
          </h2>
          <p className="mb-3">
            All content on TheOGs, including our matching algorithm, design,
            text, and functionality, is owned by us or licensed to us. You may
            not reproduce, distribute, or transmit any content without our prior
            written permission.
          </p>
        </section>

        {/* 9. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            9. Limitation of Liability
          </h2>
          <p className="mb-3">
            TheOGs is provided &quot;as-is&quot; without warranties of any kind.
            We are not responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              The quality, accuracy, or reliability of candidate profiles or
              information
            </li>
            <li>
              Employment decisions or outcomes resulting from hiring through our
              Platform
            </li>
            <li>Disputes between employers and employees</li>
            <li>Loss of data, profits, or business interruption</li>
          </ul>
          <p className="mt-4">
            Our liability is limited to the fees you paid in the 12 months prior
            to the claim.
          </p>
        </section>

        {/* 10. Dispute Resolution */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            10. Dispute Resolution
          </h2>
          <p className="mb-3">
            <span className="font-semibold text-white">Contact Support:</span>{' '}
            For disputes regarding payments, refunds, or job postings, contact
            our support team at support@theogs.app.
          </p>
          <p className="mb-3">
            <span className="font-semibold text-white">Arbitration:</span> Any
            disputes not resolved within 30 days may be subject to binding
            arbitration. Both parties agree to submit claims to arbitration
            rather than court proceedings.
          </p>
        </section>

        {/* 11. Data Privacy & Security */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            11. Data Privacy & Security
          </h2>
          <p className="mb-3">
            We collect and process personal data in accordance with applicable
            privacy laws, including GDPR. Your data is protected with bank-level
            encryption (AES-256). We never share your data with third parties
            without your consent.
          </p>
          <p>
            For detailed information, please review our{' '}
            <Link
              href="/legal/privacy-policy"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* 12. Account Termination */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            12. Account Termination
          </h2>
          <p className="mb-3">
            We reserve the right to suspend or terminate your account if you:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Violate these Terms or our policies</li>
            <li>Engage in fraudulent or illegal activity</li>
            <li>Fail to pay outstanding fees</li>
            <li>Abuse or harass other users</li>
          </ul>
          <p>
            You may request account deletion anytime. Your data will be
            permanently removed within 30 days.
          </p>
        </section>

        {/* 13. Changes to Terms */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            13. Changes to Terms
          </h2>
          <p>
            We may update these Terms at any time. We will notify you of
            significant changes via email or in-app notification. Continued use
            of the Platform constitutes acceptance of updated Terms.
          </p>
        </section>

        {/* 14. Contact Us */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
          <p className="mb-3">
            For questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <p className="mb-2">
              <span className="text-gray-400">Email:</span>{' '}
              <a
                href="mailto:support@theogs.app"
                className="text-blue-400 hover:text-blue-300"
              >
                support@theogs.app
              </a>
            </p>
            <p>
              <span className="text-gray-400">Website:</span>{' '}
              <a
                href="https://theogs.com"
                className="text-blue-400 hover:text-blue-300"
              >
                https://theogs.app
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-gray-200 mb-3">
          Ready to get started?
        </h3>
        <p className="text-gray-400 mb-6">
          By using TheOGs, you agree to these Terms and Conditions.
        </p>
        <Link
          href="/"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Go to TheOGs
        </Link>
      </div>
    </div>
  );
}
