"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-40 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="next-card p-12 md:p-24 relative overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                                    Let's <span className="text-gradient">Connect</span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                    Ready to bring your vision to life? I'm currently available for elite engineering projects.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <a href="mailto:aftab@itvexo.com" className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <span className="text-xl font-bold">aftab@itvexo.com</span>
                                </a>
                                <a href="tel:+919732351545" className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <MessageSquare size={24} />
                                    </div>
                                    <span className="text-xl font-bold">+91 97323 51545</span>
                                </a>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Name" className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-blue-500 rounded-2xl px-6 py-4 outline-none transition-all font-semibold" />
                                <input type="email" placeholder="Email" className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-blue-500 rounded-2xl px-6 py-4 outline-none transition-all font-semibold" />
                            </div>
                            <textarea rows={4} placeholder="Your project vision..." className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-blue-500 rounded-2xl px-6 py-4 outline-none transition-all font-semibold resize-none" />
                            <button className="btn-premium w-full justify-center">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="mt-40 border-t border-slate-200 dark:border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">I</div>
                        <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">© 2026 ITVEXO / Aftab SK</span>
                    </div>
                    <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default ContactSection;
