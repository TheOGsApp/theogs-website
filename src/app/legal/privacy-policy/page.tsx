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
        <p className="text-gray-300 leading-relaxed">
          TheOGs collects personal data to provide our job swipe match services
          globally, including:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
          <li>Profile information (e.g., name, email, phone number).</li>
          <li>Job preferences and swipe interactions (likes/rejects).</li>
          <li>
            Device data (e.g., IP address, browser type) and usage data via
            cookies.
          </li>
        </ul>
      </section>

      {/* How We Use Data */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          How We Use Data
        </h2>
        <p className="text-gray-300 leading-relaxed">We use your data to:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
          <li>Match job seekers with employers based on swipe interactions.</li>
          <li>Improve our services and personalize job recommendations.</li>
          <li>
            Comply with global legal obligations, including GDPR (EU), CCPA
            (US), IT Act (India), PDPA (Singapore), and Privacy Act (Australia).
          </li>
        </ul>
      </section>

      {/* Data Retention */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Data Retention
        </h2>
        <p className="text-gray-300 leading-relaxed">
          To ensure fair matching, we retain certain data (e.g., email, phone
          number, swipe history) even if you deactivate your account via the
          TheOGs app’s settings. Deactivation limits visibility but retains data
          for matching integrity. Users in regions like the EU, US, India, UAE,
          Singapore, and Australia may request data deletion where permitted by
          applicable laws, though some data may be retained to comply with our
          legitimate interests.
        </p>
      </section>

      {/* Data Sharing */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Data Sharing
        </h2>
        <p className="text-gray-300 leading-relaxed">We share data with:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
          <li>Employers for job matching (with your consent).</li>
          <li>
            Service providers for analytics and app functionality, compliant
            with global privacy laws.
          </li>
          <li>Legal authorities when required by law in any jurisdiction.</li>
        </ul>
      </section>

      {/* Your Rights */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Your Rights
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Depending on your region, you have rights under laws like GDPR (EU),
          CCPA (US), IT Act (India), PDPA (Singapore), and Privacy Act
          (Australia), including access, rectification, and objection to data
          processing. To exercise these rights or deactivate your account, use
          the TheOGs app’s settings or contact us at{' '}
          <a
            href="mailto:privacy@theogs.app"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            privacy@theogs.app
          </a>
          .
        </p>
      </section>

      <p className="text-gray-300 leading-relaxed">
        For full details, contact us at{' '}
        <a
          href="mailto:privacy@theogs.app"
          className="underline underline-offset-2 hover:text-gray-100 transition-colors"
        >
          privacy@theogs.app
        </a>
        .
      </p>
    </div>
  );
}
