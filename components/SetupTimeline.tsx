'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  ShoppingCart,
  Download,
  LogIn,
  Tv
} from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    id: 1,
    title: 'Choose Your IPTV Plan',
    description:
      'Select the best YeahIPTV subscription plan for your devices and enjoy instant activation with secure payment methods including PayPal, Credit Card, and Crypto.',
    icon: ShoppingCart,
    image:
      '/img/setup_1.jpg'
  },

  {
    id: 2,
    title: 'Install IPTV Player',
    description:
      'Download IPTV Smarters Pro, TiviMate, or XCIPTV on Firestick, Smart TV, Android, iPhone, or any supported streaming device.',
    icon: Download,
    image:
      '/img/setup_2.jpg'
  },

  {
    id: 3,
    title: 'Login With Xtream Codes',
    description:
      'Open your IPTV app and login using your Xtream Codes API details for fast and stable YeahIPTV streaming access.',
    icon: LogIn,
    image:
      '/img/setup_3.jpg'
  },

  {
    id: 4,
    title: 'Start Streaming Instantly',
    description:
      'Enjoy 20,000+ live TV channels, premium sports, movies, and series in HD, Full HD, and 4K quality without buffering.',
    icon: Tv,
    image:
      '/img/setup_4.jpg'
  }
];

export default function SetupTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <div
      ref={containerRef}
      className="relative mb-24 max-w-5xl mx-auto w-full pt-10 px-4"
    >

      {/* Background Line Desktop */}
      <div className="absolute left-[39px] md:left-1/2 top-4 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full hidden md:block" />

      {/* Background Line Mobile */}
      <div className="absolute left-[39px] top-4 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full md:hidden" />

      {/* Animated Line Desktop */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[39px] md:left-1/2 top-4 w-1 bg-gradient-to-b from-[var(--color-brand)] to-[#ca8a04] -translate-x-1/2 z-0 hidden md:block shadow-[0_0_20px_var(--color-brand)] rounded-full origin-top"
      />

      {/* Animated Line Mobile */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[39px] top-4 w-1 bg-gradient-to-b from-[var(--color-brand)] to-[#ca8a04] -translate-x-1/2 z-0 md:hidden shadow-[0_0_20px_var(--color-brand)] rounded-full origin-top"
      />

      <div className="space-y-16 relative z-10">

        {steps.map((step, index) => {

          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (

            <ScrollReveal
              key={step.id}
              delay={0.1}
              className="relative flex items-center md:justify-between w-full flex-col md:flex-row group"
            >

              {/* CARD */}
              <div
                className={`
                  w-full md:w-[46%] pl-24 md:pl-0
                  ${isEven
                    ? 'md:pr-6'
                    : 'md:order-2 md:pl-6'
                  }
                  text-left
                `}
              >

                <div
                  className="
                    bg-[#0A1128]/90 backdrop-blur-xl
                    border border-white/10
                    rounded-[2.2rem]
                    hover:border-[var(--color-brand)]/50
                    transition-all duration-500
                    group-hover:-translate-y-2
                    relative overflow-hidden flex flex-col
                    shadow-[0_15px_60px_rgba(0,0,0,0.45)]
                    hover:shadow-[0_20px_80px_rgba(234,179,8,0.12)]
                  "
                >

                  {/* Image */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0 border-b border-white/10">

                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700"
                      unoptimized
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/20 to-transparent" />

                    {/* Icon */}
                    <div
                      className={`
                        absolute bottom-4
                        ${isEven
                          ? 'md:right-6 left-6 md:left-auto'
                          : 'left-6'
                        }
                        w-14 h-14 rounded-2xl
                        bg-black/60 backdrop-blur-md
                        border border-[var(--color-brand)]/30
                        text-[var(--color-brand)]
                        flex items-center justify-center
                        shadow-[0_0_30px_rgba(234,179,8,0.15)]
                      `}
                    >

                      <Icon size={26} />

                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-9 relative">

                    <h3
                      className="
                        text-2xl font-display font-black italic uppercase
                        text-white mb-4 tracking-wide
                        group-hover:text-[var(--color-brand)]
                        transition-colors duration-300 relative z-10
                        text-left
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        text-gray-400 leading-relaxed font-medium
                        relative z-10 text-[15px]
                        text-left
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>

              {/* DESKTOP NODE */}
              <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 w-16 h-16 bg-gradient-to-br from-[#0A1128] to-[#111827] group-hover:from-[var(--color-brand)] group-hover:to-[#ca8a04] rounded-full -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_40px_-5px_var(--color-brand)] hidden md:flex border-[4px] border-[#050B14] transition-all duration-500 group-hover:scale-110">

                <span className="font-display italic font-black text-white group-hover:text-black text-3xl transition-colors duration-500">
                  {step.id}
                </span>

              </div>

              {/* MOBILE NODE */}
              <div className="absolute left-10 md:hidden top-[7rem] w-14 h-14 bg-gradient-to-br from-[#0A1128] to-[#111827] group-hover:from-[var(--color-brand)] group-hover:to-[#ca8a04] rounded-2xl -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_25px_-5px_var(--color-brand)] border-[3px] border-[#0A1128] transition-all duration-500 group-hover:scale-110">

                <span className="font-display italic font-black text-white group-hover:text-black text-2xl transition-colors duration-500">
                  {step.id}
                </span>

              </div>

              {/* Spacer */}
              <div
                className={`
                  w-full md:w-[46%]
                  hidden md:block
                  ${isEven ? 'md:order-2' : ''}
                `}
              />

            </ScrollReveal>

          );
        })}

      </div>

    </div>
  );
}