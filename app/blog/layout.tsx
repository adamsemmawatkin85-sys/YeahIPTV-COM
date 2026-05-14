// app/blog/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YeahIPTV Blog — IPTV Guides, Tutorials & Streaming News',
  description:
    'Official YeahIPTV Blog. Discover IPTV setup guides for Firestick, Android, Smart TV, iOS, and PC. Stay updated with IPTV news, streaming tips, and 4K/8K viewing experiences.',
  keywords: [
    'YeahIPTV blog',
    'IPTV guides',
    'IPTV setup tutorial',
    'Firestick IPTV setup',
    'Smart TV IPTV',
    'Android IPTV app',
    'iOS IPTV guide',
    'IPTV streaming tips',
    '4K IPTV streaming',
    'best IPTV service'
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
    canonical: 'https://iptvyeah.com/blog',
  },

  openGraph: {
    title: 'YeahIPTV Blog — IPTV Guides, Tutorials & Streaming Tips',
    description:
      'Official YeahIPTV Blog. Learn IPTV setup on all devices and stay updated with the latest streaming news and tips.',
    url: 'https://iptvyeah.com/blog',
    siteName: 'YeahIPTV Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://iptvyeah.com/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'YeahIPTV Blog - IPTV Guides & Streaming Tutorials',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'YeahIPTV Blog — IPTV Guides & Streaming Tips',
    description:
      'Learn IPTV setup on Firestick, Android, Smart TV, iOS, and PC. Latest IPTV news and streaming guides.',
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
   JSON-LD: Blog Schema
========================= */
const BlogSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://iptvyeah.com/blog#blog',
        name: 'YeahIPTV Blog',
        description:
          'Official YeahIPTV Blog featuring IPTV setup guides, tutorials, and streaming news.',
        url: 'https://iptvyeah.com/blog',
        inLanguage: 'en-US',
        isFamilyFriendly: true,
        publisher: {
          '@type': 'Organization',
          name: 'YeahIPTV',
          url: 'https://iptvyeah.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://iptvyeah.com/img/logo.webp',
          },
        },
      }),
    }}
  />
);

/* =========================
   JSON-LD: Breadcrumb
========================= */
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': 'https://iptvyeah.com/blog#breadcrumb',
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
            name: 'YeahIPTV Blog',
            item: 'https://iptvyeah.com/blog',
          },
        ],
      }),
    }}
  />
);

/* =========================
   JSON-LD: Item List
========================= */
const ItemListSchema = () => (
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'YeahIPTV Blog Articles',
        description:
          'Collection of IPTV guides, tutorials, and streaming news from YeahIPTV Blog.',
        url: 'https://iptvyeah.com/blog',
        numberOfItems: '{{ARTICLE_COUNT}}',
        itemListElement: [],
      }),
    }}
  />
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogSchema />
      <BreadcrumbSchema />
      <ItemListSchema />

      <div className="blog-layout">{children}</div>
    </>
  );
}