"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-mesh">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

            <div className="max-w-7xl text-center space-y-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block px-10 py-4 rounded-full glass border border-indigo-500/30 mb-6 group hover:border-indigo-500/60 transition-all duration-1000"
                >
                    <span className="text-indigo-500 dark:text-indigo-400 text-[11px] font-black tracking-[0.9em] uppercase font-inter animate-glow-pulse">
                        Elite Digital Craftsmanship
                    </span>
                </motion.div>

                <div className="space-y-12">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-8xl md:text-[14rem] font-black text-black dark:text-white leading-[0.75] tracking-[-0.04em] uppercase italic select-none font-outfit drop-shadow-2xl"
                        style={{ textShadow: '0 0 80px rgba(99, 102, 241, 0.15)' }}
                    >
                        Aftab <br />
                        <span className="text-gradient hover:tracking-[0.15em] transition-all duration-1500 cursor-default inline-block animate-float-slow">
                            SK
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, delay: 0.6 }}
                        className="relative"
                    >
                        <p className="text-slate-500 dark:text-slate-400 text-xl md:text-3xl max-w-5xl mx-auto leading-relaxed font-light tracking-[0.3em] px-8 uppercase italic font-inter">
                            Transforming <span className="text-black dark:text-white font-black">Bold Visions</span> into
                            <span className="text-gradient font-black"> Digital Masterpieces</span>.
                            <br />
                            Specialized in <span className="text-indigo-600 dark:text-indigo-400 font-bold">Immersive 3D</span> &
                            <span className="text-cyan-500 font-bold"> Elite Engineering</span>
                        </p>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                    className="flex flex-wrap items-center justify-center gap-12 pt-12"
                >
                    <a
                        href="#projects"
                        className="group px-16 py-8 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-[3rem] font-black text-sm uppercase tracking-[0.5em] transition-all duration-1000 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.6)] flex items-center gap-6 hover:scale-110 hover:shadow-[0_35px_80px_-15px_rgba(79,70,229,0.8)] active:scale-95 font-inter relative overflow-hidden"
                    >
                        <span className="relative z-10">The Portfolio</span>
                        <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-700 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </a>

                    <button className="group px-16 py-8 glass hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white rounded-[3rem] font-black text-sm uppercase tracking-[0.5em] transition-all duration-1000 border-2 border-black/10 dark:border-white/10 hover:border-indigo-500 flex items-center justify-center gap-6 hover:scale-110 active:scale-95 font-inter relative overflow-hidden">
                        <span className="relative z-10">Dossier</span>
                        <Download size={24} className="group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-700 relative z-10" />
                    </button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-bold">Scroll to discover</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
