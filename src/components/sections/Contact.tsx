"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-40 px-6 relative bg-mesh overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="glass p-12 md:p-24 rounded-[4rem] relative overflow-hidden neon-border">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

                    <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-6xl md:text-[8rem] font-black text-black dark:text-white leading-tight tracking-tighter uppercase italic"
                                >
                                    Start a <br /><span className="text-gradient hover:tracking-widest transition-all duration-1000">Dynasty</span>
                                </motion.h2>
                                <p className="text-slate-500 dark:text-slate-400 text-xl font-light leading-relaxed max-w-md tracking-widest uppercase italic border-l-2 border-indigo-500 pl-6 mt-8">
                                    Ready to build the future? Connect with <span className="text-indigo-500 font-black">Aftab SK</span> today.
                                </p>
                            </div>

                            <div className="space-y-10">
                                <a href="mailto:aftab@itvexo.com" className="group flex items-center gap-8">
                                    <div className="p-6 bg-indigo-500/5 dark:bg-white/5 rounded-3xl border border-indigo-500/10 group-hover:bg-indigo-600 transition-all duration-700 shadow-xl group-hover:shadow-indigo-500/20">
                                        <Mail size={32} className="text-indigo-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.4em] mb-2 font-inter">Direct Line</p>
                                        <p className="text-2xl font-black text-black dark:text-white tracking-tight font-outfit">aftab@itvexo.com</p>
                                    </div>
                                </a>

                                <a href="tel:+919732351545" target="_blank" className="group flex items-center gap-8">
                                    <div className="p-6 bg-cyan-500/5 dark:bg-white/5 rounded-3xl border border-cyan-500/10 group-hover:bg-cyan-500 transition-all duration-700 shadow-xl group-hover:shadow-cyan-500/20">
                                        <MessageSquare size={32} className="text-cyan-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.4em] mb-2 font-inter">Instant Connect</p>
                                        <p className="text-2xl font-black text-black dark:text-white tracking-tight font-outfit">+91-9732351545</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <form className="space-y-10 glass p-12 rounded-[3.5rem] border border-black/5 dark:border-white/5 shadow-2xl relative group">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] ml-2 font-inter">Identity</label>
                                <input type="text" className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl px-10 py-6 focus:outline-none focus:border-indigo-500/50 focus:bg-white dark:focus:bg-black/20 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit" placeholder="Your Name" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] ml-2 font-inter">Email Coordinates</label>
                                <input type="email" className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl px-10 py-6 focus:outline-none focus:border-indigo-500/50 focus:bg-white dark:focus:bg-black/20 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] ml-2 font-inter">Project Vision</label>
                                <textarea rows={4} className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl px-10 py-6 focus:outline-none focus:border-indigo-500/50 focus:bg-white dark:focus:bg-black/20 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight resize-none font-outfit" placeholder="Describe your vision..." />
                            </div>
                            <button className="w-full py-7 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] transition-all duration-700 flex items-center justify-center gap-4 shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 group font-inter">
                                Dispatch Message
                                <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700" />
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="mt-40 grid md:grid-cols-2 gap-10 items-center border-t border-black/5 dark:border-white/5 pt-12 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-2xl flex items-center justify-center font-black text-white text-xl font-outfit shadow-lg">I</div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black dark:text-white font-inter">© 2026 <span className="font-black">ITVEXO</span> Ecosystem / Aftab SK</p>
                    </div>
                    <div className="flex md:justify-end gap-8 text-[10px] font-bold uppercase tracking-[0.3em] font-inter">
                        <a href="#" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Privacy</a>
                        <a href="#" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Terms</a>
                        <a href="#" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Security</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default ContactSection;
