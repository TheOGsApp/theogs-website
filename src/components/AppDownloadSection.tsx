import Image from 'next/image';

const appLinks = [
  {
    href: 'https://apps.apple.com/us/app/job-match-app/id1234567890', // Replace with your App Store link
    imgSrc: '/appstore.webp', // Add app store badge in the public folder
    alt: 'Download on the App Store',
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.jobmatch.app', // Replace with your Google Play link
    imgSrc: '/playstore.png', // Add Google Play badge in the public folder
    alt: 'Get it on Google Play',
  },
];

export function AppDownloadSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <div className="flex items-center gap-8 py-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Get the app!
            </h2>
            {appLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={link.imgSrc}
                  alt={link.alt}
                  height="70"
                  width="120"
                  className="scale-110 hover:scale-120 transition-transform"
                />
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 mb-1">
            Tech experts, listen up. If you want real opportunities, better
            roles, or a place where your experience actually matters, OGs is for
            you.This is the home for senior talent only.
          </p>
          <p className="text-xs text-gray-500 mb-4">
            OGs brings you curated jobs from trusted companies with no noise and
            no spam. Just real roles for proven professionals.
          </p>
          <p className="text-xs text-gray-500">
            If you are an OG in your craft, join and help change how hiring
            works for real talent. Download the app today and take the next step
            in your tech career.
          </p>
        </div>
      </div>
    </section>
  );
}
