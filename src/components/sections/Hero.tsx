"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-mesh">
            <div className="max-w-4xl text-center space-y-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20"
                >
                    Elite Full-Stack Architect
                </motion.div>

                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-9xl font-extrabold tracking-tight"
                    >
                        Design <br />
                        <span className="text-gradient">Innovate</span> Build
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Aftab SK — Crafting world-class digital experiences for high-growth agencies and innovative teams at <span className="font-bold text-foreground">ITVEXO</span>.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-6 pt-8"
                >
                    <a href="#projects" className="btn-premium">
                        View Projects <ArrowRight size={20} />
                    </a>
                    <button className="px-8 py-4 rounded-2xl font-bold border-2 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                        Download CV <Download size={20} />
                    </button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
