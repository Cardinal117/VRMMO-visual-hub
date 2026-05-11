import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Hub from './components/Hub';
import MagicPresentation from './components/MagicPresentation';
import MagicOverview from './components/MagicOverview';
import MeleePresentation from './components/MeleePresentation';
import MeleeOverview from './components/MeleeOverview';
import RangedPresentation from './components/RangedPresentation';
import RangedOverview from './components/RangedOverview';

function AppContent() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/magic/overview" element={<MagicOverview onBack={() => navigate('/')} />} />
      <Route path="/magic/showcase" element={<MagicPresentation onBack={() => navigate('/')} />} />
      <Route path="/melee/overview" element={<MeleeOverview onBack={() => navigate('/')} />} />
      <Route path="/melee/showcase" element={<MeleePresentation onBack={() => navigate('/')} />} />
      <Route path="/ranged/overview" element={<RangedOverview onBack={() => navigate('/')} />} />
      <Route path="/ranged/showcase" element={<RangedPresentation onBack={() => navigate('/')} />} />
      <Route path="*" element={<Hub />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

