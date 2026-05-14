import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import { 
  CheckCircle, ArrowRight, MonitorPlay, Smartphone, Laptop, Tv, 
  Clock, ShieldCheck, Zap, Headphones, Star, Trophy, Sparkles, 
  Rocket, Lock, Users, Globe, HelpCircle, CreditCard 
} from 'lucide-react';
import SetupTimeline from '@/components/SetupTimeline';
import SetupFaq from '@/components/SetupFaq';

export default function SetupPage() {
  return (
    <main className="min-h-screen bg-[#050B14] pt-32 pb-24 px-4 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,179,8,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(234,179,8,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand)]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        
        {/* Hero Section */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
            <Rocket size={12} className="text-[var(--color-brand)]" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand)]">EASY SETUP</span>
          </div>
          <h1 className="font-display font-black italic uppercase text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-6">
            Setup <span className="text-[var(--color-brand)]">YeahIPTV</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Get up and running in minutes. Follow our simple step-by-step instructions below to configure your device and start streaming 20,000+ channels.
          </p>
        </ScrollReveal>

        {/* Quick Stats Row - No Emojis */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
              <Clock size={16} className="text-[var(--color-brand)]" />
              <span className="text-xs font-bold uppercase">Under 10 Minutes Setup</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
              <Zap size={16} className="text-[var(--color-brand)]" />
              <span className="text-xs font-bold uppercase">Instant Activation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
              <Headphones size={16} className="text-[var(--color-brand)]" />
              <span className="text-xs font-bold uppercase">24/7 Live Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
              <Star size={16} className="text-[var(--color-brand)]" />
              <span className="text-xs font-bold uppercase">4.9/5 Rating</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Timeline Component */}
        <SetupTimeline />

        {/* Supported Devices Section */}
        <section className="py-20 border-t border-white/5 mt-10" aria-label="Supported Devices">
          <ScrollReveal className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-4 inline-block">COMPATIBILITY</span>
            <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl text-white mb-4 tracking-tight">
              WORKS ON <span className="text-[var(--color-brand)]">ALL DEVICES</span>
            </h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">
              YeahIPTV is compatible with any device you own. No special hardware required. Stream anywhere, anytime.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Tv, name: 'Smart TV', desc: 'Samsung, LG, Android TV', features: '4K HDR | Dolby Audio' },
              { icon: MonitorPlay, name: 'TV Box', desc: 'Firestick, MAG, Apple TV', features: 'Easy Setup | Fast Loading' },
              { icon: Smartphone, name: 'Mobile', desc: 'iOS & Android', features: 'Mobile Optimized | Cast Support' },
              { icon: Laptop, name: 'Computer', desc: 'Windows & Mac', features: '4K Streaming | EPG Guide' },
            ].map((device, i) => (
              <ScrollReveal key={device.name} delay={0.1 * i} className="group">
                <div className="bg-gradient-to-br from-[#0A1128]/80 to-[#050B14] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[var(--color-brand)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-brand)]/10">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[var(--color-brand)]/20 to-transparent rounded-xl flex items-center justify-center mb-4 text-[var(--color-brand)] group-hover:scale-110 transition-transform duration-300">
                    <device.icon size={28} />
                  </div>
                  <h3 className="font-display font-black italic uppercase text-white mb-2 text-lg">{device.name}</h3>
                  <p className="text-xs text-gray-400 font-medium mb-2">{device.desc}</p>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{device.features}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional Compatibility Note - No Emojis */}
          <div className="mt-8 text-center p-4 bg-[var(--color-brand)]/5 border border-[var(--color-brand)]/20 rounded-xl">
            <div className="flex items-center justify-center gap-2">
              <Tv size={12} className="text-gray-500" />
              <p className="text-xs text-gray-400">
                Also supports: Chromecast, Roku, Nvidia Shield, Formuler, Dreamlink, and all Android-based devices
              </p>
            </div>
          </div>
        </section>

        {/* Setup FAQ Section */}
        <section className="py-20 border-t border-white/5" aria-label="Frequently Asked Questions">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 rounded-full px-4 py-1.5 mb-4">
              <HelpCircle size={12} className="text-[var(--color-brand)]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand)]">FAQ</span>
            </div>
            <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl text-white mb-4 tracking-tight">
              COMMON <span className="text-[var(--color-brand)]">SETUP QUESTIONS</span>
            </h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">
              Trouble logging in? Need the best app recommendations? Find answers below.
            </p>
          </ScrollReveal>
          
          <SetupFaq />
        </section>

        {/* Video Tutorials Section */}
        <section className="py-10 border-t border-white/5" aria-label="Video Tutorials">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display font-black italic uppercase text-2xl md:text-3xl text-white mb-3 tracking-tight">
              <span className="text-[var(--color-brand)]">VIDEO</span> TUTORIALS
            </h2>
            <p className="text-gray-400 text-sm">Watch our step-by-step video guides for visual instructions</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1128]/40 border border-white/10 rounded-2xl p-6 text-center hover:border-[var(--color-brand)]/40 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MonitorPlay size={32} className="text-[var(--color-brand)]" />
              </div>
              <h3 className="font-display font-black italic uppercase text-lg text-white mb-2">Firestick Setup Guide</h3>
              <p className="text-gray-400 text-sm mb-4">Complete installation tutorial for Amazon Firestick and Fire TV</p>
              <div className="text-[var(--color-brand)] text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Coming Soon
              </div>
            </div>

            <div className="bg-[#0A1128]/40 border border-white/10 rounded-2xl p-6 text-center hover:border-[var(--color-brand)]/40 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone size={32} className="text-[var(--color-brand)]" />
              </div>
              <h3 className="font-display font-black italic uppercase text-lg text-white mb-2">Mobile App Setup</h3>
              <p className="text-gray-400 text-sm mb-4">Install YeahIPTV on iOS and Android devices</p>
              <div className="text-[var(--color-brand)] text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Coming Soon
              </div>
            </div>
          </div>
        </section>

        {/* Subscription CTA Card - No Emojis */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="w-full bg-gradient-to-br from-[var(--color-brand)]/10 via-[#0A1128]/80 to-[#050B14] backdrop-blur-xl border border-[var(--color-brand)]/30 hover:border-[var(--color-brand)]/60 transition-all duration-500 rounded-3xl md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden group shadow-2xl shadow-[var(--color-brand)]/10">
            
            {/* Animated Background Lines */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)]/0 via-[var(--color-brand)]/15 to-[var(--color-brand)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -rotate-45 scale-[2] pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-brand)]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--color-brand)]/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center mb-6 animate-pulse">
                <Trophy size={40} className="text-[var(--color-brand)]" />
              </div>
              <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl text-white mb-4 tracking-tight">
                READY TO <span className="text-[var(--color-brand)]">GET STARTED</span>?
              </h2>
              <p className="text-gray-300 text-base md:text-lg font-medium max-w-2xl mb-8 leading-relaxed">
                Join <span className="text-[var(--color-brand)] font-bold">15,000+</span> satisfied users. Grab your YeahIPTV subscription today and gain access to 
                <span className="text-[var(--color-brand)] font-bold"> 20,000+ channels</span> and 
                <span className="text-[var(--color-brand)] font-bold"> 65,000+ VODs</span> in stunning 4K/8K quality.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                  <ShieldCheck size={14} className="text-[var(--color-brand)]" />
                  <span className="text-[10px] font-bold uppercase text-gray-300">7-Day Refund</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                  <Zap size={14} className="text-[var(--color-brand)]" />
                  <span className="text-[10px] font-bold uppercase text-gray-300">Instant Activation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                  <Headphones size={14} className="text-[var(--color-brand)]" />
                  <span className="text-[10px] font-bold uppercase text-gray-300">24/7 Support</span>
                </div>
              </div>
              
              <AnimatedButton 
                text="Get subscription now" 
                href="/pricing" 
                icon={<ArrowRight size={20} className="text-black" />}
                className="!bg-transparent !text-black font-bold py-4 px-10 text-base shadow-lg shadow-[var(--color-brand)]/30 hover:shadow-xl hover:shadow-[var(--color-brand)]/50"
              />
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Lock size={10} className="text-gray-500" />
                  <p className="text-[10px] text-gray-500">Secure payment</p>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600" />
                <div className="flex items-center gap-2">
                  <CreditCard size={10} className="text-gray-500" />
                  <p className="text-[10px] text-gray-500">No contract</p>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600" />
                <div className="flex items-center gap-2">
                  <Globe size={10} className="text-gray-500" />
                  <p className="text-[10px] text-gray-500">Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Badges - No Emojis */}
        <div className="mt-12 text-center">
          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-600 mb-4">TRUSTED BY THOUSANDS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Star size={14} className="text-[var(--color-brand)] fill-[var(--color-brand)]" />
              <span className="text-xs text-gray-500">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[var(--color-brand)]" />
              <span className="text-xs text-gray-500">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[var(--color-brand)]" />
              <span className="text-xs text-gray-500">15K+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[var(--color-brand)]" />
              <span className="text-xs text-gray-500">Instant Delivery</span>
            </div>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to setup YeahIPTV",
              "description": "Step-by-step guide to install YeahIPTV on any device",
              "totalTime": "PT10M",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Subscribe to YeahIPTV",
                  "text": "Choose your subscription plan and complete payment"
                },
                {
                  "@type": "HowToStep",
                  "name": "Check Your Email",
                  "text": "Receive login credentials instantly"
                },
                {
                  "@type": "HowToStep",
                  "name": "Install IPTV App",
                  "text": "Download recommended app for your device"
                },
                {
                  "@type": "HowToStep",
                  "name": "Login and Start Streaming",
                  "text": "Enter credentials and enjoy 20,000+ channels"
                }
              ]
            })
          }}
        />
      </div>
    </main>
  );
}