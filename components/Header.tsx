'use client';

import { useState } from 'react';
import { Tv, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'PRICING', href: '/pricing' },
  { name: 'SETUP', href: '/setup' },
  { name: 'BLOG', href: '/blog' },
  { name: 'CONTACT US', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050B14]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            {/* Logo replaced the text */}
            <div className="h-8 w-auto relative">
              <Image 
                src="/img/logo.webp" 
                alt="YEAHIPTV Logo" 
                width={120}
                height={32}
                className="h-full w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-semibold tracking-wide">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`relative transition-colors duration-300 ${
                    isActive(link.href) 
                      ? 'text-[var(--color-brand)]' 
                      : 'text-gray-300 hover:text-[var(--color-brand)]'
                  }`}
                >
                  {link.name}
                  {/* Active indicator underline */}
                  {isActive(link.href) && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-brand)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/pricing" 
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 uppercase tracking-wide inline-block
                ${isActive('/pricing') 
                  ? 'bg-[var(--color-brand)] text-black hover:bg-[#eab308] hover:scale-105' 
                  : 'bg-black text-[var(--color-brand)] border border-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-black hover:scale-105'
                }`}
            >
              SUBSCRIBE NOW
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
             {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050B14] pt-24 px-4 pb-8 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-4 text-lg font-bold">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMenuOpen(false)} 
                  className={`px-4 py-3 rounded-xl transition-all duration-300 text-center ${
                    isActive(link.href) 
                      ? 'bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/30' 
                      : 'text-gray-300 hover:text-[var(--color-brand)] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link 
                href="/pricing" 
                className={`px-4 py-3 rounded-full font-bold uppercase tracking-wide text-center transition-all duration-300 ${
                  isActive('/pricing') 
                    ? 'bg-[var(--color-brand)] text-black hover:bg-[#eab308]' 
                    : 'bg-black border border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-black'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                SUBSCRIBE NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}