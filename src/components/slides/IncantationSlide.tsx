import React from 'react';
import { motion } from 'motion/react';
import { MicOff, Mic, Settings2, AlertTriangle } from 'lucide-react';

export default function IncantationSlide() {
  const outcomes = [
    {
      icon: <MicOff className="w-8 h-8" />,
      title: "Silent Cast",
      condition: "No Incantation",
      desc: "Normal execution. Core combat remains fluid and unaffected.",
      color: "text-white/80",
      border: "border-blue-500/20",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Perfect Resonance",
      condition: "Correct Incantation",
      desc: "Improved potency, lower vitae cost, increased speed, or unique modifier applied.",
      color: "text-blue-400 glow-blue",
      border: "border-blue-500/40",
      pulse: "bg-blue-500/10"
    },
    {
      icon: <Settings2 className="w-8 h-8" />,
      title: "Fractured Pronunciation",
      condition: "Partial Incantation",
      desc: "Provides a small, sometimes unstable bonus. Magic recognizes intent.",
      color: "text-orange-400",
      border: "border-orange-500/40",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Dissonance",
      condition: "Wrong Incantation",
      desc: " Harmless fizzle or default cast. Never punishes the player outright.",
      color: "text-red-400",
      border: "border-red-500/40",
    }
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center max-w-2xl border-b border-blue-500/20 pb-4"
      >
        <h2 className="display text-4xl text-blue-400 tracking-[0.3em] glow-blue mb-4">
          Incantation Lexicon
        </h2>
        <p className="text-white/60 text-lg serif italic">
          Voice is a <strong className="text-blue-400">modifier</strong>, not a requirement. It adds depth for those who fully immerse themselves, but never gates core progression.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {outcomes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
            className={`p-6 rounded-sm panel-blue ${item.border} flex items-start gap-5 relative overflow-hidden`}
          >
            {/* Background subtle animated pulse for the 'Perfect' one */}
            {item.pulse && (
               <motion.div 
                 animate={{ opacity: [0.1, 0.3, 0.1] }}
                 transition={{ repeat: Infinity, duration: 3 }}
                 className={`absolute inset-0 ${item.pulse} pointer-events-none`}
               />
            )}

            <div className={`p-4 rounded-sm bg-black/40 ${item.color} border border-blue-500/20 shrink-0 relative z-10`}>
              {item.icon}
            </div>
            
            <div className="relative z-10">
              <h3 className={`display text-xl mb-1 ${item.color}`}>{item.title}</h3>
              <p className="text-[10px] uppercase font-mono text-white/40 tracking-widest mb-2 border-b border-blue-500/20 pb-1">
                [ {item.condition} ]
              </p>
              <p className="text-white/70 text-[13px] leading-relaxed serif italic">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
