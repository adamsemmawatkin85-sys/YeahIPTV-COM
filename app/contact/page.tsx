'use client';

import { useState } from 'react';
import { 
  MessageCircle, Mail, Send, Clock, CheckCircle, ChevronDown,
  ShieldCheck, Zap, Headphones, Star, Users, 
  Phone, ThumbsUp, Globe, Award, Sparkles, Rocket,
  X, Check, Calendar, Tag, Eye, Heart
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccessPopup(false), 3000);
    }, 1500);
  };

  // Informational cards only
  const infoCards = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "Our average response time is under 5 minutes for WhatsApp and under 24 hours for email.",
      stat: "< 5min",
      statLabel: "Avg Response",
      bgColor: "from-yellow-500/10 to-transparent",
      borderColor: "border-yellow-500/30",
      textColor: "text-yellow-500"
    },
    {
      icon: ShieldCheck,
      title: "Secure & Private",
      description: "Your data is protected with encryption. We never share your information with third parties.",
      stat: "100%",
      statLabel: "Secure",
      bgColor: "from-green-500/10 to-transparent",
      borderColor: "border-green-500/30",
      textColor: "text-green-500"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "Supporting customers worldwide with multi-language assistance and 24/7 coverage.",
      stat: "150+",
      statLabel: "Countries",
      bgColor: "from-cyan-500/10 to-transparent",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-500"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050B14] pt-32 pb-24 px-4 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,179,8,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(234,179,8,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand)]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
            <Headphones size={12} className="text-[var(--color-brand)]" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand)]">24/7 SUPPORT</span>
          </div>
          <h1 className="font-display font-black italic uppercase text-5xl md:text-7xl tracking-tighter text-white mb-6">
            Contact <span className="text-[var(--color-brand)]">YeahIPTV</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're here to help 24/7. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </ScrollReveal>

        {/* Contact Form - Centered */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#0A1128]/80 to-[#050B14] border border-white/10 rounded-2xl p-6 md:p-8 mb-16">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center mb-3">
                <Send size={20} className="text-[var(--color-brand)]" />
              </div>
              <h2 className="font-display font-black italic uppercase text-2xl text-white">Send us a Message</h2>
              <p className="text-gray-400 text-sm mt-1">Fill out the form and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Users size={16} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0A1128] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0A1128] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <MessageCircle size={16} />
                </div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0A1128] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand)] transition-colors appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing Inquiry">Billing Inquiry</option>
                  <option value="Account Activation">Account Activation</option>
                  <option value="General Question">General Question</option>
                  <option value="Partnership">Partnership</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-500">
                  <Send size={16} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0A1128] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
                  placeholder="Your Message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 bg-[var(--color-brand)] text-black hover:bg-[#eab308] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>

        {/* Informational Cards Grid - 3 cards only */}
        <div className="mb-12">
          <ScrollReveal delay={0.3}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
                <Sparkles size={12} className="text-[var(--color-brand)]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-brand)]">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="font-display font-black italic uppercase text-2xl md:text-3xl text-white">
                What Makes Our Support <span className="text-[var(--color-brand)]">Exceptional</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card, index) => (
              <ScrollReveal delay={0.4 + (index * 0.1)} key={index}>
                <div className={`bg-gradient-to-br ${card.bgColor} border ${card.borderColor} rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-brand)]/10 h-full`}>
                  <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 ${card.textColor}`}>
                    <card.icon size={22} />
                  </div>
                  <h3 className="font-display font-black italic text-lg text-white uppercase mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-baseline gap-2 pt-3 border-t border-white/10">
                    <span className={`text-xl font-black ${card.textColor}`}>
                      {card.stat}
                    </span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider">
                      {card.statLabel}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <ScrollReveal delay={0.7}>
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[var(--color-brand)]" />
                <span className="text-[9px] text-gray-500 uppercase">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp size={14} className="text-[var(--color-brand)]" />
                <span className="text-[9px] text-gray-500 uppercase">Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[var(--color-brand)]" />
                <span className="text-[9px] text-gray-500 uppercase">Global Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={14} className="text-[var(--color-brand)]" />
                <span className="text-[9px] text-gray-500 uppercase">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={14} className="text-[var(--color-brand)]" />
                <span className="text-[9px] text-gray-500 uppercase">Customer First</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 animate-fadeIn" onClick={() => setShowSuccessPopup(false)} />
          
          <div className="fixed bottom-8 right-8 z-50 animate-slideUp">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-2xl shadow-green-500/30 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-scaleIn">
                  <Check size={20} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm">Message Sent Successfully!</h4>
                  <p className="text-white/80 text-xs mt-1">
                    We will reply to you as fast as possible.
                  </p>
                </div>
                
                <button 
                  onClick={() => setShowSuccessPopup(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>
    </main>
  );
}