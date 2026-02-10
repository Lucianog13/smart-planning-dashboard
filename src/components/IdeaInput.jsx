import React from 'react';
import { Sparkles } from 'lucide-react';

const IdeaInput = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000 group-focus-within:duration-200"></div>
      <div className="relative flex items-center bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
        <Sparkles className="w-6 h-6 text-blue-400 mr-4" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="¿Qué quieres construir hoy? Ejemplo: 'App de gestión de viveros'"
          className="w-full bg-transparent border-none outline-none text-xl text-white placeholder-slate-500 font-light tracking-wide"
        />
        <div className="flex items-center space-x-2">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold bg-white/5 px-2 py-1 rounded">Idea Global</span>
        </div>
      </div>
    </div>
  );
};

export default IdeaInput;
