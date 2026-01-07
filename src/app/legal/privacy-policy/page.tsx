import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto text-white p-8 border border-gray-800 shadow-xl">
      <h1 className="text-3xl font-playfair font-bold mb-6">
        TheOGs Privacy Policy
      </h1>
      <p className="text-gray-400 mb-6">Effective Date: 01.01.2026</p>

      {/* Data We Collect */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Data We Collect
        </h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          TheOGs collects personal data necessary to provide our job matching
          services. The type of data collected depends on whether you are an
          applicant or a recruiter.
        </p>

        <h3 className="text-lg font-semibold mb-2">Applicants</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>Email address and username</li>
          <li>Profile information you choose to provide</li>
          <li>Job preferences, swipe activity, and match information</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Recruiters</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Email address</li>
          <li>Job postings and related job details</li>
          <li>Match information with applicants</li>
          <li>Company information you choose to provide</li>
        </ul>
      </section>

      {/* How We Use Data */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          How We Use Data
        </h2>
        <p className="text-gray-300 leading-relaxed">We use your data to:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
          <li>Enable job matching between candidates and employers</li>
          <li>Operate and improve the functionality of the app</li>
          <li>Communicate important service-related information</li>
          <li>
            Comply with applicable legal obligations (including GDPR, CCPA, and
            other global privacy laws)
          </li>
        </ul>
      </section>

      {/* Account Deletion & Data Retention */}
      <section className="mb-8 pb-6 border-b border-gray-800" id="delete">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Account Deletion and Data Retention
        </h2>

        <p className="text-gray-300 leading-relaxed">
          When you choose to delete your account from the TheOGs app settings:
        </p>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
          <li>Your account is immediately deleted and becomes inaccessible</li>
          <li>
            Your profile and related content are removed from discovery and no
            longer visible to other users
          </li>
          <li>
            Certain limited data is retained for a short period, as outlined
            below
          </li>
        </ul>

        <p className="text-gray-300 leading-relaxed mt-4">
          <strong>Applicants:</strong> We retain limited data including your
          email address, username, and match information.
        </p>

        <p className="text-gray-300 leading-relaxed mt-2">
          <strong>Recruiters:</strong> We retain limited data including your
          email address, job postings, match information, and company
          information.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          All other personal data associated with your account is scheduled for
          deletion. Non-retained data is permanently deleted within{' '}
          <strong>90 days</strong> after account delete. After this 90-day
          period, retained data is also permanently deleted unless retention is
          required by law.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          If you reactivate your account within the 90-day period, retained data
          may be restored. After permanent deletion, recovery is no longer
          possible.
        </p>
      </section>

      {/* Data Sharing */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Data Sharing
        </h2>
        <p className="text-gray-300 leading-relaxed">We may share data with:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
          <li>Employers or applicants for job matching purposes</li>
          <li>Legal authorities when required to do so by law</li>
        </ul>
      </section>

      {/* Your Rights */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Your Rights
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Depending on your location, you may have the right to access, correct,
          delete, or restrict the processing of your personal data. You can
          delete your account at any time through the app settings or submit a
          request to{' '}
          <Link
            className="underline underline-offset-2 hover:text-blue-600 transition-colors"
            href="/contact"
          >
            contact
          </Link>{' '}
          our team by emailing{' '}
          <Link
            href="mailto:support@theogs.app"
            className="underline underline-offset-2 hover:text-blue-600 transition-colors"
          >
            support@theogs.app
          </Link>
          .
        </p>
      </section>

      <p className="text-gray-300 leading-relaxed">
        If you have questions about this Privacy Policy or our data practices,
        contact us at{' '}
        <Link
          href="mailto:support@theogs.app"
          className="underline underline-offset-2 hover:text-blue-600 transition-colors"
        >
          support@theogs.app
        </Link>
        .
      </p>
    </div>
  );
}
