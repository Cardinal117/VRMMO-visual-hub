import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, BookMarked, Swords, Crown } from 'lucide-react';

export default function MeleeProgressionSlide() {
  const stages = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-gold" />,
      title: "Novice",
      access: "4 One-Handed Stances",
      role: "Simple early combat, easy recognition, basic attacks, and skill releases."
    },
    {
      icon: <BookMarked className="w-8 h-8 text-gold" />,
      title: "Adept",
      access: "4 Two-Handed Stances",
      role: "Stronger committed skills, heavier attacks, more deliberate positioning."
    },
    {
      icon: <Swords className="w-8 h-8 text-gold" />,
      title: "Expert",
      access: "Stance Chains",
      role: "Combos, player expression, chaining multiple techniques together seamlessly."
    },
    {
      icon: <Crown className="w-8 h-8 text-gold" />,
      title: "Master",
      access: "Cancels, Counters & Signature Arts",
      role: "High mastery ceiling, advanced timing, reactive combat, personal fighting style."
    }
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center border-b border-gold/20 pb-4"
      >
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-2">
          Mastery Ladder
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Progression through physical skill expression
        </p>
      </motion.div>

      <div className="relative flex flex-col gap-8">
        {/* Connecting line */}
        <div className="absolute left-[39px] top-8 bottom-8 w-px bg-gold/20" />

        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 + 0.3, duration: 0.6, ease: "easeOut" }}
            className={`relative flex items-center gap-8 ${i === stages.length - 1 ? 'z-10' : ''}`}
          >
            <div className="relative z-10 w-20 h-20 rounded-full panel-gold border border-gold/40 flex items-center justify-center bg-black/60 shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)] group hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              {stage.icon}
            </div>

            <div className="panel-gold p-6 rounded-sm flex-1 group hover:border-gold/40 transition-all border border-gold/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 pb-2 border-b border-gold/10">
                <h3 className="display text-2xl text-gold group-hover:glow-amber transition-all">{stage.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold bg-white/5 px-2 py-1 rounded-sm mt-2 md:mt-0 inline-block w-fit">
                  {stage.access}
                </span>
              </div>
              <p className="text-white/80 leading-relaxed text-[13px] serif italic">
                {stage.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
