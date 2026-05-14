import React from 'react';
import Link from 'next/link';

export default function AnimatedButton({ 
  text, 
  href = "/pricing", 
  className = "", 
  icon 
}: { 
  text: string, 
  href?: string, 
  className?: string, 
  icon?: React.ReactNode 
}) {
  return (
    <Link href={href} className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-sm md:text-base font-bold text-[var(--color-brand)] hover:text-black border-2 border-[var(--color-brand)] rounded-full group transition-colors uppercase tracking-widest bg-black ${className}`}>
      <span className="absolute left-0 block w-full h-0 transition-all bg-[var(--color-brand)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-2 ease">
        {icon ? <span className="text-black pr-2">{icon}</span> : <svg className="w-5 h-5 text-black pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
      </span>
      {/* group-hover:text-black explicitly sets black text on hover */}
      <span className="relative group-hover:-translate-x-3 text-[var(--color-brand)] group-hover:text-black transition-all duration-300 flex items-center gap-2">{text}</span>
    </Link>
  );
}
