import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Play, Pause, RotateCcw } from 'lucide-react';
import ModuleMenu from './ModuleMenu';

import SceneIdentity from './melee-overview/SceneIdentity';
import SceneFlow from './melee-overview/SceneFlow';
import SceneProgression from './melee-overview/SceneProgression';
import SceneStances from './melee-overview/SceneStances';
import SceneWeapons from './melee-overview/SceneWeapons';
import SceneRecognition from './melee-overview/SceneRecognition';
import SceneCombat from './melee-overview/SceneCombat';
import SceneClosing from './melee-overview/SceneClosing';

const SCENE_DURATIONS = [
  5000,  // 0: Identity
  8000,  // 1: Core Flow
  8000,  // 2: Progression
  8000,  // 3: Stances
  8000,  // 4: Weapon Identity
  8000,  // 5: Recognition
  10000, // 6: Combat Example
  6000   // 7: Closing
];

const sceneTitles = [
  "Identity", "Core Flow", "Progression", "Stances", "Weapon Identity", "Recognition", "Combat Example", "Summary"
];

export default function MeleeOverview({ onBack }: { onBack: () => void }) {
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
      case 1: return <SceneFlow />;
      case 2: return <SceneProgression />;
      case 3: return <SceneStances />;
      case 4: return <SceneWeapons />;
      case 5: return <SceneRecognition />;
      case 6: return <SceneCombat />;
      case 7: return <SceneClosing />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-[100dvh] bg-arcane relative flex flex-col items-center justify-center overflow-hidden font-sans text-white">
      
      <button 
        onClick={onBack}
        className="absolute top-4 md:top-8 left-4 md:left-8 z-50 p-2 rounded-sm border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase backdrop-blur-sm bg-black/40 cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" /> Hub
      </button>

      <ModuleMenu type="melee" />

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-6xl h-full flex items-center justify-center px-4 md:p-8 pt-20 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center items-center h-full"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Playback Controls & Timeline */}
      <div className="absolute bottom-6 md:bottom-8 w-full max-w-4xl px-4 md:px-8 z-50 flex flex-col gap-4">
        <div className="flex justify-between text-[10px] font-mono tracking-widest uppercase text-gold">
           <span>{sceneTitles[stage]}</span>
           <span>00:0{stage + 1} / 00:0{SCENE_DURATIONS.length}</span>
        </div>
        
        <div className="flex gap-1 md:gap-2 w-full">
          {sceneTitles.map((_, i) => (
            <div 
              key={i} 
              className="h-1 bg-white/10 rounded-full overflow-hidden relative cursor-pointer flex-1"
              onClick={() => { setStage(i); setProgress(0); setIsPlaying(true); }}
            >
              <div 
                className={`absolute top-0 left-0 h-full ${i === stage ? 'bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]' : i < stage ? 'bg-gold/40' : 'bg-transparent'}`}
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
             className="p-2 text-white hover:text-gold transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
}
