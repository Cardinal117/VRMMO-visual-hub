import React, { useState } from 'react';
import Hub from './components/Hub';
import MagicPresentation from './components/MagicPresentation';
import MagicOverview from './components/MagicOverview';
import MeleePresentation from './components/MeleePresentation';
import RangedPresentation from './components/RangedPresentation';

export default function App() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  if (selectedExperience === 'magic') {
    return <MagicPresentation onBack={() => setSelectedExperience(null)} />;
  }

  if (selectedExperience === 'magic-overview') {
    return <MagicOverview onBack={() => setSelectedExperience(null)} />;
  }

  if (selectedExperience === 'melee') {
    return <MeleePresentation onBack={() => setSelectedExperience(null)} />;
  }

  if (selectedExperience === 'ranged') {
    return <RangedPresentation onBack={() => setSelectedExperience(null)} />;
  }

  return <Hub onSelect={setSelectedExperience} />;
}
