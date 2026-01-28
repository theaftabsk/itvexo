"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section id="about" className="py-40 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-10"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tight">
                            Crafting the <br /><span className="text-gradient">Future</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            I'm Aftab SK — Founder of <span className="text-blue-600">ITVEXO</span>. I specialize in building mission-critical digital infrastructures and immersive 3D web experiences that redefine how businesses operate at scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-4xl md:text-6xl font-black text-foreground">05<span className="text-blue-500">+</span></h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Years</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-6xl font-black text-foreground">50<span className="text-blue-500">+</span></h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Projets</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-6xl font-black text-foreground">100<span className="text-blue-500">%</span></h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Elite Qualiy</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative w-full"
                >
                    <div className="next-card p-2 aspect-square max-w-md mx-auto relative group">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[80px] -z-10 group-hover:bg-blue-500/30 transition-all duration-700" />
                        <div className="w-full h-full rounded-[2rem] bg-slate-900 flex items-center justify-center p-12 overflow-hidden border border-white/5 shadow-inner">
                            <span className="text-[15rem] font-bold text-white/5 select-none font-outfit">A</span>
                            <div className="absolute inset-x-0 bottom-12 flex justify-center">
                                <div className="px-6 py-2 glass rounded-full border border-blue-500/30">
                                    <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">system_ready.core</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
