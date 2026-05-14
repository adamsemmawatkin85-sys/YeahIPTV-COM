'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Star, PlayCircle,
  Tv, Monitor, Smartphone,
  Box, Lock, Mail, Users, ShieldCheck,
  CheckCircle2, Phone, Zap, MessageCircle, ChevronDown, ShoppingCart
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import ServerMap from '@/components/ServerMap';
import BlogSection from '@/components/BlogSection';
// At the top of your file, after imports
const WHATSAPP_NUMBER = "+447549589503"; // Replace with your actual WhatsApp number (without + symbol)
// With these (add them after the partners array or before the SliderRow component):
const moviesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/movie_${String(i + 1).padStart(2, '0')}.jpg`
);

const seriesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/serie_${String(i + 1).padStart(2, '0')}.webp`
);

const sportsData = Array.from({ length: 10 }, (_, i) => 
  `/img/slider/sport_${String(i + 1).padStart(2, '0')}.jpg`
);

// Pricing structure based on months and devices
const pricingPlans = [
  {
    id: '3-months',
    name: '3 MONTHS',
    months: 3,
    prices: {
      1: 30,    // 1 device: €30
      2: 40,    // 2 devices: €40
      3: 55,    // 3 devices: €55
    },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports & PPV Events',
      'Netflix, HBO, Disney+ & Prime Content',
      'Ultra HD & Anti-Freeze Streaming Technology',
      'Works on Firestick, Smart TV & Android',
      'Catch-Up TV & Interactive EPG Guide',
      '99.9% Stable IPTV Servers',
      'Instant IPTV Activation',
      'Priority 24/7 IPTV Support'
    ],
    recommended: false
  },
  {
    id: '6-months',
    name: '6 MONTHS',
    months: 6,
    prices: {
      1: 50,    // 1 device: €50
      2: 70,    // 2 devices: €70
      3: 99,    // 3 devices: €99
    },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports & PPV Events',
      'Netflix, HBO, Disney+ & Prime Content',
      'Ultra HD & Anti-Freeze Streaming Technology',
      'Works on Firestick, Smart TV & Android',
      'Catch-Up TV & Interactive EPG Guide',
      '99.9% Stable IPTV Servers',
      'Instant IPTV Activation',
      'Priority 24/7 IPTV Support'
    ],
    recommended: false
  },
  {
    id: '12-months',
    name: '12 MONTHS',
    months: 12,
    prices: {
      1: 72,    // 1 device: €72
      2: 99,    // 2 devices: €99
      3: 139,   // 3 devices: €139
    },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports & PPV Events',
      'Netflix, HBO, Disney+ & Prime Content',
      'Ultra HD & Anti-Freeze Streaming Technology',
      'Works on Firestick, Smart TV & Android',
      'Catch-Up TV & Interactive EPG Guide',
      '99.9% Stable IPTV Servers',
      'Instant IPTV Activation',
      'Priority 24/7 IPTV Support'
    ],
    recommended: true
  }
];

const basePlans = [
  {
    id: '3-months',
    name: '3 MONTHS',
    basePrice: 24,
    months: 3,
    features: ['20,000+ Global Channels', '65,000+ 4K/8K VOD Content', 'All Premium Sports Packages', 'Catch-up & Interactive EPG', 'Anti-Freeze Technology v4.0', 'Priority 24/7 Support'],
    recommended: false
  },
  {
    id: '12-months',
    name: '12 MONTHS',
    basePrice: 49,
    months: 12,
    features: ['20,000+ Global Channels', '65,000+ 4K/8K VOD Content', 'All Premium Sports Packages', 'Catch-up & Interactive EPG', 'Anti-Freeze Technology v4.0', 'Priority 24/7 Support'],
    recommended: true
  },
  {
    id: '6-months',
    name: '6 MONTHS',
    basePrice: 35,
    months: 6,
    features: ['20,000+ Global Channels', '65,000+ 4K/8K VOD Content', 'All Premium Sports Packages', 'Catch-up & Interactive EPG', 'Anti-Freeze Technology v4.0', 'Priority 24/7 Support'],
    recommended: false
  }
];

const faqs = [
  {
    q: "WHAT IS YEAHIPTV AND HOW DOES IT WORK?",
    a: "YeahIPTV is a premium IPTV streaming service that gives users access to more than 20,000 live TV channels and over 65,000 movies and series on demand. The service works through an internet connection and supports popular devices including Firestick, Smart TVs, Android, iPhone, MAG boxes, and PCs. YeahIPTV provides high-quality streaming in HD, Full HD, and 4K with stable servers, fast activation, and anti-freeze technology for smooth entertainment worldwide."
  },

  {
    q: "IS YEAHIPTV COMPATIBLE WITH FIRESTICK AND SMART TV?",
    a: "Yes, YeahIPTV is fully compatible with Firestick, Android TV, Smart TVs, smartphones, tablets, Windows, Mac, and MAG devices. Users can easily install the service using popular IPTV apps such as IPTV Smarters Pro, TiviMate, and XCIPTV. After subscribing, setup details are sent instantly by email, allowing users to start streaming live TV channels, sports, movies, and TV shows in just a few minutes without complicated installation steps."
  },

  {
    q: "DOES YEAHIPTV INCLUDE SPORTS AND PREMIUM CHANNELS?",
    a: "YeahIPTV includes a wide range of premium sports channels, live PPV events, international entertainment networks, and movie channels. Users can watch football, UFC, NBA, Formula 1, and more alongside premium entertainment content from HBO, Netflix, Prime Video, and Disney+. The service offers stable IPTV streaming with minimal buffering and supports HD, Full HD, and 4K quality across supported devices for a premium viewing experience."
  },

  {
    q: "HOW FAST IS YEAHIPTV ACTIVATION AFTER PAYMENT?",
    a: "YeahIPTV activation is usually instant after payment confirmation. Once the order is completed, users receive IPTV login credentials and setup instructions directly by email within minutes. The service supports fast installation on Firestick, Smart TVs, Android devices, and IPTV apps like IPTV Smarters and TiviMate. This quick activation process allows customers to begin streaming live TV, sports, and movies almost immediately after subscribing."
  },

  {
    q: "CAN I USE YEAHIPTV ON MULTIPLE DEVICES?",
    a: "Yes, YeahIPTV offers multi-device IPTV subscription plans for users who want to stream on more than one device simultaneously. Customers can choose different connection options depending on their needs, including single-device and family plans. The service supports streaming across Smart TVs, Firestick, Android phones, tablets, and computers with stable servers and anti-freeze technology, making it ideal for households with multiple viewers."
  },

  {
    q: "WHAT STREAMING QUALITY DOES YEAHIPTV PROVIDE?",
    a: "YeahIPTV delivers high-quality IPTV streaming with channels and VOD content available in HD, Full HD, 4K, and even 8K where supported. The platform uses stable anti-freeze servers to reduce buffering and improve streaming performance during live sports and entertainment events. Users can enjoy smooth playback, fast channel switching, and crystal-clear picture quality on Firestick, Smart TVs, Android devices, and other compatible streaming platforms."
  },

  {
    q: "IS YEAHIPTV SAFE AND SECURE TO USE?",
    a: "YeahIPTV uses secure payment systems and encrypted checkout methods to protect customer transactions and personal information. The platform supports payment options including Credit Card, PayPal, and Cryptocurrency for convenient and safe purchases. Users can also choose to use a VPN for additional privacy while streaming. With reliable servers, secure activation, and 24/7 support, YeahIPTV provides a stable and professional IPTV streaming experience."
  }
];

// --------------------------

const SliderRow = ({ reverse = false, items }: { reverse?: boolean, items: string[] }) => (
  <div className={`flex w-max ${reverse ? 'animate-marquee-slow-reverse' : 'animate-marquee-slow'} hover:pause-on-hover`}>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s1-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-white/5 hover:border-[var(--color-brand)] transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="Show" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s2-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-white/5 hover:border-[var(--color-brand)] transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="Show" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [devicePlan, setDevicePlan] = useState('1'); // '1', '2', '3'
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get current price based on selected device count from pricingPlans
  const getPlanPrice = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    return plan.prices[deviceCount as keyof typeof plan.prices];
  };

  // Calculate monthly price
  const getMonthlyPrice = (plan: typeof pricingPlans[0]) => {
    const totalPrice = getPlanPrice(plan);
    return (totalPrice / plan.months).toFixed(2);
  };

  // Calculate savings based on ORIGINAL PRICE (before any discount)
  const getSavings = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    const currentPrice = getPlanPrice(plan);
    
    // Define original prices (regular price without any discount)
    let originalPricePerDevice = 0;
    
    if (plan.months === 3) {
      originalPricePerDevice = 45; // 3 months normally €45
    } else if (plan.months === 6) {
      originalPricePerDevice = 72; // 6 months normally €72
    } else {
      originalPricePerDevice = 92; // 12 months normally €92
    }
    
    // Calculate total original price for all devices
    const originalPrice = originalPricePerDevice * deviceCount;
    
    // Calculate savings
    const savings = originalPrice - currentPrice;
    
    return {
      amount: savings > 0 ? savings : 0,
      percentage: savings > 0 ? Math.round((savings / originalPrice) * 100) : 0,
      originalPrice: originalPrice
    };
  };

  // Prepare current plans with dynamic pricing from pricingPlans
  const currentPlans = pricingPlans.map(plan => {
    const price = getPlanPrice(plan);
    const savings = getSavings(plan);
    
    return {
      ...plan,
      price: `€${price}`,
      sub: `€${(price / plan.months).toFixed(2)}/MONTH`,
      savings: savings.amount,
      savingsPercentage: savings.percentage,
      originalPrice: savings.originalPrice
    };
  });
  return (
    <main className="min-h-screen bg-transparent font-sans selection:bg-[var(--color-brand)] selection:text-black overflow-x-hidden pt-15 relative">
      <div className="fixed inset-0 z-[-1]">
        <Image src="/img/bg.jpg" alt="Hero background" fill className="object-cover opacity-20" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/30 via-[#050B14]/40 to-[#050B14]/45"></div>
      </div>
      
      {/* INITIAL LOAD STYLES FOR MARQUEES */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-slow { animation: marquee 50s linear infinite; }
        .animate-marquee-slow-reverse { animation: marquee-reverse 50s linear infinite; }
        .pause-on-hover:hover { animation-play-state: paused; }
      `}} />

      {/* --- HERO SECTION --- */}
      <section className="pt-15 pb-20 px-4 relative flex flex-col items-center text-center overflow-hidden">
        <ScrollReveal className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-8">
            {/* <Star size={14} className="text-[var(--color-brand)] fill-[var(--color-brand)]" /> */}
            <span className="text-xs font-bold uppercase tracking-widest text-white">YeahIPTV Official Website</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-display font-black italic uppercase text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-6 max-w-5xl mx-auto drop-shadow-2xl">
            <span className="text-white block">YEAHIPTV - THE BEST</span>
            <span className="text-[var(--color-brand)] block">PREMIUM IPTV</span>
            <span className="text-[#a3a3a3]">SUBSCRIPTION</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative z-10">
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Watch 20,000+ Live Channels and 60,000+ VODs in ultra-fast 4K/8K quality with instant activation, anti-freeze streaming, and 24/7 premium support.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center gap-4 mb-20 relative z-10">
          <AnimatedButton text="SUBSCRIBE" href="/pricing" className="w-full sm:w-auto shadow-[0_0_20px_rgba(234,179,8,0.3)]" />
          <a href="/setup" className="h-[3.25rem] px-8 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors w-full sm:w-auto">
            SEE HOW IT WORKS
          </a>
        </ScrollReveal>

        {/* Devices Row */}
        <ScrollReveal delay={0.4} className="-mt-[50px] flex items-center justify-center gap-8 md:gap-16 flex-wrap relative z-10">
          {[ 
            { icon: Smartphone, label: 'ANDROID' }, 
            { icon: Monitor, label: 'DESKTOP' }, 
            { icon: Tv, label: 'SMART TV' }, 
            { icon: Box, label: 'TV BOXES' } 
          ].map((device, i) => (
             <div key={i} className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 hover:text-[var(--color-brand)] transition-all cursor-pointer">
               <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand)]">
                 <device.icon size={24} />
               </div>
               <span className="text-[10px] font-bold tracking-widest uppercase">{device.label}</span>
             </div>
          ))}
        </ScrollReveal>
      </section>

      {/* --- STEPS SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-square-pattern border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal>
             <h2 className="text-center font-display font-black italic uppercase text-3xl md:text-5xl mb-16 tracking-tight text-white">START WATCHING IN 3 EASY STEPS</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-30"></div>

            {[
              { num: '01', title: 'SELECT YOUR PLAN', icon: Box, desc: 'Select the perfect subscription duration and device connections for your streaming needs, including Smart TVs, Firestick, Android, and more.', highlight: false },
              { num: '02', title: 'SECURE PAYMENT', icon: Lock, desc: 'Pay with PayPal, Credit Card, or Crypto and save 5% with cryptocurrency payments.', highlight: true },
              { num: '03', title: 'GET CREDENTIALS', icon: Mail, desc: 'LoReceive your IPTV login credentials by email within minutes and start watching live TV, sports, movies, and series immediately.', highlight: false },
            ].map((step, idx) => (
              <ScrollReveal delay={0.1 * idx} key={step.num} className="relative z-10">
                <div className={`p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:scale-105 border ${step.highlight ? 'bg-gradient-to-b from-[#1a1708] to-[#010307] border-[var(--color-brand)] shadow-[0_0_40px_-10px_var(--color-brand)]' : 'bg-[#050B14]/80 border-white/10 hover:border-white/20 hover:bg-[#0A1128]/80'}`}>
                  
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 relative ${step.highlight ? 'bg-[var(--color-brand)] text-black shadow-lg shadow-[var(--color-brand)]/30' : 'bg-white/5 text-[var(--color-brand)] border border-white/10'}`}>
                     <step.icon size={32} />
                     <div className={`absolute -bottom-4 px-4 py-1 rounded-full text-xs font-black italic border-2 ${step.highlight ? 'bg-black text-[var(--color-brand)] border-[var(--color-brand)]' : 'bg-[#050B14] text-white border-white/10'}`}>
                       {step.num}
                     </div>
                  </div>
                  
                  <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white tracking-widest">{step.title}</h3>
                  <p className="text-gray-400 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* --- FULL WIDTH PARTNERS MARQUEE --- */}
      <section className="py-16 border-y border-white/5 bg-[#03060C]">
        <h4 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#a3a3a3] mb-8">PREMIUM BROADCAST PARTNERS</h4>
        <div className="w-full overflow-hidden relative select-none">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#03060C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#03060C] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee">
            <div className="flex items-center gap-12 px-6">
              {[...Array(12)].map((_, i) => (
                <Image 
                  key={`p1-${i}`} 
                  src={`/img/partners/${i + 1}.png`} 
                  width={120} 
                  height={40} 
                  className="h-8 md:h-10 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
                  alt={`Partner ${i + 1}`} 
                  unoptimized 
                />
              ))}
            </div>
            <div className="flex items-center gap-12 px-6">
              {[...Array(12)].map((_, i) => (
                <Image 
                  key={`p2-${i}`} 
                  src={`/img/partners/${i + 1}.png`} 
                  width={120} 
                  height={40} 
                  className="h-8 md:h-10 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
                  alt={`Partner ${i + 1}`} 
                  unoptimized 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
{/* --- MOVIES / SHOWS / SPORTS SLIDER --- */}
<section className="py-20 overflow-hidden relative border-b border-white/5 bg-[#03060C]">
  <div className="w-full relative select-none">
    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#03060C] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#03060C] to-transparent z-10 pointer-events-none" />
    
    <div className="flex flex-col gap-6 py-4">
      {/* Row 1 - MOVIES */}
      <div className="px-4">
        <SliderRow items={[...moviesData, ...moviesData, ...moviesData]} />
      </div>
      
      {/* Row 2 - SERIES (reversed) */}
      <div className="px-4">
        <SliderRow items={[...seriesData, ...seriesData, ...seriesData].reverse()} reverse />
      </div>
      
      {/* Row 3 - SPORTS */}
      <div className="px-4">
        <SliderRow items={[...sportsData, ...sportsData, ...sportsData]} />
      </div>
    </div>
  </div>
</section>



{/* --- RESPONSIVE PREMIUM STATS SECTION --- */}
<section className="py-16 md:py-24 px-4 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_70%)] pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <ScrollReveal className="text-center mb-10 md:mb-14">

      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 px-4 py-1.5 rounded-full inline-block mb-5">
        YEAHIPTV PERFORMANCE
      </span>

      <h2 className="font-display font-black italic uppercase text-3xl sm:text-4xl md:text-6xl tracking-tight text-white mb-4 leading-none">
        TRUSTED BY THOUSANDS
      </h2>

    </ScrollReveal>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

      {[
        { icon: Tv, val: 20, suffix: 'K+', label: 'LIVE CHANNELS' },
        { icon: PlayCircle, val: 65, suffix: 'K+', label: 'MOVIES & SERIES' },
        { icon: Users, val: 15, suffix: 'K+', label: 'ACTIVE USERS' },
        { icon: ShieldCheck, val: 99.9, suffix: '%', label: 'SERVER UPTIME' }
      ].map((stat, i) => (

        <ScrollReveal delay={0.1 * i} key={i}>

          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/40">

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_70%)]" />

            {/* Icon */}
            <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
              <stat.icon size={22} className="md:w-6 md:h-6" />
            </div>

            {/* Number */}
            <div className="relative z-10 flex items-baseline justify-center font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white mb-2 md:mb-3">

              <AnimatedCounter
                to={stat.val}
                decimals={stat.val % 1 !== 0 ? 1 : 0}
              />

              {stat.suffix}

            </div>

            {/* Label */}
            <div className="relative z-10 flex flex-col items-center">

              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 text-center leading-relaxed">
                {stat.label}
              </span>

              <div className="w-8 md:w-10 h-[2px] bg-[var(--color-brand)]/40 rounded-full mt-3 group-hover:w-14 md:group-hover:w-16 transition-all duration-500" />

            </div>

          </div>

        </ScrollReveal>

      ))}

    </div>

  </div>

</section>





{/* --- PRICING SECTION --- */}
<section id="pricing" className="py-24 relative bg-transparent backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <ScrollReveal className="text-center mb-12">
      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-6 inline-block">YEAHIPTV IPTV SUBSCRIPTION</span>
      <h2 className="text-center font-display font-black italic uppercase text-4xl md:text-6xl mb-6 tracking-tight text-white">BEST IPTV PLANS</h2>
      <p className="text-gray-400 font-medium max-w-xl mx-auto text-lg mb-8">Choose your devices. Pick your plan duration. Start streaming instantly.</p>
      
      <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3]">
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><ShieldCheck size={14} className="text-[var(--color-brand)]" /> 7-DAY REFUND</div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><Zap size={14} className="text-[var(--color-brand)]" /> INSTANT ACTIVATION</div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><MessageCircle size={14} className="text-[var(--color-brand)]" /> 24/7 SUPPORT</div>
      </div>
    </ScrollReveal>

    {/* Device Selection - Radio Group Design */}
    <ScrollReveal delay={0.2} className="flex flex-col items-center mb-16">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">CHOOSE YOUR IPTV DEVICES</span>
      
      <div className="bg-[#0A1128]/40 border border-white/10 rounded-2xl p-2 backdrop-blur-sm">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { num: '1', icon: Monitor, label: '1 DEVICE', desc: 'Single Screen' },
            { num: '2', icon: Users, label: '2 DEVICES', desc: 'Duo Pack' },
            { num: '3', icon: Tv, label: '3 DEVICES', desc: 'Family Pack' }
          ].map((option) => (
            <label
              key={option.num}
              className={`relative flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer group
                ${devicePlan === option.num 
                  ? 'bg-gradient-to-r from-[var(--color-brand)] to-[#ca8a04] text-black shadow-lg shadow-[var(--color-brand)]/30 scale-105' 
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <input
                type="radio"
                name="devicePlan"
                value={option.num}
                checked={devicePlan === option.num}
                onChange={() => setDevicePlan(option.num)}
                className="hidden"
              />
              <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                devicePlan === option.num 
                  ? 'border-black bg-black' 
                  : 'border-gray-500 group-hover:border-white'
              }`}>
                {devicePlan === option.num && (
                  <div className="w-2 h-2 rounded-full bg-[var(--color-brand)] m-0.5" />
                )}
              </div>
              <option.icon size={16} className={devicePlan === option.num ? 'text-black' : 'text-gray-400 group-hover:text-white'} />
              <div className="text-left">
                <div className={`text-xs font-bold uppercase tracking-wider ${devicePlan === option.num ? 'text-black' : 'text-gray-300'}`}>
                  {option.label}
                </div>
                <div className={`text-[9px] font-medium ${devicePlan === option.num ? 'text-black/70' : 'text-gray-500'}`}>
                  {option.desc}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-4">
        <Zap size={12} className="text-[var(--color-brand)]" />
        <span className="text-[9px] font-bold uppercase text-gray-500 tracking-widest">SAVE UP TO €137 WITH MULTI-DEVICE PLANS</span>
      </div>
    </ScrollReveal>

    {/* Pricing Cards - Centered layout with recommended card in middle */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto">
      {(() => {
        // Reorder plans to put 12 months (recommended) in the center
        const orderedPlans = [...currentPlans];
        const recommendedIndex = orderedPlans.findIndex(p => p.recommended);
        if (recommendedIndex !== -1 && orderedPlans.length === 3) {
          const [recommended] = orderedPlans.splice(recommendedIndex, 1);
          orderedPlans.splice(1, 0, recommended);
        }
        
        return orderedPlans.map((plan, idx) => {
          const monthlyPrice = (parseInt(plan.price.replace('€', '')) / plan.months).toFixed(2);
          
          return (
            <ScrollReveal delay={0.3 + (idx * 0.1)} key={plan.id} className="h-full">
              <div className={`relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 group/card
                ${plan.recommended 
                  ? 'bg-gradient-to-b from-[#1a1708] to-[#010307] border-[var(--color-brand)] shadow-[0_0_40px_-15px_var(--color-brand)] hover:shadow-[0_0_60px_-15px_var(--color-brand)] scale-100 md:scale-105 z-10' 
                  : 'bg-[#0A1128]/40 border-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-[var(--color-brand)]/5'
                }`}>
                
                {/* MOST POPULAR badge - Centered */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-brand)] to-[#ca8a04] text-black text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full z-20 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Star size={10} className="fill-black" />
                    MOST POPULAR
                  </div>
                )}

                {/* Card Content */}
                <div className="text-center mb-6 pt-4">
                  <h4 className="font-display font-black italic uppercase text-2xl mb-2 text-white group-hover/card:text-[var(--color-brand)] transition-colors duration-300">
                    {plan.name}
                  </h4>
                  
                  {/* Price with ROLL/SCROLL animation */}
                  <div className="relative overflow-hidden">
                    <div className="font-display font-black text-6xl tracking-tighter mb-1 text-white">
                      <div key={`price-${devicePlan}-${plan.id}`} className="price-roller">
                        <span className="inline-block">{plan.price}</span>
                      </div>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 transition-colors duration-300 group-hover/card:text-gray-400">
                      {plan.sub}
                    </div>
                    
                    {/* Savings Display */}
                    {plan.savings > 0 && (
                      <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-105">
                        <span className="text-[9px] font-black uppercase text-green-400">SAVE {plan.savingsPercentage}%</span>
                        <span className="text-[10px] font-bold text-green-400 line-through">€{plan.originalPrice}</span>
                        <span className="text-[9px] font-bold text-green-400">→ {plan.price}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Monthly equivalent with ROLL animation */}
                  <div className="mt-3">
                    <span className="text-[10px] font-medium text-gray-500 transition-all duration-300">
                      Just <span key={`monthly-${devicePlan}-${plan.id}`} className="text-[var(--color-brand)] font-bold group-hover/card:text-[#fde047] transition-colors inline-block monthly-roller">€{monthlyPrice}</span>/month
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-300 transition-all duration-300 group-hover/card:translate-x-1" style={{ transitionDelay: `${i * 30}ms` }}>
                      <CheckCircle2 size={16} className="text-[var(--color-brand)] shrink-0 mt-0.5 transition-transform duration-300 group-hover/card:scale-110" />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Device compatibility info */}
                <div className="mb-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-[9px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Tv size={12} className="transition-transform duration-300 group-hover/card:rotate-12" />
                      <span key={`device-${devicePlan}`} className="device-update">{devicePlan} Device{devicePlan > '1' && 's'} Simultaneously</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap size={12} className="transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-[var(--color-brand)]" />
                      <span>Instant Activation</span>
                    </div>
                  </div>
                </div>

                {/* SIMPLE MODERN BUTTON */}
                <div className="mt-2">
                  <button
                    onClick={() => {
                      const whatsappNumber = WHATSAPP_NUMBER;
                      const message = `Hello! I'm interested in the ${plan.name} plan for ${devicePlan} device(s). Price: ${plan.price}`;
                      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className={`w-full py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer
                      ${plan.recommended 
                        ? 'bg-[var(--color-brand)] text-black hover:bg-[#eab308] hover:scale-105' 
                        : 'bg-transparent text-white border border-white/20 hover:bg-[var(--color-brand)] hover:text-black hover:border-transparent hover:scale-105'
                      }`}
                  >
                    <ShoppingCart size={18} className="transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>SUBSCRIBE NOW</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          );
        });
      })()}
    </div>

    {/* 24h Free Trial - Simple Horizontal Card */}
    <ScrollReveal delay={0.6}>
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => {
            const whatsappNumber = WHATSAPP_NUMBER;
            const message = `Hello! I'm interested in the 24H FREE TEST for your IPTV service.`;
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
          }}
          className="group w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-brand)]/10 to-transparent border border-[var(--color-brand)]/30 hover:border-[var(--color-brand)] transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center justify-center gap-3">
            <Zap size={16} className="text-[var(--color-brand)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">24H FREE TRIAL</span>
            <span className="text-[10px] text-gray-400">|</span>
            <span className="text-[10px] text-gray-400">Test before you buy</span>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand)] group-hover:translate-x-1 transition-transform duration-300">
              CLAIM →
            </div>
          </div>
        </button>
      </div>
    </ScrollReveal>

    {/* WhatsApp Contact Bar
    <ScrollReveal delay={0.7}>
      <div className="mt-8 p-4 bg-[#0A1128]/40 rounded-2xl border border-white/10 text-center">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <MessageCircle size={14} className="text-[var(--color-brand)]" />
          <span>Questions? Chat with us directly on</span>
          <button
            onClick={() => {
              const whatsappNumber = WHATSAPP_NUMBER;
              window.open(`https://wa.me/${whatsappNumber}?text=Hello! I have a question about your IPTV service.`, '_blank');
            }}
            className="text-[var(--color-brand)] font-bold hover:underline transition-all cursor-pointer"
          >
            WhatsApp
          </button>
          <span>|</span>
          <ShieldCheck size={14} className="text-green-500" />
          <span>7-Day Money Back Guarantee</span>
        </div>
      </div>
    </ScrollReveal> */}


  </div>
</section>





      
      {/* --- SERVER MAP --- */}
      <ServerMap />

{/* --- ABOUT US SECTION --- */}
<section id="about" className="py-24 relative overflow-hidden bg-[#050B14]">
   <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

         <div className="w-full md:w-1/2 relative">
            <ScrollReveal>
               <div className="relative aspect-[4/4] rounded-3xl overflow-hidden border border-white/10 ">
                  <Image
                    src="/img/about.png"
                    alt="YeahIPTV Premium IPTV Streaming"
                    fill
                    className="object-cover"
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent mix-blend-multiply"></div>
               </div>

               <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[var(--color-brand)]/20 rounded-full blur-[50px]"></div>
            </ScrollReveal>
         </div>

         <div className="w-full md:w-1/2">

            <ScrollReveal delay={0.2}>

               <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-4 inline-block">
                  ABOUT YEAHIPTV
               </span>

               <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl mb-6 tracking-tight text-white">
                  BEST PREMIUM <span className="text-[var(--color-brand)]">IPTV</span> SERVICE FOR LIVE TV & SPORTS
               </h2>

               <p className="text-gray-400 text-lg leading-relaxed mb-6 font-medium">
                  YeahIPTV offers access to 20,000+ live TV channels and 65,000+ movies and series in HD, Full HD, and 4K quality. Stream premium sports, PPV events, international entertainment, and on-demand content with ultra-fast anti-freeze IPTV servers designed for smooth and stable streaming worldwide.
               </p>

               <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
                  Compatible with Firestick, Smart TVs, Android, iPhone, MAG, and PC, YeahIPTV delivers instant activation, fast streaming performance, and 24/7 premium support for the ultimate IPTV entertainment experience on every device.
               </p>

               <AnimatedButton
                  text="EXPLORE PLANS"
                  href="/pricing"
                  // icon={<Card size={20} className="text-black" />}
                  className="!bg-black group-hover:text-black"
               />

            </ScrollReveal>

         </div>

      </div>
   </div>
</section>

{/* --------------------- */}

{/* --- SPORTS & EVENTS SECTION - WITH STATS --- */}
<section id="sports" className="pb-25 relative overflow-hidden bg-[#050B14] ">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
      
      {/* Image - Left Side */}
      <div className="w-full md:w-1/2 relative">
        <ScrollReveal>
          <div className="relative aspect-[4/4] rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/img/supporters.jpg"
              alt="FIFA World Cup & Live Sports on YeahIPTV"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent mix-blend-multiply" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[var(--color-brand)]/20 rounded-full blur-[50px]"></div>
        </ScrollReveal>
      </div>

      {/* Content - Right Side */}
      <div className="w-full md:w-1/2">
        <ScrollReveal delay={0.2}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-4 inline-block">
            SPORTS & LIVE EVENTS
          </span>

          <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl mb-6 tracking-tight text-white">
            WATCH <span className="text-[var(--color-brand)]">FIFA WORLD CUP</span> & PREMIUM SPORTS IN 4K
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6 font-medium">
            Experience every goal, every match, and every moment of the FIFA World Cup, UEFA Champions League, Premier League, La Liga, Serie A, and all major football tournaments in stunning 4K quality. Never miss a game with YeahIPTV's dedicated sports channels and PPV event coverage.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
            From World Cup finals to Super Bowl, NBA playoffs to Formula 1 racing, enjoy crystal-clear streaming of all live sports events. Our anti-freeze technology ensures you watch every tackle, touchdown, and knockout without buffering or lag.
          </p>

          <AnimatedButton
            text="explore plans"
            href="/pricing"
            className="!bg-black group-hover:text-black"
          />

        </ScrollReveal>
      </div>

    </div>
  </div>
</section>



      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 relative bg-[#03060C] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-center font-display font-black italic uppercase text-3xl md:text-5xl mb-6 tracking-tight text-white">TRUSTED BY STREAMERS <span className="text-[var(--color-brand)]">WORLDWIDE</span></h2>
             <div className="flex gap-1 justify-center mb-4">
               {[1, 2, 3, 4, 5].map(s => <Star key={`stars-${s}`} size={24} className="fill-[var(--color-brand)] text-[var(--color-brand)]" />)}
             </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'ALEX M.', loc: 'FRANCE', text: "Instant setup, perfect quality, and their WhatsApp support is insanely fast. Best IPTV I've tried.", img: "https://i.pravatar.cc/100?img=11" },
              { name: 'DAVID R.', loc: 'GERMANY', text: "Very stable streams even during live sports. Support helped me configure everything in minutes.", img: "https://i.pravatar.cc/100?img=12" },
              { name: 'SOFIA L.', loc: 'NETHERLANDS', text: "Clear pricing, fast activation, and reliable channels. Finally a professional IPTV service.", img: "https://i.pravatar.cc/100?img=9" }
            ].map((review, i) => (
              <ScrollReveal delay={0.1*i} key={i}>
                <div className="bg-[#0A1128]/50 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-[var(--color-brand)]/50 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={review.img} alt={review.name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-[var(--color-brand)]/50" unoptimized />
                    <div>
                      <h4 className="font-display font-black italic uppercase text-lg leading-none mb-1 text-white">{review.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)]">{review.loc}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium italic">&quot;{review.text}&quot;</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>





{/* --- BRAND FEATURES SECTION --- */}
<section className="py-24 relative overflow-hidden bg-[#050B14]">
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    
    {/* Section Header */}
    <ScrollReveal className="text-center mb-16">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand)] mb-4 inline-block">BRAND POSITIONING</span>
      <h2 className="text-center font-display font-black italic uppercase text-4xl md:text-5xl mb-4 tracking-tight text-white">
        Elevating <span className="text-[var(--color-brand)]">Connections</span>
      </h2>
      <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base">
        Streamlining Efficiency for Modern Entertainment
      </p>
    </ScrollReveal>

    {/* Row 1: Image | Text Card | Image */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      
      {/* Card 1 - IMAGE CARD (Left) - WITH REAL IMAGE */}
      <ScrollReveal delay={0.1}>
        <div className="group relative bg-[#0A1128]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full">
          <div className="relative h-64 overflow-hidden">
            <Image 
              src="/img/3.jpg"
              alt="Multi-Screen"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display font-black italic uppercase text-xl text-white">Multi-Screen</h3>
          </div>
        </div>
      </ScrollReveal>

      {/* Card 2 - TEXT CARD (Center) - WITH ICON + TITLE + PARAGRAPH */}
      <ScrollReveal delay={0.2}>
        <div className="group relative bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent border border-[var(--color-brand)]/20 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
          <div className="p-8 text-center">
            {/* SVG Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-brand)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]">
              <Monitor size={32} className="text-[var(--color-brand)]" />
            </div>
            {/* Title */}
            <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white">
              Multi-Screen
            </h3>
            {/* Paragraph */}
            <p className="text-gray-400 text-sm leading-relaxed">
                Watch live TV, sports, and movies on Smart TVs, Firestick, smartphones, tablets, and multiple devices with smooth 4K IPTV streaming.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Card 3 - IMAGE CARD (Right) - WITH REAL IMAGE */}
      <ScrollReveal delay={0.3}>
        <div className="group relative bg-[#0A1128]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full">
          <div className="relative h-64 overflow-hidden">
            <Image 
              src="/img/1.jpg"
              alt="Live TV Streaming"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display font-black italic uppercase text-xl text-white">Live TV Streaming</h3>
          </div>
        </div>
      </ScrollReveal>
    </div>

    {/* Row 2: Text Card | Image | Text Card */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Card 1 - TEXT CARD (Left) - WITH ICON + TITLE + PARAGRAPH */}
      <ScrollReveal delay={0.4}>
        <div className="group relative bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent border border-[var(--color-brand)]/20 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
          <div className="p-8 text-center">
            {/* SVG Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-brand)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]">
              <Tv size={32} className="text-[var(--color-brand)]" />
            </div>
            {/* Title */}
            <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white">
              Live TV Streaming
            </h3>
            {/* Paragraph */}
            <p className="text-gray-400 text-sm leading-relaxed">
                Stream 20,000+ live TV channels worldwide in HD and 4K quality with ultra-fast servers, premium sports, international content, and stable anti-freeze streaming.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Card 2 - IMAGE CARD (Center) - WITH REAL IMAGE */}
      <ScrollReveal delay={0.5}>
        <div className="group relative bg-[#0A1128]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full">
          <div className="relative h-64 overflow-hidden">
            <Image 
              src="/img/2.jpg"
              alt="Catch-Up TV"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display font-black italic uppercase text-xl text-white">Catch-Up TV</h3>
          </div>
        </div>
      </ScrollReveal>

      {/* Card 3 - TEXT CARD (Right) - WITH ICON + TITLE + PARAGRAPH */}
      <ScrollReveal delay={0.6}>
        <div className="group relative bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent border border-[var(--color-brand)]/20 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
          <div className="p-8 text-center">
            {/* SVG Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-brand)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]">
              <PlayCircle size={32} className="text-[var(--color-brand)]" />
            </div>
            {/* Title */}
            <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white">
              Catch-Up TV
            </h3>
            {/* Paragraph */}
            <p className="text-gray-400 text-sm leading-relaxed">
                Watch previously aired channels, sports, and shows anytime with advanced Catch-Up TV and replay features for flexible IPTV streaming.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>

  </div>
</section>









    {/* --- FAQ SECTION --- */}
    <section className="py-24 bg-[#050B14] relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-center text-white font-display font-black italic uppercase text-3xl md:text-5xl mb-2 tracking-tight">
            QUESTIONS? WE HAVE ANSWERS.
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3]">
            EVERYTHING YOU NEED BEFORE YOU SUBSCRIBE.
          </span>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal delay={0.1 * i} key={i}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer 
                  ${openFaq === i 
                    ? 'bg-white/5 border-[var(--color-brand)]/50' 
                    : 'bg-[#0A1128]/50 border-white/5 hover:border-[var(--color-brand)]/30'
                  }`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenFaq(openFaq === i ? null : i);
                  }
                }}
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
              >
                <div className="p-6 flex items-center justify-between text-white text-base md:text-lg font-medium">
                  <h3 className="text-white m-0">{faq.q}</h3>
                  <ChevronDown 
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180 text-[var(--color-brand)]' : 'text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                
                <div 
                  id={`faq-answer-${i}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
                  }`}
                  aria-hidden={openFaq !== i}
                >
                  <div className="p-6 pt-0 text-gray-400 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>





      {/* --- BLOG SECTION --- */}
      <BlogSection />

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-4 relative overflow-hidden bg-transparent backdrop-blur-sm border-t border-white/5">
        <ScrollReveal className="relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#ca8a04] via-[#eab308] to-[#fde047] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-black shadow-[0_0_80px_-20px_var(--color-brand)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-black italic text-black uppercase text-4xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">START STREAMING TONIGHT.</h2>
              <p className="text-lg md:text-xl font-bold font-sans text-black/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Get your premium access in minutes. Message us on WhatsApp and we&apos;ll set you up fast.
              </p>
              <AnimatedButton text="OPEN WHATSAPP" href="/contact" className="!bg-black shadow-xl shrink-0 group-hover:text-black" icon={<Phone size={20} className="text-black" />} />
            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
