import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Wand2, Gem, Shirt } from 'lucide-react';

export default function EquipmentSlide() {
  const equipments = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Grimoire",
      role: "Knowledge & Selection",
      desc: "Stores spell knowledge. Used for page selection and ritual casting."
    },
    {
      icon: <Wand2 className="w-8 h-8 text-blue-400" />,
      title: "Staff & Wand",
      role: "Delivery & Targeting",
      desc: "Channels the selected magic. Used for aiming, shaping, and precise delivery."
    },
    {
      icon: <Gem className="w-8 h-8 text-blue-400" />,
      title: "Spellstones",
      role: "Modular Power",
      desc: "Socketed gems providing modular magical abilities and series powers."
    },
    {
      icon: <Shirt className="w-8 h-8 text-blue-400" />,
      title: "Robes & Focus",
      role: "Efficiency & Channeling",
      desc: "Passive items regulating vitae efficiency, channel stability, and cooldowns."
    }
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center border-b border-blue-500/20 pb-4"
      >
        <h2 className="display text-4xl text-blue-400 tracking-[0.3em] glow-blue mb-2">
          The Arsenal
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Physical anchors for ethereal power
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {equipments.map((eq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-sm panel-blue p-8 group`}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="p-4 rounded-sm bg-black/40 border border-blue-500/40 text-white/80 group-hover:text-blue-400 transition-all duration-300">
                {eq.icon}
              </div>
              <div className="space-y-2">
                <h3 className="display text-xl text-blue-400">{eq.title}</h3>
                <p className="text-[10px] uppercase font-mono tracking-widest text-blue-400/60 font-bold border-b border-blue-500/20 pb-1">
                  {eq.role}
                </p>
                <p className="text-white/80 leading-relaxed text-[13px] pt-1 serif">
                  {eq.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
