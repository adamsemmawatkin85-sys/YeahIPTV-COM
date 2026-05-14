// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogArticles } from '@/lib/data';
import { 
  Calendar, Clock, User, Tag, ArrowLeft, Share2, ChevronRight, 
  Sparkles, ShoppingCart, BookOpen, Eye, Twitter, Facebook, 
  Zap, ShieldCheck, Headphones, Mail, Send 
} from 'lucide-react';

// Generate static params for all articles
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Complete metadata for each article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const articleUrl = `https://iptvyeah.com/blog/${article.slug}`;

  return {
    metadataBase: new URL('https://iptvyeah.com'),
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords.join(', '),
    authors: [{ name: article.author, url: 'https://iptvyeah.com/about' }],
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
      canonical: articleUrl,
      languages: {
        'en-US': articleUrl,
      },
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: articleUrl,
      siteName: 'YeahIPTV',
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updatedDate || article.date,
      authors: [article.author],
      tags: [article.tag],
      locale: 'en_US',
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo.title,
      description: article.seo.description,
      images: [article.coverImage],
      creator: '@yeahiptv',
      site: '@yeahiptv',
    },
    verification: {
      google: 'your-google-verification-code',
    },
    category: article.tag,
    section: article.tag,
  };
}

// Generate Article Structured Data (JSON-LD)
function generateArticleStructuredData(article: any) {
  const articleUrl = `https://iptvyeah.com/blog/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    url: articleUrl,
    headline: article.title,
    description: article.excerpt,
    abstract: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: article.coverImage,
      width: 1200,
      height: 630,
    },
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://iptvyeah.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'YeahIPTV',
      url: 'https://iptvyeah.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iptvyeah.com/img/logo.webp',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://t.me/yeahiptv',
        'https://twitter.com/yeahiptv',
      ],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: article.seo.keywords.join(', '),
    articleSection: article.tag,
    articleBody: article.content?.replace(/<[^>]*>/g, '').substring(0, 5000),
    wordCount: article.content?.split(' ').length || 500,
    timeRequired: article.readTime,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Organization',
      name: 'YeahIPTV',
    },
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/CommentAction',
      userInteractionCount: 0,
    },
  };
}

// Generate Breadcrumb Structured Data
function generateBreadcrumbStructuredData(article: any) {
  const articleUrl = `https://iptvyeah.com/blog/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${articleUrl}#breadcrumb`,
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
        name: 'Blog',
        item: 'https://iptvyeah.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };
}

// Generate WebPage Structured Data
function generateWebPageStructuredData(article: any) {
  const articleUrl = `https://iptvyeah.com/blog/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${articleUrl}#webpage`,
    url: articleUrl,
    name: article.title,
    description: article.excerpt,
    isPartOf: {
      '@type': 'WebSite',
      name: 'YeahIPTV',
      url: 'https://iptvyeah.com',
    },
    about: {
      '@type': 'Thing',
      name: 'IPTV Streaming',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: article.coverImage,
    },
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    breadcrumb: {
      '@id': `${articleUrl}#breadcrumb`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== slug)
    .slice(-2)
    .reverse();

  const readingTime = Math.ceil(article.content.split(' ').length / 200);
  const articleUrl = `https://iptvyeah.com/blog/${article.slug}`;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleStructuredData(article)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbStructuredData(article)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageStructuredData(article)),
        }}
      />

      <main className="min-h-screen bg-[#050B14] relative">
        
        {/* HERO SECTION - RESPONSIVE */}
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-end pb-12 sm:pb-16 pt-24 sm:pt-28 md:pt-32 overflow-hidden">
          
          {/* Background Cover Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay - Responsive */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-[#050B14]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
            
            {/* Back Button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-colors mb-4 sm:mb-6 group bg-black/30 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit text-xs sm:text-sm"
            >
              <ArrowLeft size={14} className="sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/40 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-5">
              <Tag size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-yellow-500">{article.tag}</span>
            </div>
            
            {/* Title - Responsive Font Sizes */}
            <h1 className="font-display font-black italic uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-5 leading-[1.2] sm:leading-[1.1] tracking-tighter max-w-4xl drop-shadow-2xl">
              {article.title}
            </h1>
            
            {/* Meta Info - Responsive Wrap */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <Calendar size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
                <span className="text-[10px] sm:text-xs">{article.date}</span>
                {article.updatedDate && (
                  <span className="text-white/50 text-[8px] sm:text-[10px] ml-0.5 sm:ml-1">(Updated)</span>
                )}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <Clock size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
                <span className="text-[10px] sm:text-xs">{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <User size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
                <span className="text-[10px] sm:text-xs">{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <BookOpen size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
                <span className="text-[10px] sm:text-xs">{readingTime} min read</span>
              </div>
            </div>

            {/* Canonical URL link tag */}
            <link rel="canonical" href={articleUrl} />
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 relative z-10">

          {/* Article Content */}
          <div 
            className="article-content-modern"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <User size={18} className="sm:w-5 sm:h-5 text-yellow-500" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-black italic uppercase text-xs sm:text-sm text-white">Written by {article.author}</h4>
              <p className="text-gray-400 text-[10px] sm:text-xs mt-1">YeahIPTV Expert Team - Delivering premium IPTV content and guides since 2020</p>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4 py-4 sm:py-6 border-t border-b border-white/10">
            <div className="flex items-center gap-2 sm:gap-3">
              <Share2 size={14} className="sm:w-4 sm:h-4 text-gray-500" />
              <span className="text-xs sm:text-sm text-gray-400 font-medium">Share:</span>
              <div className="flex gap-1.5 sm:gap-2">
                <button className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs bg-white/5 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all flex items-center gap-1">
                  <Twitter size={10} className="sm:w-3 sm:h-3" /> Twitter
                </button>
                <button className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs bg-white/5 rounded-full hover:bg-[#1877F2] hover:text-white transition-all flex items-center gap-1">
                  <Facebook size={10} className="sm:w-3 sm:h-3" /> Facebook
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs text-gray-500">Was this helpful?</span>
              <button className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold bg-white/5 rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
                Yes
              </button>
              <button className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                No
              </button>
            </div>
          </div>

          {/* SUBSCRIPTION CTA CARD */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-500/30 rounded-2xl text-center relative overflow-hidden group">
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-45 scale-150 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4">
                <Sparkles size={12} className="sm:w-3.5 sm:h-3.5 text-yellow-500" />
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-yellow-500">LIMITED TIME OFFER</span>
              </div>
              
              <h3 className="font-display font-black italic uppercase text-xl sm:text-2xl md:text-3xl text-white mb-3">
                Ready to Experience <span className="text-yellow-500">Premium IPTV</span>?
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto mb-4 sm:mb-6">
                Get access to <span className="text-yellow-500 font-bold">20,000+ live channels</span> and{' '}
                <span className="text-yellow-500 font-bold">65,000+ VODs</span> in stunning 4K/8K quality.
                Starting from just <span className="text-yellow-500 font-bold">€30 for 3 months</span>.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                  <Zap size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase text-gray-300">Instant Activation</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                  <ShieldCheck size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase text-gray-300">7-Day Refund</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                  <Headphones size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase text-gray-300">24/7 Support</span>
                </div>
              </div>
              
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-yellow-500 text-black rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-yellow-400 transition-all hover:scale-105 group/btn"
              >
                <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                View Pricing Plans
                <ChevronRight size={12} className="sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RELATED ARTICLES */}
          {relatedArticles.length > 0 && (
            <div className="mt-10 sm:mt-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <div className="w-8 sm:w-10 h-0.5 bg-yellow-500 rounded-full" />
                <h3 className="font-display font-black italic uppercase text-xl sm:text-2xl text-white tracking-tight">
                  You May Also <span className="text-yellow-500">Like</span>
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-500/50 to-transparent rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/blog/${related.slug}`} className="group">
                    <div className="bg-[#0A1128]/40 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all hover:-translate-y-2">
                      <div className="relative h-40 sm:h-52 w-full overflow-hidden">
                        <img 
                          src={related.coverImage} 
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60" />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="text-[7px] sm:text-[8px] font-bold uppercase bg-yellow-500/90 text-black px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full">
                            {related.tag}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-gray-500 mb-2">
                          <span>{related.date}</span>
                          <span>•</span>
                          <span>{related.readTime}</span>
                        </div>
                        <h4 className="font-display font-black italic uppercase text-white group-hover:text-yellow-500 transition-colors mb-2 line-clamp-2 text-sm sm:text-white">
                          {related.title}
                        </h4>
                        <p className="text-gray-400 text-[11px] sm:text-xs line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-yellow-500 text-[9px] sm:text-[10px] font-bold uppercase group-hover:gap-2 transition-all">
                          Read More <ChevronRight size={8} className="sm:w-2.5 sm:h-2.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}