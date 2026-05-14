// lib/legalData.ts

export interface LegalPage {
  id: string;
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  noIndex: boolean;
  content: string;
}

export const legalPages: LegalPage[] = [
  {
    id: "1",
    slug: "dmca",
    title: "DMCA Policy",
    description: "YeahIPTV DMCA Policy - Copyright infringement notices and takedown procedures.",
    lastUpdated: "January 15, 2026",
    noIndex: true,
    content: `
      <div class="max-w-4xl mx-auto space-y-10 md:space-y-14">
        
        <!-- INTRODUCTION -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border-l-4 border-yellow-500 rounded-r-2xl p-6 md:p-8">
          <p class="text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
            YeahIPTV respects the intellectual property rights of others and expects our users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to valid copyright infringement notices.
          </p>
        </div>

        <!-- SECTION 1 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            1. Our <span class="text-yellow-500">Commitment</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed">
            YeahIPTV is committed to protecting intellectual property rights. We respond to clear notices of alleged copyright infringement and follow all DMCA guidelines.
          </p>
        </div>

        <!-- SECTION 2 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            2. Reporting <span class="text-yellow-500">Copyright Infringement</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            If you believe that any content available on or through our service infringes upon your copyright, please submit a written notice containing the following information:
          </p>
          
          <div class="bg-white/[0.02] border border-white/10 rounded-2xl p-6 my-6">
            <h3 class="text-white text-xl font-bold mb-4">Required Information:</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">A physical or electronic signature of the copyright owner or authorized representative</span></div>
              <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Identification of the copyrighted work claimed to have been infringed</span></div>
              <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Identification of the material that is claimed to be infringing</span></div>
              <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Your contact information (address, telephone number, email address)</span></div>
              <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">A statement of good faith belief that the use is not authorized</span></div>
              <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">A statement that the information in the notice is accurate under penalty of perjury</span></div>
            </div>
          </div>
        </div>

        <!-- SECTION 3 - CONTACT -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-2xl p-6 md:p-8">
          <h3 class="text-xl md:text-2xl font-semibold text-yellow-500 mb-4">Designated Copyright Agent</h3>
          <p class="text-gray-300 text-base leading-relaxed mb-4">Please send all DMCA notices to:</p>
          <div class="bg-black/30 rounded-xl p-4 inline-flex items-center gap-2">
            <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
            <span class="text-yellow-500 font-mono">dmca@iptvyeah.com</span>
          </div>
          <p class="text-gray-300 text-base leading-relaxed mt-4">We will investigate all claims and remove any material found to be infringing.</p>
        </div>

        <!-- SECTION 4 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            4. <span class="text-yellow-500">Counter-Notification</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            If you believe your content was removed by mistake, you may submit a counter-notification with:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">Your physical or electronic signature</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">Identification of the removed material</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">A statement under penalty of perjury of good faith belief</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">Your name, address, and telephone number</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">A consent to jurisdiction in your location</span></div>
          </div>
        </div>

        <!-- SECTION 5 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            5. <span class="text-yellow-500">Repeat Infringers</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed">
            YeahIPTV reserves the right to terminate user accounts of repeat infringers in appropriate circumstances.
          </p>
        </div>

        <!-- SECTION 6 -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-2xl p-6 md:p-8">
          <div class="flex items-start gap-4">
            <svg class="w-8 h-8 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p class="text-gray-300">For any DMCA-related questions, please contact us at <span class="text-yellow-500">dmca@iptvyeah.com</span></p>
            </div>
          </div>
        </div>

      </div>
    `
  },
  {
    id: "2",
    slug: "terms",
    title: "Terms of Use",
    description: "YeahIPTV Terms of Use - Legal agreement governing your use of our IPTV streaming service.",
    lastUpdated: "January 15, 2026",
    noIndex: true,
    content: `
      <div class="max-w-4xl mx-auto space-y-10 md:space-y-14">
        
        <!-- INTRODUCTION -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border-l-4 border-yellow-500 rounded-r-2xl p-6 md:p-8">
          <p class="text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
            By accessing or using YeahIPTV services, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you may not access our service.
          </p>
        </div>

        <!-- SECTION 1 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            1. <span class="text-yellow-500">Service Description</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed">
            YeahIPTV provides IPTV streaming services including live TV channels, video-on-demand content, and related features. Service availability may vary based on your geographic location and internet connection.
          </p>
        </div>

        <!-- SECTION 2 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            2. <span class="text-yellow-500">User Responsibilities</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">You must be at least 18 years old to use our service</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">You are responsible for maintaining account confidentiality</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">You agree not to share your credentials with unauthorized users</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">You will use the service for personal, non-commercial purposes only</span></div>
            <div class="flex items-center gap-3 p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20"><svg class="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400 text-sm">You will not attempt to reverse engineer or modify our service</span></div>
          </div>
        </div>

        <!-- SECTION 3 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            3. <span class="text-yellow-500">Payment and Subscriptions</span>
          </h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">All prices are in EUR and include applicable taxes</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Subscriptions automatically renew unless cancelled</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">We accept payments via Credit Card, PayPal, and Cryptocurrency</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Refund requests are subject to our Refund Policy</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">YeahIPTV reserves the right to change pricing with notice</span></div>
          </div>
        </div>

        <!-- SECTION 4 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            4. <span class="text-yellow-500">Acceptable Use Policy</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-4">You agree not to:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/20"><svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-red-400 text-sm">Use the service for any illegal purpose</span></div>
            <div class="flex items-center gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/20"><svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-red-400 text-sm">Violate any applicable laws or regulations</span></div>
            <div class="flex items-center gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/20"><svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-red-400 text-sm">Attempt to gain unauthorized access to our systems</span></div>
            <div class="flex items-center gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/20"><svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-red-400 text-sm">Interfere with or disrupt the service or servers</span></div>
            <div class="flex items-center gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/20"><svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-red-400 text-sm">Use automated systems to access our content</span></div>
            <div class="flex items-center gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/20"><svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-red-400 text-sm">Share, redistribute, or resell our service without permission</span></div>
          </div>
        </div>

        <!-- SECTION 5 - CONTACT -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-2xl p-6 md:p-8">
          <div class="flex items-start gap-4">
            <svg class="w-8 h-8 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p class="text-gray-300">Questions about these Terms should be sent to: <span class="text-yellow-500">legal@iptvyeah.com</span></p>
            </div>
          </div>
        </div>

      </div>
    `
  },
  {
    id: "3",
    slug: "privacy",
    title: "Privacy Policy",
    description: "YeahIPTV Privacy Policy - How we collect, use, and protect your personal information.",
    lastUpdated: "January 15, 2026",
    noIndex: true,
    content: `
      <div class="max-w-4xl mx-auto space-y-10 md:space-y-14">
        
        <!-- INTRODUCTION -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border-l-4 border-yellow-500 rounded-r-2xl p-6 md:p-8">
          <p class="text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
            Your privacy is important to us. This Privacy Policy explains how YeahIPTV collects, uses, and protects your personal information.
          </p>
        </div>

        <!-- SECTION 1 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            1. Information <span class="text-yellow-500">We Collect</span>
          </h2>
          
          <h3 class="text-white text-xl font-bold mt-6 mb-3">Personal Information:</h3>
          <div class="space-y-2 mb-6">
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Name and contact information (email address)</span></div>
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Billing and payment information (processed securely)</span></div>
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Account credentials and subscription preferences</span></div>
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Communication history with our support team</span></div>
          </div>

          <h3 class="text-white text-xl font-bold mt-6 mb-3">Usage Information:</h3>
          <div class="space-y-2">
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Device information and IP address</span></div>
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Streaming quality and viewing preferences</span></div>
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Service usage patterns and analytics</span></div>
            <div class="flex items-center gap-3"><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">Cookies and similar tracking technologies</span></div>
          </div>
        </div>

        <!-- SECTION 2 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            2. How We Use <span class="text-yellow-500">Your Information</span>
          </h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">To provide, maintain, and improve our streaming service</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">To process payments and manage your subscription</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">To communicate with you about your account</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">To detect and prevent fraud or abuse</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">To comply with legal obligations</span></div>
          </div>
        </div>

        <!-- SECTION 3 - CONTACT -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-2xl p-6 md:p-8">
          <div class="flex items-start gap-4">
            <svg class="w-8 h-8 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Contact Us</h3>
              <p class="text-gray-300">If you have questions about this Privacy Policy, please contact us at: <span class="text-yellow-500">privacy@iptvyeah.com</span></p>
            </div>
          </div>
        </div>

      </div>
    `
  },
  {
    id: "4",
    slug: "refund",
    title: "Refund Policy",
    description: "YeahIPTV Refund Policy - 7-day money-back guarantee terms and conditions.",
    lastUpdated: "January 15, 2026",
    noIndex: true,
    content: `
      <div class="max-w-4xl mx-auto space-y-10 md:space-y-14">
        
        <!-- INTRODUCTION -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border-l-4 border-yellow-500 rounded-r-2xl p-6 md:p-8">
          <p class="text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
            YeahIPTV offers a 7-day money-back guarantee on all subscription plans. If you are not satisfied with our service within the first 7 days of your purchase, you may request a full refund.
          </p>
        </div>

        <!-- SECTION 1 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            1. <span class="text-yellow-500">Eligibility</span> for Refund
          </h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">The refund request must be made within 7 days of the original purchase date</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">The subscription must not have been renewed (auto-renewal disabled)</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">The account must not have violated our Terms of Use</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-gray-400">No abuse of the refund system (multiple refund requests)</span></div>
          </div>
        </div>

        <!-- SECTION 2 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            2. How to <span class="text-yellow-500">Request a Refund</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-4">To request a refund, please contact our support team via:</p>
          <div class="flex flex-wrap gap-4 mb-6">
            <div class="flex items-center gap-2 bg-black/30 rounded-xl p-3"><svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg><span class="text-yellow-500">refund@iptvyeah.com</span></div>
            <div class="flex items-center gap-2 bg-black/30 rounded-xl p-3"><svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span class="text-yellow-500">+44 7549 589503</span></div>
          </div>
          <p class="text-gray-400 text-sm">Please include your order number and reason for the refund request.</p>
        </div>

        <!-- SECTION 3 -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 mb-5 pb-2 border-b border-white/10">
            3. <span class="text-yellow-500">Non-Refundable</span> Items
          </h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-gray-400">Subscriptions older than 7 days</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-gray-400">Partial refunds for unused portions of subscriptions</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-gray-400">Services accessed or used for more than 7 days</span></div>
            <div class="flex items-start gap-3"><svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><span class="text-gray-400">Violations of our Terms of Use</span></div>
          </div>
        </div>

        <!-- SECTION 4 - CONTACT -->
        <div class="bg-gradient-to-r from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-2xl p-6 md:p-8">
          <div class="flex items-start gap-4">
            <svg class="w-8 h-8 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p class="text-gray-300">For refund-related questions, please contact us at: <span class="text-yellow-500">refund@iptvyeah.com</span></p>
            </div>
          </div>
        </div>

      </div>
    `
  }
];