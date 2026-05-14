"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ category = "movies" }) {
  // Define images based on category
  const getImages = () => {
    if (category === "movies") {
      return Array.from({ length: 16 }, (_, i) => 
        `/img/slider/movie_${String(i + 1).padStart(2, '0')}.jpg`
      );
    } else if (category === "series") {
      return Array.from({ length: 16 }, (_, i) => 
        `/img/slider/serie_${String(i + 1).padStart(2, '0')}.webp`
      );
    } else if (category === "sports") {
      return Array.from({ length: 15 }, (_, i) => 
        `/img/slider/sport_${String(i + 1).padStart(2, '0')}.jpg`
      );
    }
    return [];
  };

  const images = getImages();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl border border-[var(--color-brand-dark)] shadow-[0_0_30px_rgba(218,165,32,0.15)] group">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`YeahIPTV - ${category} slide`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-[var(--color-base)]/40 to-transparent" />
      
      <div className="absolute inset-x-8 bottom-12 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            key={`tag-${currentIndex}`}
            className="inline-block px-3 py-1 bg-[var(--color-brand)] text-black text-[10px] font-bold uppercase tracking-widest rounded-sm mb-3"
          >
            {category === "movies" ? "NOW SHOWING" : category === "series" ? "BINGE WATCH" : "LIVE MATCH"}
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            key={`title-${currentIndex}`} 
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white drop-shadow-lg"
          >
            {category === "movies" ? "BLOCKBUSTER" : category === "series" ? "TOP RATED" : "PREMIUM"} 
            <span className="text-[var(--color-brand)]">
              {category === "movies" ? " MOVIES" : category === "series" ? " SERIES" : " SPORTS"}
            </span>
          </motion.h3>
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-[var(--color-brand)] border border-[var(--color-brand)]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--color-brand)] hover:text-black hover:scale-110 z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-[var(--color-brand)] border border-[var(--color-brand)]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--color-brand)] hover:text-black hover:scale-110 z-20"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${currentIndex === idx ? "bg-[var(--color-brand)] w-8" : "bg-white/30 w-1.5"}`}
          />
        ))}
      </div>
    </div>
  );
}