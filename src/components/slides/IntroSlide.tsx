import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function IntroSlide() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 blur-3xl bg-gold/10 rounded-full scale-150" />
        <Sparkles className="w-16 h-16 text-gold mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
        <h1 className="display text-6xl md:text-8xl tracking-widest text-glow mb-4 text-gold">
          AETHERIUM
        </h1>
        <h2 className="text-xl md:text-2xl text-gold/80 tracking-[0.2em] uppercase font-light serif">
          Arcane Combat System
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-2xl space-y-6 text-lg text-white/70 serif italic"
      >
        <p>
          Magic is not just pointing and shooting. It is born of <strong className="text-gold">ritual, selection, and delivery</strong>.
        </p>
        <p>
          Our VR casting system emphasizes feeling the weight of ancient knowledge, shaping arcane energy with physical motions, and balancing preparation with real-time combat reflexes.
        </p>
      </motion.div>

      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 1 }}
         className="pt-8"
      >
        <p className="text-sm tracking-[0.3em] font-mono text-white/40 uppercase">
          Prepare your grimoire
        </p>
      </motion.div>
    </div>
  );
}
