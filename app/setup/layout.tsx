// app/setup/layout.tsx
import type { Metadata } from 'next';

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: 'YeahIPTV Setup Guide — Install IPTV on Any Device | Firestick, Android, Smart TV, iOS, PC',
  description:
    'Complete step-by-step setup guide for YeahIPTV. Learn how to install IPTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac. Easy installation with screenshots and video tutorials.',

  keywords: [
    'iptv setup guide',
    'how to install iptv',
    'iptv on firestick',
    'iptv on android tv',
    'iptv on smart tv',
    'iptv on ios',
    'iptv on windows',
    'iptv on mac',
    'firestick iptv setup',
    'smart iptv setup',
    'iptv smarters pro',
    'tivimate setup',
    'YeahIPTV installation',
    'iptv tutorial'
  ].join(', '),

  authors: [{ name: 'YeahIPTV Team' }],
  creator: 'YeahIPTV',
  publisher: 'YeahIPTV',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: 'https://iptvyeah.com/setup',
  },

  openGraph: {
    title: 'YeahIPTV Setup Guide — Install IPTV on Any Device',
    description:
      'Step-by-step tutorial to install YeahIPTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac. Complete setup instructions with screenshots.',
    url: 'https://iptvyeah.com/setup',
    siteName: 'YeahIPTV',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://iptvyeah.com/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'YeahIPTV Setup Guide - Install IPTV on Any Device',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'YeahIPTV Setup Guide — Install IPTV on Any Device',
    description:
      'Complete step-by-step setup guide for Firestick, Android TV, Smart TV, iOS, Windows, and Mac.',
    images: ['https://iptvyeah.com/img/logo.webp'],
    creator: '@yeahiptv',
    site: '@yeahiptv',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-verification-code',
  },

  category: 'tutorial',
};

/* =========================
   JSON-LD: HOW TO SCHEMA
========================= */
const HowToSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Setup YeahIPTV on Any Device',
        description:
          'Complete step-by-step guide to install and configure YeahIPTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac devices.',
        url: 'https://iptvyeah.com/setup',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '0',
        },
        tool: [
          { '@type': 'HowToTool', name: 'Firestick / Fire TV' },
          { '@type': 'HowToTool', name: 'Android TV / Google TV' },
          { '@type': 'HowToTool', name: 'Smart TV (Samsung, LG, Sony)' },
          { '@type': 'HowToTool', name: 'iOS / iPhone / iPad' },
          { '@type': 'HowToTool', name: 'Windows PC' },
          { '@type': 'HowToTool', name: 'Mac Computer' },
        ],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Subscribe to YeahIPTV',
            position: 1,
            text: 'Choose your subscription plan (3, 6, or 12 months) and complete secure payment. Receive instant credentials via email.',
            url: 'https://iptvyeah.com/pricing',
          },
          {
            '@type': 'HowToStep',
            name: 'Check Your Email',
            position: 2,
            text: 'After payment confirmation, check your email for login credentials including Username, Password, and Server URL.',
          },
          {
            '@type': 'HowToStep',
            name: 'Choose Your Device',
            position: 3,
            text: 'Select your device: Firestick, Android TV, Smart TV, iOS, Windows, or Mac.',
          },
          {
            '@type': 'HowToStep',
            name: 'Install IPTV App',
            position: 4,
            text: 'Download and install recommended IPTV player for your device (IPTV Smarters Pro, TiviMate, or Smart IPTV).',
          },
          {
            '@type': 'HowToStep',
            name: 'Login and Start Streaming',
            position: 5,
            text: 'Enter your credentials and enjoy 20,000+ live channels and 65,000+ VODs in 4K/8K quality.',
          },
        ],
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Stable Internet Connection (25+ Mbps for 4K)',
          },
          {
            '@type': 'HowToSupply',
            name: 'YeahIPTV Login Credentials',
          },
        ],
      }),
    }}
  />
);

/* =========================
   JSON-LD: BREADCRUMB
========================= */
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://iptvyeah.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Setup Guide',
            item: 'https://iptvyeah.com/setup',
          },
        ],
      }),
    }}
  />
);

/* =========================
   JSON-LD: FAQ SCHEMA
========================= */
const FAQSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does it take to setup IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Complete setup takes approximately 5-10 minutes from start to finish, including installing the app and entering your credentials.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a VPN for IPTV streaming?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While not required, we recommend using a VPN for privacy and to prevent ISP throttling. A VPN can improve streaming performance.',
            },
          },
          {
            '@type': 'Question',
            name: 'What internet speed do I need for 4K streaming?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For 4K streaming, we recommend a minimum of 25 Mbps. For HD streaming, 10-15 Mbps is sufficient.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use the same subscription on multiple devices?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Based on your plan, you can use 1, 2, or 3 devices simultaneously. Each device uses the same login credentials.',
            },
          },
        ],
      }),
    }}
  />
);

/* =========================
   MAIN LAYOUT - NO HTML/BODY TAGS!
========================= */
export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HowToSchema />
      <BreadcrumbSchema />
      <FAQSchema />
      {children}
    </>
  );
}