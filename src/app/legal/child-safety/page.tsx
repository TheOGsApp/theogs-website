import React from 'react';
import Link from 'next/link';

export default function ChildSafetyPage() {
  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto text-white p-8 border border-gray-800 shadow-xl">
      <h1 className="text-3xl font-playfair font-bold mb-6">
        Child Safety Standards
      </h1>
      <p className="text-gray-400 mb-6">
        Last Updated:{' '}
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      {/* Overview */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          At TheOGs, we are committed to providing a safe and secure environment
          for all users. This Child Safety Standards page outlines our policies
          and practices regarding the protection of minors (individuals under 18
          years of age) who may interact with our job swipe match platform.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          By using our services, you agree to this Child Safety Standards policy
          along with our{' '}
          <Link
            href="/legal/user-agreement"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            User Agreement
          </Link>
          ,{' '}
          <Link
            href="/legal/privacy-policy"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            Privacy Policy
          </Link>
          ,{' '}
          <Link
            href="/legal/cookie-policy"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            Cookie Policy
          </Link>
          , and{' '}
          <Link
            href="/legal/copyright-policy"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            Copyright Policy
          </Link>
          .
        </p>
        <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded">
          <p className="text-yellow-200 leading-relaxed">
            <strong>Important Notice:</strong> Our platform is designed
            exclusively for users who are 18 years of age or older. We do not
            knowingly collect, use, or share personal information from
            individuals under the age of 18.
          </p>
        </div>
      </section>

      {/* Age Restrictions */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Age Restrictions
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our service is intended solely for adults seeking employment or hiring
          opportunities through our swipe-based matching system. Users must meet
          the following requirements:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            Be at least 18 years of age (or the age of majority in their
            jurisdiction, whichever is higher)
          </li>
          <li>Have the legal capacity to enter into employment contracts</li>
          <li>
            Comply with all applicable labor laws and regulations in their
            region
          </li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          We employ age verification mechanisms during account registration to
          ensure compliance with these requirements.
        </p>
      </section>

      {/* Data Collection from Minors */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Data Collection from Minors
        </h2>
        <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-200">
          No Intentional Collection
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          We do not knowingly collect personal information from children under
          18 years of age. Our platform does not include features, content, or
          services directed at minors. For more information about how we handle
          data, please review our{' '}
          <Link
            href="/legal/privacy-policy"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-200">
          If We Discover Minor&apos;s Information
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          If we become aware that we have inadvertently collected personal
          information from a minor without proper parental consent, we will:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            Immediately delete the account and all associated personal
            information
          </li>
          <li>Terminate access to our services</li>
          <li>Take reasonable steps to prevent future unauthorized access</li>
          <li>Notify the appropriate parties as required by law</li>
        </ul>
      </section>

      {/* Content Standards */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Content Standards
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          While our swipe-based platform is designed for adults, we maintain
          high content standards to ensure a professional environment. Please
          also review our{' '}
          <Link
            href="/legal/copyright-policy"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            Copyright Policy
          </Link>{' '}
          for content guidelines:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <strong>No inappropriate content:</strong> We prohibit content that
            is sexually explicit, violent, or otherwise harmful
          </li>
          <li>
            <strong>Professional communication:</strong> All job postings,
            profiles, and match communications must maintain professional
            standards
          </li>
          <li>
            <strong>Prohibited solicitations:</strong> We do not allow job
            postings that would be illegal for minors or that attempt to recruit
            minors
          </li>
          <li>
            <strong>Swipe safety:</strong> Our matching algorithm and content
            filters are designed to maintain a professional job-seeking
            environment
          </li>
          <li>
            <strong>Moderation:</strong> Our team actively monitors and removes
            content that violates our community guidelines
          </li>
        </ul>
      </section>

      {/* Safety Features */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Safety Features
        </h2>

        <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-200">
          Account Verification
        </h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>Age verification during registration process</li>
          <li>Identity verification for employers and job seekers</li>
          <li>Secure authentication systems</li>
        </ul>

        <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-200">
          Reporting Mechanisms
        </h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>In-app reporting tools for suspicious activity</li>
          <li>Dedicated safety team to review reports</li>
          <li>Quick response protocols for serious violations</li>
        </ul>

        <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-200">
          Privacy Controls
        </h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Encrypted data transmission</li>
          <li>Secure data storage practices</li>
          <li>Limited data sharing with third parties</li>
          <li>User control over profile visibility</li>
          <li>
            Cookie and tracking management through our{' '}
            <Link
              href="/legal/consent"
              className="underline underline-offset-2 hover:text-gray-100 transition-colors"
            >
              Consent Settings
            </Link>
          </li>
        </ul>
      </section>

      {/* Parental Rights */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Parental Rights
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Parents or legal guardians who believe their child has provided
          personal information to our platform without consent may contact us
          immediately. We will:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Verify the parental relationship</li>
          <li>
            Provide information about what data (if any) has been collected
          </li>
          <li>Promptly delete all personal information related to the minor</li>
          <li>Terminate the account permanently</li>
        </ul>
      </section>

      {/* Compliance with Laws */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Compliance with Laws
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We comply with applicable child protection and privacy laws, including
          but not limited to:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            Children&apos;s Online Privacy Protection Act (COPPA) in the United
            States
          </li>
          <li>
            General Data Protection Regulation (GDPR) provisions regarding
            children&apos;s data
          </li>
          <li>Age Appropriate Design Code in the United Kingdom</li>
          <li>Information Technology Act provisions in India</li>
          <li>Personal Data Protection Act (PDPA) in Singapore</li>
          <li>Privacy Act in Australia</li>
          <li>
            Other applicable international and local child safety regulations
          </li>
        </ul>
      </section>

      {/* Third-Party Services */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Third-Party Services
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We carefully vet all third-party services integrated into our platform
          to ensure they also maintain appropriate child safety standards. We do
          not knowingly work with services that target or collect information
          from minors.
        </p>
      </section>

      {/* Education and Awareness */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Education and Awareness
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We are committed to:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Educating our user community about online safety</li>
          <li>Training our staff on child safety protocols</li>
          <li>Regularly reviewing and updating our safety measures</li>
          <li>Cooperating with law enforcement when necessary</li>
        </ul>
      </section>

      {/* Contact Us */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          If you have questions or concerns about our child safety practices, or
          if you believe a minor has accessed our service, please contact us
          immediately:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <strong>Email:</strong>{' '}
            <Link
              href="mailto:support@theogs.app"
              className="underline underline-offset-2 hover:text-gray-100 transition-colors"
            >
              support@theogs.app
            </Link>
          </li>
          <li>
            <strong>Legal Contact:</strong>{' '}
            <Link
              href="mailto:support@theogs.app"
              className="underline underline-offset-2 hover:text-gray-100 transition-colors"
            >
              support@theogs.app
            </Link>
          </li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          We take all reports seriously and will respond within 24-48 hours.
        </p>
      </section>

      {/* Updates to This Policy */}
      <section>
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Updates to This Policy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We may update this Child Safety Standards page periodically to reflect
          changes in our practices or legal requirements. We will notify users
          of any material changes through our app or website. Continued use of
          our service after such changes constitutes acceptance of the updated
          standards.
        </p>
      </section>
    </div>
  );
}
