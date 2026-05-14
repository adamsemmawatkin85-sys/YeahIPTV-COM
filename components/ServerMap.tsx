import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

export default function ServerMap() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050B14]">
      {/* Background glow for map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[var(--color-brand)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <ScrollReveal className="text-center mb-16 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-6 inline-block">198+ COUNTRIES COVERED</span>
          <h2 className="text-center font-display font-black italic uppercase text-4xl md:text-5xl mb-6 tracking-tight text-white">
            Total <span className='text-[var(--color-brand)]'>2k</span> Server in 198 Countries.
          </h2>
          <p className="text-gray-400 font-medium text-lg leading-relaxed">
            These speed excellent. It&apos;s a fast connection safety Internet leading speeds across its network.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="w-full relative aspect-[2/1] max-w-5xl opacity-80 hover:opacity-100 transition-opacity duration-700">
           {/* We use an abstract glowing map from unsplash here as our map representation */}
           <Image src="/img/map.png" alt="Global Server Map" fill className="object-contain mix-blend-screen" unoptimized />
        </ScrollReveal>
      </div>
    </section>
  );
}
