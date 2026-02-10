import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Palette, PlusCircle, Loader2 } from 'lucide-react';

const categoryConfigs = {
    stack: {
        title: 'Stack',
        color: 'blue',
        icon: Cpu,
        accent: 'text-blue-400',
        border: 'border-blue-500/20',
        bg: 'from-blue-500/10 to-transparent'
    },
    functions: {
        title: 'Funciones',
        color: 'green',
        icon: Zap,
        accent: 'text-green-400',
        border: 'border-green-500/20',
        bg: 'from-green-500/10 to-transparent'
    },
    styles: {
        title: 'Estilos',
        color: 'pink',
        icon: Palette,
        accent: 'text-pink-400',
        border: 'border-pink-500/20',
        bg: 'from-pink-500/10 to-transparent'
    },
    complementos: {
        title: 'Complementos',
        color: 'orange',
        icon: PlusCircle,
        accent: 'text-orange-400',
        border: 'border-orange-500/20',
        bg: 'from-orange-500/10 to-transparent'
    }
};

const VibeCard = ({ category, globalIdea }) => {
    const [status, setStatus] = useState('empty'); // empty | loading | generated
    const [data, setData] = useState(null);

    const config = categoryConfigs[category];
    const Icon = config.icon;

    const handleGenerate = () => {
        if (!globalIdea) return alert('¡Ingresa una idea primero!');

        setStatus('loading');

        // Simulate IA Generation based on the global idea
        setTimeout(() => {
            const mockData = generateMockContent(category, globalIdea);
            setData(mockData);
            setStatus('generated');
        }, 2000);
    };

    const generateMockContent = (cat, idea) => {
        const seed = idea.toLowerCase();

        if (cat === 'stack') {
            return ['React v18', 'Tailwind CSS v4', 'Framer Motion', 'Node.js', 'PostgreSQL'];
        }
        if (cat === 'functions') {
            return ['Gestión de inventario en tiempo real', 'Notificaciones inteligentes de riego', 'Dashboard de analíticas', 'Pasarela de pagos stripe'];
        }
        if (cat === 'styles') {
            return {
                colors: ['#0f172a', '#3b82f6', '#10b981'],
                vibe: 'Premium Dark Minimalist'
            };
        }
        if (cat === 'complementos') {
            return 'Estrategia de marketing SEO enfocada en sostenibilidad y escalabilidad automática en AWS.';
        }
        return null;
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`glass-card rounded-3xl p-6 min-h-[300px] flex flex-col relative overflow-hidden group ${config.border}`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${config.bg} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

            <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className={`p-2 rounded-xl bg-white/5 ${config.accent}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white/90">{config.title}</h3>
            </div>

            <div className="flex-grow flex flex-col justify-center relative z-10">
                <AnimatePresence mode="wait">
                    {status === 'empty' && (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-center"
                        >
                            <button
                                onClick={handleGenerate}
                                className="btn-generate px-6 py-3 rounded-full text-white font-medium flex items-center space-x-2"
                            >
                                <span>Generar con IA</span>
                            </button>
                        </motion.div>
                    )}

                    {status === 'loading' && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center space-y-4"
                        >
                            <div className="relative">
                                <div className={`absolute -inset-4 rounded-full blur-xl opacity-20 bg-${config.color}-400 animate-pulse`} />
                                <Loader2 className={`w-12 h-12 ${config.accent} animate-spin`} />
                            </div>
                            <p className="text-slate-400 text-sm animate-pulse">Analizando idea...</p>
                        </motion.div>
                    )}

                    {status === 'generated' && (
                        <motion.div
                            key="generated"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-4"
                        >
                            {category === 'stack' && (
                                <div className="flex flex-wrap gap-2">
                                    {data.map((item, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {category === 'functions' && (
                                <ul className="space-y-2">
                                    {data.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-2 text-sm text-slate-300">
                                            <div className="w-1 h-1 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {category === 'styles' && (
                                <div className="space-y-4">
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{data.vibe}</p>
                                    <div className="flex space-x-3">
                                        {data.colors.map((c, i) => (
                                            <div key={i} className="group relative">
                                                <div className="w-10 h-10 rounded-full border border-white/10 shadow-lg" style={{ backgroundColor: c }} />
                                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity uppercase">{c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {category === 'complementos' && (
                                <p className="text-sm text-slate-300 leading-relaxed italic">
                                    "{data}"
                                </p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default VibeCard;
