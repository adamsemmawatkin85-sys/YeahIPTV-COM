import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { legalPages } from '@/lib/legalData';

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise< { slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = legalPages.find(p => p.slug === resolvedParams.slug);
  
  if (!page) {
    return {
      title: 'Legal Information | YeahIPTV',
      description: 'YeahIPTV legal information and policies',
      robots: { index: false, follow: false },
    };
  }
  
  return {
    title: `${page.title} | YeahIPTV`,
    description: page.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = legalPages.find(p => p.slug === resolvedParams.slug);
  
  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050B14] pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-yellow-500 text-sm font-bold uppercase tracking-widest mb-8 hover:opacity-80 transition-opacity group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          BACK TO HOME
        </Link>

        {/* Title Section */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <h1 className="font-display font-black italic uppercase text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white mb-4">
            {page.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M8 2v4M16 2v4M3 10h18"></path></svg>
              Last Updated: <span className="text-yellow-500">{page.lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* HTML Content */}
        <div 
          className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-headings:font-display prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-ul:text-gray-400 prose-li:text-gray-400 prose-li:mt-1 prose-strong:text-yellow-500 prose-a:text-yellow-500 prose-a:no-underline hover:prose-a:underline max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} YeahIPTV. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}