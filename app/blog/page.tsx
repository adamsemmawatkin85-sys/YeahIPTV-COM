'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogArticles } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Calendar,
  Tag,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Clock,
} from 'lucide-react';

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleArticles = blogArticles.slice(0, visibleCount);
  const hasMoreArticles = blogArticles.length > visibleCount;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 2, blogArticles.length)
    );
  };

  return (
    <main className="min-h-screen bg-[#050B14] pt-32 pb-24 px-4 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,179,8,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(234,179,8,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6 animate-pulse">
            <Sparkles size={12} className="text-[var(--color-brand)]" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand)]">
              LATEST UPDATES
            </span>
          </div>

          <h1 className="font-display font-black italic uppercase text-5xl md:text-7xl tracking-tighter text-white mb-6">
            YeahIPTV{' '}
            <span className="text-[var(--color-brand)] relative inline-block">
              Blog
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[var(--color-brand)] rounded-full" />
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Everything you need to know about optimizing your premium streaming experience.
          </p>

        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-14">

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-[var(--color-brand)]/50 transition-all hover:scale-105">
              <span className="text-xs font-bold text-white">
                {blogArticles.length}+
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Articles
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-[var(--color-brand)]/50 transition-all hover:scale-105">
              <Calendar size={12} className="text-[var(--color-brand)]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Weekly Updates
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-[var(--color-brand)]/50 transition-all hover:scale-105">
              <Clock size={12} className="text-[var(--color-brand)]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                5 Min Read
              </span>
            </div>

          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ perspective: '1200px' }}>
          {visibleArticles.map((article, index) => (
            <ScrollReveal delay={0.2 + index * 0.15} key={article.id}>
              <Link
                href={`/blog/${article.slug}`}
                className="group block h-full"
              >
                <div className="relative rounded-[28px] overflow-hidden h-[430px] transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-[0.5deg] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-[var(--color-brand)]/20 cursor-pointer border border-white/10 hover:border-[var(--color-brand)]/60 bg-[#0A1128]/20 backdrop-blur-xl">

                  {/* Full Hover Border */}
                  <div className="absolute inset-0 rounded-[28px] pointer-events-none z-30">
                    <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-[var(--color-brand)]/70 transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.15)]" />
                  </div>

                  {/* Background Image */}
                  <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                    <Image
                      src={article.coverImage || `/img/blog/${article.id}.jpg`}
                      alt={article.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.18),transparent_55%)]" />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-1 h-1 rounded-full bg-[var(--color-brand)]/60 animate-pulse" />
                    <div className="absolute top-20 right-16 w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" />
                    <div className="absolute bottom-24 left-16 w-1 h-1 rounded-full bg-[var(--color-brand)]/40 animate-pulse delay-300" />
                  </div>

                  {/* Reflection */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000" />
                  </div>

                  {/* Top Left Tag */}
                  <div className="absolute top-5 left-5 z-20">
                    <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                        <Tag size={10} />
                        {article.tag}
                      </span>
                    </div>
                  </div>

                  {/* Top Right Date */}
                  <div className="absolute top-5 right-5 z-20">
                    <div className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                      <span className="inline-flex items-center gap-1 text-[10px] text-gray-300 font-medium">
                        <Calendar size={10} />
                        {article.date}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[var(--color-brand)]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8">

                    {/* Progress Line */}
                    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-5">
                      <div className="h-full w-0 group-hover:w-full bg-[var(--color-brand)] transition-all duration-1000 rounded-full" />
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-black italic uppercase text-2xl md:text-3xl leading-tight text-white mb-4 line-clamp-3 group-hover:text-[var(--color-brand)] transition-colors duration-500">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-6">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-[var(--color-brand)] text-xs font-bold uppercase tracking-wider">
                        <span>Read Article</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
                        {article.readTime || '5 Min Read'}
                      </div>
                    </div>

                  </div>

                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More */}
        {hasMoreArticles && (
          <ScrollReveal delay={0.5}>
            <div className="mt-14 text-center">
              <button
                onClick={loadMore}
                className="group relative px-10 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 bg-transparent text-white border border-white/20 hover:bg-[var(--color-brand)] hover:text-black hover:border-transparent hover:scale-105 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  See More Articles
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)] to-[#ca8a04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>
    </main>
  );
}