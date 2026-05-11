import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Home, Archive, MoreVertical, X } from 'lucide-react';

type ModuleMenuProps = {
  type: 'magic' | 'melee' | 'ranged';
};

export default function ModuleMenu({ type }: ModuleMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const docUrl = `https://mistakestudios.com/doc/${type}`;
  const homeUrl = "https://mistakestudios.com/";
  const archiveUrl = "https://mistakestudios.com/archive";

  const c = {
    magic: {
      btnColor: 'text-cyan-400',
      btnBorder: 'border-cyan-500/40 hover:border-cyan-300',
      btnRadius: 'rounded-sm',
      menuBg: 'bg-black/90 backdrop-blur-md',
      menuBorder: 'border-cyan-500/40',
      menuRadius: 'rounded-sm',
      shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]',
      itemHover: 'hover:bg-cyan-900/40 hover:text-cyan-300 rounded-sm',
    },
    melee: {
      btnColor: 'text-gold',
      btnBorder: 'border-y-2 border-x-4 border-gold/40 hover:border-gold/80',
      btnRadius: 'rounded-sm',
      menuBg: 'bg-[#111] backdrop-blur-none',
      menuBorder: 'border-[#444] hover:border-gold/40 transition-colors duration-500 border-y-2 border-x-4',
      menuRadius: 'rounded-sm',
      shadow: 'shadow-[0_0_30px_rgba(212,175,55,0.15)]',
      itemHover: 'hover:bg-gold/10 hover:text-white border border-transparent hover:border-gold/30 rounded-sm',
    },
    ranged: {
      btnColor: 'text-emerald-400',
      btnBorder: 'border-emerald-500/40 hover:border-emerald-300',
      btnRadius: 'rounded-full',
      menuBg: 'bg-[#0a1a15]/95 backdrop-blur-md',
      menuBorder: 'border-emerald-500/40',
      menuRadius: 'rounded-xl',
      shadow: 'shadow-[0_0_20px_rgba(52,211,153,0.3)]',
      itemHover: 'hover:bg-emerald-900/40 hover:text-emerald-300 rounded-lg',
    }
  }[type];

  // Specific components for each animation
  const MagicAnim = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       <motion.div 
         initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.6, ease: 'easeOut' }}
         className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-cyan-900/30 to-transparent opacity-60"
       />
       {isOpen && Array.from({ length: 6 }).map((_, i) => (
         <motion.div
           key={i}
           className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"
           initial={{ y: '150%', x: 20 + Math.random() * 200, opacity: 0 }}
           animate={{ y: '-20px', opacity: [0, 1, 0] }}
           transition={{ duration: 1.5 + Math.random(), delay: i * 0.15, ease: 'easeOut' }}
         />
       ))}
    </div>
  );

  const MeleeAnim = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       <motion.div 
         initial={{ x: '-100%', opacity: 1 }} animate={{ x: '200%', opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}
         className="absolute top-0 bottom-0 w-32 bg-white/10 -skew-x-[30deg]"
       />
       {isOpen && (
         <>
           <motion.div 
             initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.4, delay: 0.1 }}
             className="absolute top-[40%] -translate-y-1/2 left-0 h-px bg-gradient-to-r from-red-600 via-orange-500 to-white shadow-[0_0_10px_rgba(212,175,55,1)]"
           />
           {Array.from({ length: 4 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-0.5 bg-gold rounded-full shadow-[0_0_5px_rgba(255,200,0,1)]"
               initial={{ top: '40%', left: '50%', opacity: 1, scale: 1 }}
               animate={{ 
                 top: `calc(40% + ${(Math.random() - 0.5) * 80}px)`, 
                 left: `calc(50% + ${(Math.random() - 0.5) * 120}px)`, 
                 opacity: 0, scale: 0 
               }}
               transition={{ duration: 0.6 + Math.random() * 0.3, delay: 0.2, ease: "easeOut" }}
             />
           ))}
         </>
       )}
    </div>
  );

  const RangedAnim = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       {isOpen && (
          <>
            <motion.div 
              initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            />
            {Array.from({ length: 3 }).map((_, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: 0 }} animate={{ x: 300 }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                 className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-300 rounded-full shadow-[0_0_5px_rgba(110,231,183,1)]"
               />
            ))}
            <motion.div 
              initial={{ x: -20, opacity: 0 }} animate={{ x: 300, opacity: [0, 1, 0] }} transition={{ duration: 1.2, ease: "linear" }}
              className="absolute left-0 top-0 bottom-0 w-12 border-x border-emerald-400/30 bg-emerald-400/10"
            />
          </>
       )}
    </div>
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-50 flex flex-col items-end" ref={menuRef}>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className={`p-2 bg-black/60 border ${c.btnBorder} ${c.btnColor} ${c.btnRadius} flex items-center justify-center cursor-pointer shadow-lg z-50`}
          >
             <MoreVertical className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.9, y: -10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: -10, filter: 'blur(4px)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`relative w-[280px] ${c.menuBg} border ${c.menuBorder} ${c.shadow} ${c.menuRadius} overflow-hidden mt-1`}
          >
            {type === 'magic' && <MagicAnim />}
            {type === 'melee' && <MeleeAnim />}
            {type === 'ranged' && <RangedAnim />}

            <div className={`relative z-10 p-3 border-b ${type === 'melee' ? 'border-[#333]' : 'border-white/10'} flex justify-between items-center`}>
              <span className={`font-mono text-[10px] tracking-widest uppercase ${c.btnColor}`}>
                Navigation
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className={`p-1 rounded-sm text-white/50 hover:text-white transition-colors cursor-pointer`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col p-2 gap-1 relative z-10">
               <a href={docUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 font-mono text-[10px] uppercase tracking-widest text-white/70 transition-all ${c.itemHover}`}>
                 <Book className="w-4 h-4 opacity-70" />
                 Read Full Design Doc
               </a>
               <a href={archiveUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 font-mono text-[10px] uppercase tracking-widest text-white/70 transition-all ${c.itemHover}`}>
                 <Archive className="w-4 h-4 opacity-70" />
                 View Combat Archive
               </a>
               <a href={homeUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 font-mono text-[10px] uppercase tracking-widest text-white/70 transition-all ${c.itemHover}`}>
                 <Home className="w-4 h-4 opacity-70" />
                 Back to Mistake Studios
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
