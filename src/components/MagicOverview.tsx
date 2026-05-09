import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Play, Pause, RotateCcw } from 'lucide-react';

// Subcomponents for the animation scenes
import SceneIdentity from './magic-overview/SceneIdentity';
import SceneEquipment from './magic-overview/SceneEquipment';
import SceneStudy from './magic-overview/SceneStudy';
import SceneCombat from './magic-overview/SceneCombat';
import SceneIncantation from './magic-overview/SceneIncantation';
import SceneClosing from './magic-overview/SceneClosing';

const SCENE_DURATIONS = [
  6000,  // 0: Identity
  8000,  // 1: Equipment
  10000, // 2: Study 
  12000, // 3: Combat
  8000,  // 4: Incantations
  8000   // 5: Closing
];

export default function MagicOverview({ onBack }: { onBack: () => void }) {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const currentDuration = SCENE_DURATIONS[stage];
      
      if (elapsed >= currentDuration) {
        if (stage < SCENE_DURATIONS.length - 1) {
          setStage(s => s + 1);
          startTime = timestamp;
          setProgress(0);
        } else {
          setIsPlaying(false);
          setProgress(100);
        }
      } else {
        setProgress((elapsed / currentDuration) * 100);
      }
      
      if (isPlaying && stage < SCENE_DURATIONS.length) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isPlaying) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying, stage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onBack();
      if (e.key === ' ') setIsPlaying(p => !p);
      if (e.key === 'ArrowRight' && stage < SCENE_DURATIONS.length - 1) {
        setStage(s => s + 1);
        setProgress(0);
      }
      if (e.key === 'ArrowLeft' && stage > 0) {
        setStage(s => s - 1);
        setProgress(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, onBack]);

  const restart = () => {
    setStage(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const renderScene = () => {
    switch (stage) {
      case 0: return <SceneIdentity />;
      case 1: return <SceneEquipment />;
      case 2: return <SceneStudy />;
      case 3: return <SceneCombat />;
      case 4: return <SceneIncantation />;
      case 5: return <SceneClosing />;
      default: return null;
    }
  };

  const sceneTitles = [
    "Identity", "Equipment", "Study Casting", "Combat Casting", "Incantations", "Summary"
  ];

  return (
    <div className="w-full h-screen bg-arcane relative flex flex-col items-center justify-center overflow-hidden font-sans text-white">
      
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 z-50 p-2 rounded-sm border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase backdrop-blur-sm bg-black/40 cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" /> Hub
      </button>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-6xl h-full flex items-center justify-center p-8 pt-16 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Playback Controls & Timeline */}
      <div className="absolute bottom-8 w-full max-w-4xl px-8 z-50 flex flex-col gap-4">
        <div className="flex justify-between text-[10px] font-mono tracking-widest uppercase text-blue-300">
           <span>{sceneTitles[stage]}</span>
           <span>00:0{stage + 1} / 00:06</span>
        </div>
        
        <div className="flex gap-2 w-full">
          {sceneTitles.map((_, i) => (
            <div 
              key={i} 
              className="h-1 bg-white/10 rounded-full overflow-hidden relative cursor-pointer flex-1"
              onClick={() => { setStage(i); setProgress(0); setIsPlaying(true); }}
            >
              <div 
                className={`absolute top-0 left-0 h-full ${i === stage ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]' : i < stage ? 'bg-blue-400/40' : 'bg-transparent'}`}
                style={{ width: i === stage ? `${progress}%` : i < stage ? '100%' : '0%' }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2">
          <button 
             onClick={restart}
             className="p-2 text-white/50 hover:text-white transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className="p-2 text-white hover:text-blue-400 transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
}
