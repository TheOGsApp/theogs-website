'use client';

import { useState } from 'react';

export default function ConsentPage() {
  const [essentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const consent = {
      essential: essentialCookies,
      analytics: analyticsCookies,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="animate-fade-in max-w-3xl mx-auto text-white p-8 border border-gray-800 shadow-xl">
      <h1 className="text-3xl font-playfair font-bold mb-6">Cookie Consent</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        TheOGs uses cookies to enhance your experience and provide analytics to
        improve our services. Manage your preferences below.
      </p>

      <div className="space-y-6">
        {/* Essential */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={essentialCookies}
              disabled
              className="h-5 w-5 accent-white cursor-not-allowed"
            />
            <span className="text-gray-300">
              Essential Cookies (Required for app functionality)
            </span>
          </label>
        </div>

        {/* Analytics */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={analyticsCookies}
              onChange={(e) => setAnalyticsCookies(e.target.checked)}
              className="h-5 w-5 accent-white"
            />
            <span className="text-gray-300">
              Analytics Cookies (Help us improve the app)
            </span>
          </label>
        </div>

        {/* Save Button */}
        <div>
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors w-full md:w-auto"
          >
            Save Preferences
          </button>

          {saved && (
            <p className="text-green-400 text-sm mt-4">
              ✅ Preferences saved successfully.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
