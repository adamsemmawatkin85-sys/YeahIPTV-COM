// app/pricing/layout.tsx
import type { Metadata } from 'next';

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: 'YeahIPTV Pricing — IPTV Subscription Plans & Deals',
  description:
    'Choose the best YeahIPTV subscription plan. Flexible 3, 6, and 12-month IPTV plans with multi-device support, instant activation, and premium streaming quality.',

  keywords: [
    'YeahIPTV pricing',
    'IPTV subscription plans',
    'best IPTV service',
    'IPTV deals',
    'cheap IPTV subscription',
    'monthly IPTV plan',
    'yearly IPTV subscription',
    'multi-device IPTV',
    'Firestick IPTV',
    '4K IPTV streaming',
    'buy IPTV online',
    'premium IPTV service'
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
    canonical: 'https://iptvyeah.com/pricing',
  },

  openGraph: {
    title: 'YeahIPTV Pricing — IPTV Subscription Plans',
    description:
      'Flexible IPTV subscription plans: 3, 6, and 12 months. Multi-device support and instant activation.',
    url: 'https://iptvyeah.com/pricing',
    siteName: 'YeahIPTV',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://iptvyeah.com/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'YeahIPTV Pricing Plans',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'YeahIPTV Pricing — IPTV Subscription Plans',
    description:
      'Choose your IPTV plan: 3, 6, or 12 months. Instant activation and multi-device support.',
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

  category: 'technology',
};

/* =========================
   JSON-LD: PRODUCT SCHEMA
========================= */
const ProductSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'YeahIPTV Subscription',
        description:
          'Premium IPTV subscription service with live TV channels and on-demand content in HD and 4K quality.',
        brand: {
          '@type': 'Brand',
          name: 'YeahIPTV',
        },
        url: 'https://iptvyeah.com/pricing',
        image: 'https://iptvyeah.com/img/logo.webp',

        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '15000',
        },

        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '30',
          highPrice: '139',
          offerCount: '9',
        },
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
            name: 'Pricing',
            item: 'https://iptvyeah.com/pricing',
          },
        ],
      }),
    }}
  />
);

/* =========================
   JSON-LD: OFFER CATALOG
========================= */
const OfferCatalogSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'YeahIPTV Subscription Plans',
        url: 'https://iptvyeah.com/pricing',
        itemListElement: [
          { '@type': 'Offer', name: '3 Month Plan' },
          { '@type': 'Offer', name: '6 Month Plan' },
          { '@type': 'Offer', name: '12 Month Plan' },
        ],
      }),
    }}
  />
);

/* =========================
   MAIN LAYOUT - NO HTML/BODY TAGS!
========================= */
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OfferCatalogSchema />
      <BreadcrumbSchema />
      <ProductSchema />
      {children}
    </>
  );
}