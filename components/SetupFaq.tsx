'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  { 
    q: "WHICH IPTV APP IS BEST FOR SMART TV & FIRESTICK?", 
    a: "YeahIPTV works perfectly with popular IPTV apps including IPTV Smarters Pro, TiviMate, XCIPTV, and IBO Player. These apps are compatible with Smart TVs, Firestick, Android TV, smartphones, and tablets, providing smooth 4K IPTV streaming with an easy setup process." 
  },

  { 
    q: "HOW FAST DO I RECEIVE MY IPTV LOGIN DETAILS?", 
    a: "After successful payment, YeahIPTV activation is usually instant. Your IPTV credentials, Xtream Codes API details, and setup instructions are automatically delivered to your email within minutes so you can start streaming live TV, sports, and movies immediately." 
  },

  { 
    q: "HOW DO I SET UP YEAHIPTV ON MY DEVICE?", 
    a: "Setting up YeahIPTV is simple. Install an IPTV player such as IPTV Smarters or TiviMate, then enter your Xtream Codes username, password, and server URL. The service works on Firestick, Smart TVs, Android devices, iPhone, MAG, Windows, and Mac." 
  },

  { 
    q: "CAN I USE YEAHIPTV ON MULTIPLE DEVICES?", 
    a: "Yes, YeahIPTV offers multi-device IPTV subscription plans. Depending on your selected package, you can stream simultaneously on Smart TVs, Firestick, phones, tablets, and other compatible devices using one subscription." 
  },

  { 
    q: "WHY IS XTREAM CODES API BETTER THAN M3U LINKS?", 
    a: "Xtream Codes API provides a faster and more stable IPTV setup experience compared to long M3U playlists. Users only need a username, password, and server URL to access live channels, movies, and sports with improved loading speed and easier configuration." 
  },

  { 
    q: "DOES YEAHIPTV SUPPORT 4K AND SPORTS CHANNELS?", 
    a: "YeahIPTV offers premium sports channels, live PPV events, international entertainment, and thousands of movies and series in HD, Full HD, and 4K quality. Stable anti-freeze servers help provide smooth IPTV streaming with minimal buffering." 
  },
];

export default function SetupFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-4xl mx-auto px-4">

      {faqs.map((faq, i) => (

        <ScrollReveal delay={0.1 * i} key={i}>

          <div
            className={`
              group border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer
              ${openFaq === i
                ? 'bg-white/[0.04] border-[var(--color-brand)] shadow-[0_0_30px_rgba(234,179,8,0.08)]'
                : 'bg-[#0A1128]/50 border-white/10 hover:border-[var(--color-brand)]/40'
              }
            `}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >

            {/* Question */}
            <div className="p-5 md:p-6 flex items-center justify-between gap-4">

              <h3 className={`
                font-display font-black italic uppercase tracking-wide text-sm md:text-white transition-colors duration-300
                ${openFaq === i ? 'text-[var(--color-brand)]' : 'text-white'}
              `}>
                {faq.q}
              </h3>

              <ChevronDown
                className={`
                  shrink-0 transition-all duration-300
                  ${openFaq === i
                    ? 'rotate-180 text-[var(--color-brand)]'
                    : 'text-white/70 group-hover:text-white'
                  }
                `}
                size={20}
              />

            </div>

            {/* Answer */}
            <div
              className={`
                overflow-hidden transition-all duration-500
                ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >

              <div className="px-5 md:px-6 pb-6 text-gray-400 text-sm md:text-grey font-medium leading-relaxed">
                {faq.a}
              </div>

            </div>

          </div>

        </ScrollReveal>

      ))}

    </div>
  );
}