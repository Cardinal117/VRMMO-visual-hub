import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import IntroSlide from './slides/IntroSlide';
import EquipmentSlide from './slides/EquipmentSlide';
import StudyCastingSlide from './slides/StudyCastingSlide';
import CombatCastingSlide from './slides/CombatCastingSlide';
import IncantationSlide from './slides/IncantationSlide';
import OutroSlide from './slides/OutroSlide';

const slides = [
  IntroSlide,
  EquipmentSlide,
  StudyCastingSlide,
  CombatCastingSlide,
  IncantationSlide,
  OutroSlide,
];

export default function MagicPresentation({ onBack }: { onBack: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    if (currentSlide + newDirection >= 0 && currentSlide + newDirection < slides.length) {
      setDirection(newDirection);
      setCurrentSlide((prev) => prev + newDirection);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, onBack]);

  const CurrentComponent = slides[currentSlide];

  return (
    <div className="w-full h-[100dvh] bg-arcane relative flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50 p-2 rounded-sm border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase backdrop-blur-sm bg-black/40 cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" /> Hub
      </button>

      {/* Background Magic Particles/Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        {/* Simple floating embers */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold blur-[2px]"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + Math.random() * 200,
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 2 + 1
            }}
            animate={{ 
              y: -100,
              x: `calc(${Math.random() * 100 - 50}vw)`,
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10 
            }}
            style={{ width: 3, height: 3 }}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-7xl h-full flex items-center justify-center p-4 sm:p-8 pt-16 pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex items-center justify-center p-2 sm:p-4 max-h-[100dvh] overflow-y-auto overflow-x-hidden custom-scrollbar"
          >
            <div className="scale-[0.8] sm:scale-100 origin-center w-full max-w-full flex items-center justify-center">
              <CurrentComponent onHub={onBack} onRestart={() => {setDirection(-1); setCurrentSlide(0);}} />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex flex-col sm:flex-row gap-4 justify-between items-center px-4 sm:px-12 z-20 pointer-events-none">
        <div className="flex-1 w-full flex justify-center sm:justify-start">
          <div className="flex gap-1 sm:gap-2 pointer-events-auto flex-wrap justify-center">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => {
                  setDirection(i > currentSlide ? 1 : -1);
                  setCurrentSlide(i);
                }}
                className={`w-6 sm:w-12 h-1 rounded-full transition-all duration-500 flex-shrink-0 ${i === currentSlide ? 'bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 pointer-events-auto ml-0 sm:ml-12">
          <button 
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0}
            className="p-2 sm:p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={() => paginate(1)}
            disabled={currentSlide === slides.length - 1}
            className="p-2 sm:p-3 rounded-full border border-gold/30 text-gold hover:text-gold hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
