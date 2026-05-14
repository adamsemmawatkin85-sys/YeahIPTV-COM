import { Tv, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#010307] pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="md:w-1/3">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="h-8 w-auto relative">
              <Image 
                src="/img/logo.webp" 
                alt="YEAHIPTV Logo" 
                width={120}
                height={32}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-gray-500 font-medium text-sm leading-relaxed">
            Premium IPTV subscriptions with ultra-fast activation, stable servers, and 24/7 WhatsApp support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h5 className="font-display font-black uppercase tracking-widest text-[#a3a3a3] text-xs mb-6">QUICK LINKS</h5>
              <ul className="space-y-4 text-sm font-semibold text-gray-400">
                <li><Link href="/pricing" className="hover:text-[var(--color-brand)] transition-colors">Pricing</Link></li>
                <li><Link href="/setup" className="hover:text-[var(--color-brand)] transition-colors">Setup Guide</Link></li>
                <li><Link href="/blog" className="hover:text-[var(--color-brand)] transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--color-brand)] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-display font-black uppercase tracking-widest text-[#a3a3a3] text-xs mb-6">COMPANY</h5>
              <ul className="space-y-4 text-sm font-semibold text-gray-400">
                <li><Link href="/legal/dmca" className="hover:text-[var(--color-brand)] transition-colors">DMCA</Link></li>
                <li><Link href="/legal/terms" className="hover:text-[var(--color-brand)] transition-colors">Terms of use</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-[var(--color-brand)] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal/refund" className="hover:text-[var(--color-brand)] transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="font-display font-black uppercase tracking-widest text-[#a3a3a3] text-xs mb-6">SUPPORT</h5>
              <p className="text-sm font-medium text-gray-400 mb-6">Need help? Our team replies fast on WhatsApp — 24/7.</p>
              <Link href="https://wa.me/+447549589503" className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:brightness-125 transition-all">
                <MessageCircle size={18} /> Chat on WhatsApp
              </Link>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
        <p>© {new Date().getFullYear()} YEAHIPTV. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-2.5">
          <Image 
            src="/img/payment/4.png" 
            alt="Paypal" 
            width={88} 
            height={40} 
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image 
            src="/img/payment/3.png" 
            alt="BTC" 
            width={95} 
            height={40} 
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image 
            src="/img/payment/2.png" 
            alt="VISA" 
            width={88} 
            height={40} 
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image 
            src="/img/payment/1.png" 
            alt="Mastercard" 
            width={88} 
            height={40} 
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
}