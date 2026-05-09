import React from 'react';
import { motion } from 'motion/react';
import { Focus, Eye, Target, Wind } from 'lucide-react';

export default function SceneScout() {
  const tools = [
    { icon: <Focus />, name: "Eagle Eye", desc: "Stabilized distant lens" },
    { icon: <Target />, name: "Weakpoint Mark", desc: "Reveal armor gaps" },
    { icon: <Eye />, name: "Watchpoint", desc: "Party-visible route mark" },
    { icon: <Wind />, name: "Wind Read", desc: "Predict drift & weather" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-emerald-400 mb-4 tracking-[0.2em] glow-emerald"
      >
        Scout Role
      </motion.h2>
      <p className="text-white/50 serif italic mb-12">Shaping the battlefield outside raw damage</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {tools.map((tool, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.2, duration: 0.5 }}
             className="bg-black/40 border border-emerald-500/20 rounded-sm p-6 flex items-center gap-6 hover:border-emerald-500/50 transition-colors group"
           >
              <div className="p-4 bg-emerald-900/30 border border-emerald-500/30 rounded-full text-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-shadow">
                {tool.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="display text-xl text-white mb-1">{tool.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/70">{tool.desc}</p>
              </div>
           </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-[9px] font-mono uppercase tracking-widest text-white/40 border border-white/10 px-4 py-2 rounded-sm bg-black/40">
        VR Rule: Preserve peripheral grounding. No full-screen zoom.
      </div>
    </div>
  );
}
