import React, { useState } from 'react';
import IdeaInput from './components/IdeaInput';
import VibeCard from './components/VibeCard';
import { LayoutGrid, Info } from 'lucide-react';

function App() {
  const [globalIdea, setGlobalIdea] = useState('');

  return (
    <div className="min-h-screen pb-20 px-6 pt-12 max-w-7xl mx-auto selection:bg-blue-500/30">
      {/* Header Section */}
      <header className="text-center mb-16 relative">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-help">
          <Info className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] uppercase font-bold tracking-tighter text-slate-400 transition-colors group-hover:text-white">v1.2.0 Experimental Smart Planning</span>
        </div>
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 tracking-tight">
          Smart Vision Board
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
          Define tu visión y deja que nuestra inteligencia generativa estructure los pilares de tu próximo gran proyecto.
        </p>
      </header>

      {/* Main Input */}
      <IdeaInput value={globalIdea} onChange={setGlobalIdea} />

      {/* Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <VibeCard category="stack" globalIdea={globalIdea} />
        <VibeCard category="functions" globalIdea={globalIdea} />
        <VibeCard category="styles" globalIdea={globalIdea} />
        <VibeCard category="complementos" globalIdea={globalIdea} />
      </div>

      {/* Footer Branding */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card px-6 py-3 rounded-2xl flex items-center space-x-4 border-white/5">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#030712] flex items-center justify-center text-[10px] font-bold">AI</div>
            <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#030712] flex items-center justify-center text-[10px] font-bold">SD</div>
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">
            Powered by AntiGravity <span className="text-blue-500">Core</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
