import React from 'react';
import { motion } from 'motion/react';
import { Activity, Focus, Waves, Zap } from 'lucide-react';

export default function MeleeRecognitionSlide() {
  const feedbacks = [
    { icon: <Focus className="w-6 h-6 text-blue-400" />, title: "Stance Recognized", detail: "Subtle weapon glow & confirmation pulse" },
    { icon: <Activity className="w-6 h-6 text-gold" />, title: "Charge Built", detail: "Growing aura & sound cue implication" },
    { icon: <Waves className="w-6 h-6 text-orange-400" />, title: "Haptics", detail: "Vibration on stance lock & release" },
    { icon: <Zap className="w-6 h-6 text-white" />, title: "Skill Flash", detail: "Visual flash matching the skill type upon release" }
  ];

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center border-b border-gold/20 pb-4"
      >
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-2">
          System Recognition
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Forgiving Intent Detection & Clear Feedback
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between">
        
        {/* Left Side: Recognition Visualization */}
        <div className="flex-1 w-full h-[450px] relative flex items-center justify-center panel-gold border border-gold/30 rounded-sm overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
           
           <div className="relative z-10 flex flex-col items-center">
              {/* Head Zone */}
              <motion.div 
                 animate={{ borderColor: ['rgba(212,175,55,0.2)', 'rgba(212,175,55,0.8)', 'rgba(212,175,55,0.2)'] }}
                 transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                 className="w-24 h-24 border-2 border-dashed rounded-full mb-4 flex items-center justify-center bg-black/40"
              >
                <span className="font-mono text-[8px] text-gold/50 uppercase tracking-widest">Head Zone</span>
              </motion.div>

              {/* Chest / Arms Zone */}
              <div className="flex gap-16 items-center">
                <motion.div 
                   animate={{ borderColor: ['rgba(212,175,55,0.2)', 'rgba(212,175,55,0.8)', 'rgba(212,175,55,0.2)'] }}
                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                   className="w-16 h-16 border-2 border-dashed rounded-full flex items-center justify-center bg-black/40"
                >
                  <span className="font-mono text-[8px] text-gold/50">L Hand</span>
                </motion.div>
                
                <div className="w-32 h-40 border border-gold/20 flex items-center justify-center bg-black/40">
                  <span className="font-mono text-[8px] text-gold/50 uppercase tracking-widest">Chest Zone</span>
                </div>

                <motion.div 
                   animate={{ borderColor: ['rgba(212,175,55,0.2)', 'rgba(212,175,55,0.8)', 'rgba(212,175,55,0.2)'] }}
                   transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                   className="w-16 h-16 border-2 border-dashed rounded-full flex items-center justify-center bg-black/40"
                >
                  <span className="font-mono text-[8px] text-gold/50">R Hand</span>
                </motion.div>
              </div>

              {/* Hip Zone */}
              <div className="w-48 h-16 border border-gold/20 mt-4 flex items-center justify-center bg-black/40">
                 <span className="font-mono text-[8px] text-gold/50 uppercase tracking-widest">Hip Zone</span>
              </div>
           </div>

           {/* Animated Release Velocity Trail */}
           <motion.div
             initial={{ top: '20%', left: '70%', opacity: 0 }}
             animate={{ top: '80%', left: '30%', opacity: [0, 1, 0] }}
             transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
             className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rotate-45 blur-sm"
           />
        </div>

        {/* Right Side: Feedback Description */}
        <div className="flex-1 flex flex-col gap-8">
           <div className="bg-black/40 border border-gold/20 p-6 rounded-sm">
             <h3 className="display text-xl text-gold mb-3">Broad Zone Detection</h3>
             <p className="text-white/70 serif italic text-[14px]">
               Recognition is forgiving. The system does not require frame-perfect poses. It detects weapon position relative to broad body zones (Head, Chest, Hips, Hands), grip state, and release velocity.
             </p>
           </div>

           <div className="grid grid-cols-1 gap-4">
             <h3 className="display text-sm text-gold/60 border-b border-gold/20 pb-2">Feedback Loop</h3>
             {feedbacks.map((fb, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.2 + 0.5 }}
                 className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/5"
               >
                 <div className="p-2 bg-black/40 rounded-sm">
                   {fb.icon}
                 </div>
                 <div>
                   <h4 className="display text-sm text-white/90">{fb.title}</h4>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-white/50">{fb.detail}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
