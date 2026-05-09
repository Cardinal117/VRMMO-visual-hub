import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Wand, Gem, Shirt } from 'lucide-react';

export default function SceneEquipment() {
  const items = [
    { icon: <BookOpen className="w-6 h-6" />, title: "Grimoire / Spellbook", desc: "The core container of knowledge. Opens physically to reveal diagrams and symbols." },
    { icon: <Wand className="w-6 h-6" />, title: "Staff / Wand", desc: "The delivery and shaping tool. Connects to the selected symbol to aim and stabilize the release." },
    { icon: <Gem className="w-6 h-6" />, title: "Spellstones", desc: "Modular magical powers. Glow when linked, acting as carried magical components." },
    { icon: <Shirt className="w-6 h-6" />, title: "Robes / Focus Items", desc: "Support gear providing Vitae efficiency, channel stability, and cooldown improvement." },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-blue-400 mb-12 tracking-[0.2em] glow-blue"
      >
        Arcane Equipment
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4, duration: 0.6 }}
            className="panel-blue bg-black/40 border border-blue-500/20 p-6 rounded-sm flex gap-6 items-start"
          >
             <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-sm text-blue-400 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
               {item.icon}
             </div>
             <div>
               <h3 className="display text-lg text-white mb-2">{item.title}</h3>
               <p className="text-white/60 serif italic text-[14px] leading-relaxed">{item.desc}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
