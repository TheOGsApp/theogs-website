import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto text-white p-8 border border-gray-800 shadow-xl">
      <h1 className="text-3xl font-playfair font-bold mb-6">
        TheOGs Cookie Policy
      </h1>
      <p className="text-gray-400 mb-6">Effective Date: 01.01.2026</p>

      {/* What Are Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          What Are Cookies?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          TheOGs uses cookies and similar technologies (e.g., pixels) to collect
          data for app functionality and analytics, compliant with global
          privacy laws such as GDPR (EU), CCPA (US), IT Act (India), PDPA
          (Singapore), and Privacy Act (Australia).
        </p>
      </section>

      {/* Types of Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Types of Cookies
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <strong>Essential Cookies:</strong> Required for app operation
            (e.g., user authentication).
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand app usage to
            enhance performance.
          </li>
        </ul>
      </section>

      {/* Managing Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Managing Cookies
        </h2>
        <p className="text-gray-300 leading-relaxed">
          You can manage cookie preferences via our{' '}
          <Link
            href="/legal/consent"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            Consent Settings
          </Link>{' '}
          page, the TheOGs app, or your browser settings. Note that disabling
          essential cookies may affect app functionality. We respect user
          choices in compliance with global regulations.
        </p>
      </section>

      {/* Contact */}
      <p className="text-gray-300">
        For questions, contact us at{' '}
        <Link
          href="mailto:support@theogs.app"
          className="underline underline-offset-2 hover:text-gray-100 transition-colors"
        >
          support@theogs.app
        </Link>
        .
      </p>
    </div>
  );
}
