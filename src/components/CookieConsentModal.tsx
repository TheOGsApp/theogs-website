'use client';

import React, { useState, useEffect } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

import { ToggleSwitch } from './ToggleSwitch';
import { checkIfConsentRequired } from '@/constants';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

export default function CookieConsentModal() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
  }, []);

  useEffect(() => {
    checkIfConsentRequired().then((required) => {
      if (required) {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
          setShowBanner(true);
        }
      }
    });
  }, []);

  const saveConsent = (consents: CookiePreferences) => {
    localStorage.setItem(
      'cookieConsent',
      JSON.stringify({
        ...consents,
        timestamp: new Date().toISOString(),
      }),
    );
    setShowBanner(false);
    setShowDetails(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Modal */}
      <div className="w-full fixed bottom-0 z-50">
        <div className="bg-gray-800 border border-gray-100 shadow-4xl animate-fade-in-scale">
          {!showDetails ? (
            // Main Banner
            <div className="p-6">
              <h2 className="text-xl font-playfair font-bold text-white mb-3">
                We value your privacy
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, match you
                with the best job opportunities, and analyze our traffic. By
                clicking &quot;Accept All&quot;, you consent to our use of
                cookies.
              </p>

              <div className="flex flex-col gap-2 mb-3">
                <button
                  onClick={acceptAll}
                  className="w-full bg-white text-black py-2.5 px-4 font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectAll}
                  className="w-full bg-transparent text-white border border-gray-400 py-2.5 px-4 font-medium hover:border-gray-500 transition-colors cursor-pointer"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="w-full text-gray-400 text-sm hover:text-gray-200 py-2.5 px-4 border border-gray-800 hover:border-gray-500 transition-colors cursor-pointer"
                >
                  Customize Preferences
                </button>
              </div>

              <div className="text-xs text-gray-500 border-t border-gray-800 pt-3">
                <p>
                  Read our{' '}
                  <Link
                    href="/legal/cookie-policy"
                    className="underline hover:text-gray-300"
                  >
                    Cookie Policy
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/legal/privacy-policy"
                    className="underline hover:text-gray-300"
                  >
                    Privacy Policy
                  </Link>{' '}
                  for more information.
                </p>
              </div>
            </div>
          ) : (
            // Detailed Preferences
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-white mb-4 text-sm flex items-center gap-2 cursor-pointer"
              >
                <DynamicIcon name="arrow-left" className="w-4 h-4" />
                Back
              </button>

              <h2 className="text-xl font-playfair font-bold text-white mb-4">
                Cookie Preferences
              </h2>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-800 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        Necessary Cookies
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Essential for the website to function. Cannot be
                        disabled.
                      </p>
                    </div>
                    <ToggleSwitch enabled={true} onToggle={() => {}} />
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Examples: Authentication, security, session management
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-800 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        Analytics Cookies
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Help us understand how visitors use our platform.
                      </p>
                    </div>
                    <ToggleSwitch
                      enabled={preferences.analytics}
                      onToggle={() => togglePreference('analytics')}
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Examples: Google Analytics, usage statistics
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-800 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        Marketing Cookies
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Used to deliver relevant ads and track campaign
                        performance.
                      </p>
                    </div>
                    <ToggleSwitch
                      enabled={preferences.marketing}
                      onToggle={() => togglePreference('marketing')}
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Examples: Facebook Pixel, Google Ads, retargeting
                  </p>
                </div>

                {/* Personalization Cookies */}
                <div className="border border-gray-800 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        Personalization Cookies
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Remember your preferences and improve your job matches.
                      </p>
                    </div>
                    <ToggleSwitch
                      enabled={preferences.personalization}
                      onToggle={() => togglePreference('personalization')}
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Examples: Language preferences, saved searches,
                    recommendations
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={savePreferences}
                  className="w-full bg-white text-black py-2.5 px-4 font-medium hover:bg-gray-100 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="w-full text-gray-400 text-sm hover:text-gray-200 transition-colors py-2"
                >
                  Accept All & Continue
                </button>
              </div>

              {/* CCPA Notice */}
              <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded text-xs">
                <p className="text-yellow-200">
                  <strong>California Residents:</strong> We do not sell your
                  personal information. You can opt out of data sharing for
                  targeted advertising by adjusting the preferences above.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
