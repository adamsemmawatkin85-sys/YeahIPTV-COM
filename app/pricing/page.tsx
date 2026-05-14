'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import { 
  ShieldCheck, Zap, MessageCircle, CheckCircle2, ChevronDown, 
  Check, Phone, Star, Tv, Monitor, ShoppingCart, Users 
} from 'lucide-react';

const WHATSAPP_NUMBER = '+447549589503';

// Pricing structure based on months and devices (from your home page)
const pricingPlans = [
  {
    id: '3-months',
    name: '3 MONTHS',
    months: 3,
    prices: {
      1: 30,
      2: 40,
      3: 55,
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
      1: 50,
      2: 70,
      3: 99,
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
      1: 72,
      2: 99,
      3: 139,
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

const faqs = [
  { 
    q: "HOW DO I RECEIVE MY LOGIN DETAILS AFTER PURCHASING YEAHIPTV?", 
    a: "After completing your payment, your YeahIPTV login credentials and complete setup instructions are sent instantly to the email address you provided during checkout. The email typically arrives within 2-5 minutes. Make sure to check your spam or junk folder if you don't see it in your inbox. Your login package includes your username, password, server URL, and installation guides for all supported devices including Firestick, Smart TV, Android, iOS, and Windows." 
  },
  { 
    q: "DOES YEAHIPTV OFFER A MONEY-BACK GUARANTEE OR REFUND?", 
    a: "Yes, YeahIPTV proudly offers a 7-day money-back guarantee on all subscription plans. If you're not completely satisfied with our service for any reason within the first 7 days of your purchase, simply contact our support team and we will issue a full refund — no questions asked. This allows you to try our premium IPTV service risk-free and experience our 20,000+ channels and 65,000+ VODs in stunning 4K/8K quality." 
  },
  { 
    q: "CAN I UPGRADE MY YEAHIPTV SUBSCRIPTION PLAN LATER?", 
    a: "Absolutely! You can upgrade your YeahIPTV subscription at any time. Whether you need to add more simultaneous device connections (upgrade from 1 to 2 or 3 devices) or extend your subscription duration (from 1 month to 6 or 12 months), simply contact our 24/7 support team via WhatsApp or email. We'll handle the upgrade instantly and adjust your pricing accordingly. You only pay the difference between your current plan and the upgraded plan." 
  },
  { 
    q: "WHAT SUPPORT OPTIONS ARE AVAILABLE IF I NEED HELP WITH YEAHIPTV?", 
    a: "YeahIPTV provides 24/7 customer support through multiple channels to ensure you always get help when you need it. Our fastest support channel is WhatsApp, where our team typically responds within 5-10 minutes. You can also reach us via email at support@iptvyeah.com for detailed inquiries, with responses within 2-4 hours. Our support team can assist with installation guides, troubleshooting buffering issues, device configuration, EPG setup, and any other questions about your IPTV service." 
  },
  { 
    q: "WHICH DEVICES ARE COMPATIBLE WITH YEAHIPTV?", 
    a: "YeahIPTV is compatible with virtually all modern streaming devices. Our service works seamlessly on Amazon Firestick and Fire TV, all Android TV boxes and Google TV, Smart TVs from Samsung, LG, Sony, and TCL, Apple TV and iOS devices (iPhone & iPad), Windows and Mac computers via VLC or IPTV apps, MAG boxes, and Android smartphones and tablets. We provide detailed setup guides for each device type to ensure a smooth installation process." 
  },
  { 
    q: "WHAT CHANNELS AND CONTENT DOES YEAHIPTV INCLUDE?", 
    a: "YeahIPTV offers an extensive content library with over 20,000 live TV channels from around the world and 65,000+ movies and TV series in Video on Demand (VOD). Our content includes all premium sports channels (Sky Sports, BT Sport, ESPN, beIN Sports), Pay-Per-View events (UFC, Boxing, WWE), entertainment channels (HBO, Netflix, Disney+, Amazon Prime), international channels from UK, USA, Canada, Germany, France, Italy, Spain, Arabic countries, and more. All content is available in HD, Full HD, 4K, and even 8K quality where supported." 
  },
  { 
    q: "HOW DOES THE 24-HOUR FREE TRIAL WORK?", 
    a: "YeahIPTV offers a 24-hour free trial so you can test our service before committing to a paid subscription. The free trial gives you full access to our entire channel lineup and VOD library, allowing you to test streaming quality, channel variety, and device compatibility. To claim your free trial, simply contact our support team via WhatsApp and request a trial. No payment information is required for the trial. After the 24-hour period, you can choose to subscribe to any of our monthly, 6-month, or 12-month plans." 
  },
  { 
    q: "IS YEAHIPTV LEGAL AND SAFE TO USE?", 
    a: "YeahIPTV operates as a legitimate IPTV service provider. We use secure 256-bit SSL encryption for all transactions to protect your personal and payment information. Your data is never shared with third parties. For added privacy and security, we recommend using a VPN service while streaming, which can also help prevent ISP throttling and improve buffering performance. Our payment methods include credit cards, PayPal, and cryptocurrency for those who prefer additional anonymity." 
  }
];

export default function PricingPage() {
  const [devicePlan, setDevicePlan] = useState('1');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPlanPrice = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    return plan.prices[deviceCount as keyof typeof plan.prices];
  };

  const getSavings = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    const currentPrice = getPlanPrice(plan);
    
    let originalPricePerDevice = 0;
    if (plan.months === 3) originalPricePerDevice = 45;
    else if (plan.months === 6) originalPricePerDevice = 72;
    else originalPricePerDevice = 92;
    
    const originalPrice = originalPricePerDevice * deviceCount;
    const savings = originalPrice - currentPrice;
    
    return {
      amount: savings > 0 ? savings : 0,
      percentage: savings > 0 ? Math.round((savings / originalPrice) * 100) : 0,
      originalPrice: originalPrice
    };
  };

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

  // Reorder to put 12 months (recommended) in the center
  const orderedPlans = [...currentPlans];
  const recommendedIndex = orderedPlans.findIndex(p => p.recommended);
  if (recommendedIndex !== -1) {
    const [recommended] = orderedPlans.splice(recommendedIndex, 1);
    orderedPlans.splice(1, 0, recommended);
  }

  return (
    <main className="min-h-screen bg-[#050B14] pt-32 pb-24 relative overflow-x-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,179,8,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(234,179,8,0.04),transparent_60%)] pointer-events-none" />

      {/* Header Section */}
      <section className="relative bg-transparent backdrop-blur-md mb-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-6 inline-block">
              YEAHIPTV IPTV SUBSCRIPTION
            </span>
            <h1 className="text-center font-display font-black italic uppercase text-4xl md:text-6xl mb-6 tracking-tight text-white">
              <span className='text-[var(--color-brand)]'>YEAHIPTV</span> BEST IPTV PLANS
            </h1>
            <p className="text-gray-400 font-medium max-w-xl mx-auto text-lg mb-8">
              Choose your devices. Pick your plan duration. Start streaming instantly.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3]">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <ShieldCheck size={14} className="text-[var(--color-brand)]" /> 7-DAY REFUND
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Zap size={14} className="text-[var(--color-brand)]" /> INSTANT ACTIVATION
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MessageCircle size={14} className="text-[var(--color-brand)]" /> 24/7 SUPPORT
              </div>
            </div>
          </ScrollReveal>

          {/* Device Selection */}
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
              <span className="text-[9px] font-bold uppercase text-gray-500 tracking-widest">
                SAVE UP TO €137 WITH MULTI-DEVICE & LONG-TERM PLANS
              </span>
            </div>
          </ScrollReveal>

          {/* Pricing Cards - 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {orderedPlans.map((plan, idx) => {
              const monthlyPrice = (parseInt(plan.price.replace('€', '')) / plan.months).toFixed(2);
              
              return (
                <ScrollReveal delay={0.3 + (idx * 0.1)} key={plan.id} className="h-full">
                  <div className={`relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 group/card
                    ${plan.recommended 
                      ? 'bg-gradient-to-b from-[#1a1708] to-[#010307] border-[var(--color-brand)] shadow-[0_0_40px_-15px_var(--color-brand)] hover:shadow-[0_0_60px_-15px_var(--color-brand)] scale-100 md:scale-105 z-10' 
                      : 'bg-[#0A1128]/40 border-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-[var(--color-brand)]/5'
                    }`}>
                    
                    {/* MOST POPULAR badge */}
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
                      
                      <div className="relative overflow-hidden">
                        <div className="font-display font-black text-6xl tracking-tighter mb-1 text-white">
                          <div key={`price-${devicePlan}-${plan.id}`} className="price-roller">
                            <span className="inline-block">{plan.price}</span>
                          </div>
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 transition-colors duration-300 group-hover/card:text-gray-400">
                          {plan.sub}
                        </div>
                        
                        {plan.savings > 0 && (
                          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-105">
                            <span className="text-[9px] font-black uppercase text-green-400">SAVE {plan.savingsPercentage}%</span>
                            <span className="text-[10px] font-bold text-green-400 line-through">€{plan.originalPrice}</span>
                            <span className="text-[9px] font-bold text-green-400">→ {plan.price}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-3">
                        <span className="text-[10px] font-medium text-gray-500 transition-all duration-300">
                          Just <span key={`monthly-${devicePlan}-${plan.id}`} className="text-[var(--color-brand)] font-bold group-hover/card:text-[#fde047] transition-colors inline-block monthly-roller">€{monthlyPrice}</span>/month
                        </span>
                      </div>
                    </div>

                    {/* Features List - SHOW ALL 10 FEATURES */}
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

                    {/* CTA Button */}
                    <div className="mt-2">
                      <button
                        onClick={() => {
                          const message = `Hello! I'm interested in the ${plan.name} plan for ${devicePlan} device(s). Price: ${plan.price}`;
                          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
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
            })}
          </div>

          {/* 24h Free Trial */}
          <ScrollReveal delay={0.6}>
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => {
                  const message = `Hello! I'm interested in the 24H FREE TEST for your IPTV service.`;
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
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

        {/* Trusted By & Payment Methods */}
        <ScrollReveal delay={0.7}>
          <div className="mt-16 border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Trusted Users */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-5 block">
                TRUSTED BY 15,000+ USERS
              </span>

              <div className="flex items-center -space-x-4 mb-5">
                {[
                  "https://i.pravatar.cc/100?img=12",
                  "https://i.pravatar.cc/100?img=32",
                  "https://i.pravatar.cc/100?img=15",
                  "https://i.pravatar.cc/100?img=45",
                  "https://i.pravatar.cc/100?img=20",
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className="relative group"
                  >
                    <img
                      src={avatar}
                      alt={`User ${i + 1}`}
                      className="w-14 h-14 rounded-full border-[3px] border-[#0A1128] object-cover shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}

                {/* Rating */}
                <div className="w-14 h-14 rounded-full border-[3px] border-[#0A1128] bg-gradient-to-br from-[var(--color-brand)] to-yellow-500 flex items-center justify-center text-sm font-bold text-white shadow-lg z-10 relative">
                  4.9★
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                Join thousands of happy customers enjoying ultra-fast streaming,
                premium channels, and stable IPTV service every day.
              </p>
            </div>

        {/* Payment Methods */}
        <div className="md:text-right">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-7 block">
            SECURE PAYMENT METHODS
          </span>

          <div className="flex flex-wrap md:justify-end gap-2.5 mt-4">

            {/* Visa */}
            <div className="group w-[88px] h-10 bg-black/[0.03] backdrop-blur-xl rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
              <img
                src="/img/payment/4.png"
                alt="Paypal"
                className="h-17 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>

            {/* Mastercard */}
            <div className="group w-[95px] h-10 bg-black/[0.03] backdrop-blur-xl rounded-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
              <img
                src="/img/payment/3.png"
                alt="BTC"
                className="h-17 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>

            {/* PayPal */}
            <div className="group w-[88px] h-10 bg-black/[0.03] backdrop-blur-xl rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
              <img
                src="/img/payment/2.png"
                alt="VISA"
                className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>

            {/* Bitcoin */}
            <div className="group w-[88px] h-10 bg-black/[0.03] backdrop-blur-xl rounded-lg border border-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
              <img
                src="/img/payment/1.png"
                alt="mastercard"
                className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>

          </div>
        </div>
          </div>
        </ScrollReveal>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="bg-[#050B14]/80 py-24 border-y border-white/5 mb-32">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl text-white tracking-tight">
              WHY CHOOSE YEAHIPTV?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "No Buffering Guaranteed", desc: "Powered by Anti-Freeze v4.0 technology, enjoy smooth and stable streaming without annoying interruptions." },
              { title: "Universal Compatibility", desc: "Our platform works seamlessly across Smart TVs, Android boxes, smartphones, Apple TV, and more." },
              { title: "Global Content Array", desc: "Access practically every premium channel from the UK, USA, Canada, and countless international markets." },
              { title: "Constantly Updated", desc: "We update our massive library of movies and TV shows daily, making sure you never miss the latest content." }
            ].map((feature, i) => (
              <ScrollReveal delay={0.1 * i} key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center shrink-0 border border-[var(--color-brand)]/20">
                  <Check size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-black italic uppercase text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 relative z-10 mb-32">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-center text-white font-display font-black italic uppercase text-3xl md:text-5xl mb-2 tracking-tight">
            PRICING FAQ
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3]">
            COMMON BILLING QUESTIONS
          </span>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal delay={0.1*i} key={i}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-colors cursor-pointer ${openFaq === i ? 'bg-white/5 border-[var(--color-brand)]/50' : 'bg-[#0A1128]/50 border-white/5 hover:border-[var(--color-brand)]/30'}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between font-display font-black italic uppercase text-sm text-white">
                  {faq.q}
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[var(--color-brand)]' : 'text-gray-500'}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-6 pt-0 text-gray-400 font-medium leading-relaxed">{faq.a}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 px-4 relative flex justify-center">
        <ScrollReveal className="w-full max-w-5xl">
          <div className="bg-gradient-to-br from-[#ca8a04] via-[#eab308] to-[#fde047] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-black shadow-[0_0_80px_-20px_var(--color-brand)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-black italic uppercase text-4xl md:text-6xl mb-6 tracking-tighter drop-shadow-sm">
                STILL NOT SURE?
              </h2>
              <p className="text-lg md:text-xl font-bold font-sans text-black/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                We provide a 24-hour trial so you can experience the YeahIPTV performance before committing.
              </p>
              <AnimatedButton 
                text="REQUEST TRIAL" 
                href="/contact" 
                className="!bg-black shadow-xl shrink-0 group-hover:text-black" 
                icon={<Phone size={20} className="text-black" />} 
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes priceRoll {
          0% { opacity: 0; transform: translateY(-100%) rotateX(-90deg); }
          20% { opacity: 0.5; transform: translateY(-50%) rotateX(-45deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        .price-roller { display: inline-block; animation: priceRoll 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards; transform-origin: center; }
        .monthly-roller { display: inline-block; animation: priceRoll 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards; transform-origin: center; }
        .device-update { animation: priceRoll 0.3s ease-out forwards; display: inline-block; }
      `}</style>
    </main>
  );
}