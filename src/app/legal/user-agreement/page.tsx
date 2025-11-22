import Link from 'next/link';

export default function UserAgreementPage() {
  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto bg-black text-white p-8 border border-gray-800 shadow-xl">
      <h1 className="text-3xl font-playfair font-bold mb-6">
        TheOGs User Agreement
      </h1>
      <p className="text-gray-400 mb-6">
        Effective Date:{' '}
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      {/* Introduction */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Introduction
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Welcome to TheOGs, a job swipe match app connecting job seekers and
          employers worldwide. By using our services, you agree to this User
          Agreement, our{' '}
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
          . This agreement is legally binding and applies globally, including in
          the EU, US, India, UAE, Singapore, Australia, and more.
        </p>
      </section>

      {/* Your Obligations */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Your Obligations
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Provide accurate information and keep it updated.</li>
          <li>
            Use TheOGs for professional job-seeking or hiring purposes only.
          </li>
          <li>
            Comply with all applicable laws, including GDPR (EU), CCPA (US), IT
            Act (India), PDPA (Singapore), and Privacy Act (Australia).
          </li>
          <li>Do not share your account or post harassing/illegal content.</li>
        </ul>
      </section>

      {/* Termination */}
      <section className="mb-8 pb-6 border-b border-gray-800">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Termination
        </h2>
        <p className="text-gray-300 leading-relaxed">
          You may deactivate your account at any time through the TheOGs app’s
          settings. Deactivation limits visibility but retains certain data as
          outlined in our{' '}
          <Link
            href="/legal/privacy-policy"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            Privacy Policy
          </Link>
          . TheOGs may suspend or terminate your account for violations of this
          agreement.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-playfair font-semibold mb-4">Contact</h2>
        <p className="text-gray-300 leading-relaxed">
          For legal notices, contact us at{' '}
          <a
            href="mailto:legal@theogs.app"
            className="underline underline-offset-2 hover:text-gray-100 transition-colors"
          >
            legal@theogs.app
          </a>
          .
        </p>
      </section>
    </div>
  );
}
