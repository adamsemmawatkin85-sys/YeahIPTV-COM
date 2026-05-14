// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Hardcoded SEO Metadata - NO IMPORTS
export const metadata: Metadata = {
  metadataBase: new URL('https://iptvyeah.com'),
    icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256' },
      { url: '/img/favicons/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'android-chrome-48x48', url: '/img/favicons/android-chrome-48x48.png' },
      { rel: 'android-chrome-72x72', url: '/img/favicons/android-chrome-72x72.png' },
      { rel: 'android-chrome-96x96', url: '/img/favicons/android-chrome-96x96.png' },
      { rel: 'android-chrome-144x144', url: '/img/favicons/android-chrome-144x144.png' },
      { rel: 'android-chrome-192x192', url: '/img/favicons/android-chrome-192x192.png' },
      { rel: 'android-chrome-256x256', url: '/img/favicons/android-chrome-256x256.png' },
      { rel: 'android-chrome-384x384', url: '/img/favicons/android-chrome-384x384.png' },
      { rel: 'android-chrome-512x512', url: '/img/favicons/android-chrome-512x512.png' },
      { rel: 'mask-icon', url: '/img/favicons/safari-pinned-tab.svg', color: '#FFC107' },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  title: {
    default: 'YeahIPTV - Best Premium IPTV Subscription 2024 | 20,000+ Channels',
    template: '%s | YeahIPTV',
  },
  description: 'Experience YeahIPTV: Stream 20,000+ Live Channels & 65,000+ VODs in Crystal Clear 4K/8K quality. Fast activation, No Buffering, and 24/7 Pro Support.',
  keywords: 'YeahIPTV, IPTV subscription, premium IPTV, best IPTV service, 4K IPTV, live TV streaming, sports streaming, Firestick IPTV, IPTV provider',
  authors: [{ name: 'YeahIPTV Team' }],
  creator: 'YeahIPTV',
  publisher: 'YeahIPTV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  alternates: {
    canonical: 'https://iptvyeah.com/',
  },
  openGraph: {
    title: 'YeahIPTV - Best Premium IPTV Subscription 2024',
    description: 'Stream 20,000+ Live Channels & 65,000+ VODs in 4K/8K quality. Instant activation, anti-freeze technology, 24/7 support.',
    url: 'https://iptvyeah.com/',
    siteName: 'YeahIPTV',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://iptvyeah.com/img/logo-webp',
        width: 1200,
        height: 630,
        alt: 'YeahIPTV - Premium IPTV Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YeahIPTV - Best Premium IPTV Subscription 2024',
    description: '20,000+ channels, 65,000+ VODs, 4K/8K quality. Instant activation.',
    images: ['https://iptvyeah.com/img/og-image.jpg'],
    creator: '@yeahiptv',
    site: '@yeahiptv',
  },
  verification: {
    google: 'LxjjjIoDsM5AknwFsnG840fyX4jF4ae-isUkyxQ5sfA',
  },
  category: 'technology',
};

// JSON-LD Schema for Organization
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "YeahIPTV",
        "url": "https://iptvyeah.com",
        "logo": "https://iptvyeah.com/img/logo.webp",
        "image": "https://iptvyeah.com/img/logo.webp",
        "description": "Premium IPTV subscription service with 20,000+ live channels and 65,000+ VODs.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": "https://wa.me/+447549589503",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://t.me/yeahiptv",
          "https://twitter.com/yeahiptv"
        ]
      })
    }}
  />
);

// JSON-LD Schema for Website
const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "YeahIPTV",
        "url": "https://iptvyeah.com",
        "description": "Premium IPTV subscription service",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://iptvyeah.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }}
  />
);

// JSON-LD Schema for Product
const ProductSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "YeahIPTV Premium Subscription",
        "description": "Premium IPTV service with 20,000+ live channels and 65,000+ VODs.",
        "brand": { "@type": "Brand", "name": "YeahIPTV" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "15000"
        },
        "offers": [
          { 
            "@type": "Offer", 
            "name": "3 Month Plan", 
            "priceCurrency": "EUR", 
            "price": "30.00",
            "availability": "https://schema.org/OnlineOnly",
            "url": "https://iptvyeah.com/pricing"
          },
          { 
            "@type": "Offer", 
            "name": "6 Month Plan", 
            "priceCurrency": "EUR", 
            "price": "50.00",
            "availability": "https://schema.org/OnlineOnly",
            "url": "https://iptvyeah.com/pricing"
          },
          { 
            "@type": "Offer", 
            "name": "12 Month Plan", 
            "priceCurrency": "EUR", 
            "price": "72.00",
            "availability": "https://schema.org/OnlineOnly",
            "url": "https://iptvyeah.com/pricing"
          }
        ]
      })
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <ProductSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#050B14" />
      </head>
      <body 
        className={`${poppins.variable} ${montserrat.variable} font-sans antialiased min-h-screen bg-[#050B14] text-white bg-square-pattern`} 
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        {/*Google Analytics - CORRECT with next/script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B7BHW6LZJG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B7BHW6LZJG');
            `,
          }}
        />      </body>
    </html>
  );
}