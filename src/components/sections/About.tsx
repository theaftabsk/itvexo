"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section id="about" className="py-40 px-6 relative bg-mesh overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-12"
                >
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-9xl font-black text-black dark:text-white leading-tight tracking-tighter uppercase italic font-outfit">
                            Digital <br /><span className="text-gradient">Architect</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-xl font-light leading-relaxed max-w-2xl tracking-wide font-inter">
                            I am <span className="text-indigo-600 dark:text-indigo-400 font-black">Aftab SK</span>, founder of <span className="text-indigo-600 dark:text-indigo-400 font-bold">ITVEXO</span> and a full stack digital architect.
                            <br /><br />
                            I engineer elite digital infrastructures that combine <span className="text-black dark:text-white font-semibold">performance</span>, <span className="text-black dark:text-white font-semibold">scalability</span>, and <span className="text-cyan-500 font-bold">immersive 3D experiences</span> to define the next generation of web platforms.
                            <br /><br />
                            Specialized in building <span className="text-indigo-500 font-bold">SaaS platforms</span>, <span className="text-indigo-500 font-bold">school management systems</span>, <span className="text-indigo-500 font-bold">CRM solutions</span>, and <span className="text-cyan-500 font-bold">business automation</span> tools that drive real-world impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-12 border-t border-black/5 dark:border-white/5 pt-16">
                        <div className="space-y-4">
                            <h3 className="text-6xl font-black text-black dark:text-white tracking-tighter font-outfit">05<span className="text-indigo-500 text-3xl">+</span></h3>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] font-inter">Years of Craft</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-6xl font-black text-black dark:text-white tracking-tighter font-outfit">50<span className="text-cyan-500 text-3xl">+</span></h3>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] font-inter">Real Deployments</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-6xl font-black text-black dark:text-white tracking-tighter font-outfit">100<span className="text-purple-500 text-3xl">%</span></h3>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] font-inter">Client Satisfaction</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative aspect-square max-w-lg mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-[120px] rounded-full animate-pulse" />
                    <div className="glass h-full w-full rounded-[3rem] overflow-hidden flex items-center justify-center p-1 relative group neon-border">
                        <div className="absolute inset-1 bg-slate-950 rounded-[2.8rem] z-0" />
                        <div className="relative z-10 text-center space-y-4">
                            <div className="text-[12rem] font-black text-white/[0.03] select-none leading-none">A</div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="px-6 py-3 glass rounded-2xl border border-blue-500/30 group-hover:scale-110 transition-transform">
                                    <span className="text-blue-400 font-mono text-lg tracking-widest uppercase italic">itvexo_core.dll</span>
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
