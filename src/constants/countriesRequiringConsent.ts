const usStatesRequiringConsent = [
  'CA',
  'VA',
  'CO',
  'CT',
  'UT',
  'MT',
  'OR',
  'TX',
  'FL',
  'IN',
  'IA',
  'TN',
  'DE',
  'NJ',
  'NH',
  'NE',
  'MD',
  'MN',
  'KY',
  'RI',
];

const countriesRequiringConsent = [
  // EU Countries (GDPR)
  'AT',
  'BE',
  'BG',
  'HR',
  'CY',
  'CZ',
  'DK',
  'EE',
  'FI',
  'FR',
  'DE',
  'GR',
  'HU',
  'IE',
  'IT',
  'LV',
  'LT',
  'LU',
  'MT',
  'NL',
  'PL',
  'PT',
  'RO',
  'SK',
  'SI',
  'ES',
  'SE',
  // Other countries with strict privacy laws
  'GB', // United Kingdom
  'BR', // Brazil (LGPD)
  'ZA', // South Africa (POPIA)
  'CA', // Canada (PIPEDA)
  'AU', // Australia (Privacy Act)
  'NZ', // New Zealand
  'CH', // Switzerland
  'NO', // Norway
  'IS', // Iceland
  'LI', // Liechtenstein
];

export const checkIfConsentRequired = async () => {
  // Check if user has already made a choice
  const consent = localStorage.getItem('cookieConsent');
  if (consent) {
    return false;
  }

  try {
    // Use ipapi.co for geolocation (free, no API key needed)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    const countryCode = data.country_code;
    const regionCode = data.region_code; // US state code

    // Check if country requires consent
    if (countriesRequiringConsent.includes(countryCode)) {
      return true;
    }

    // Check if US state requires consent
    if (countryCode === 'US' && usStatesRequiringConsent.includes(regionCode)) {
      return true;
    }

    return false;
  } catch (error) {
    console.error('Geolocation check failed:', error);
    // Default to showing banner if geolocation fails (safer approach)
    return true;
  }
};
