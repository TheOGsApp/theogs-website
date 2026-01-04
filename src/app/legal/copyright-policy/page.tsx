import Link from 'next/link';

export default function CopyrightPolicyPage() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto text-white p-8 border border-gray-800 shadow-xl">
      <h1 className="text-3xl font-playfair font-bold mb-6">
        TheOGs Copyright Policy
      </h1>
      <p className="text-gray-400 mb-6">Effective Date: 01.01.2026</p>

      {/* Respecting IP */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Respecting Intellectual Property
        </h2>
        <p className="text-gray-300 leading-relaxed">
          TheOGs respects the intellectual property rights of others worldwide.
          Users must not post content that infringes copyrights, in compliance
          with applicable laws in regions like the EU, US, India, UAE,
          Singapore, and Australia.
        </p>
      </section>

      {/* Reporting Infringement */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Reporting Infringement
        </h2>
        <p className="text-gray-300 leading-relaxed">
          If you believe content on TheOGs infringes your copyright, submit a
          notice to{' '}
          <Link
            href="mailto:support@theogs.app"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            support@theogs.app
          </Link>{' '}
          including:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
          <li>Your contact information.</li>
          <li>Description of the copyrighted work.</li>
          <li>Location of the infringing content.</li>
          <li>
            A statement of good faith belief that the use is unauthorized.
          </li>
          <li>Your signature (electronic or physical).</li>
        </ul>
      </section>

      {/* Consequences */}
      <section>
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Consequences
        </h2>
        <p className="text-gray-300 leading-relaxed">
          TheOGs may remove infringing content and terminate accounts of repeat
          infringers, in accordance with global intellectual property laws.
        </p>
      </section>
    </div>
  );
}
