"use client";

import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./Theme-Toggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-6 w-full z-50 flex justify-center px-6">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="glass px-10 py-5 rounded-[2rem] flex items-center justify-between w-full max-w-7xl relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="flex items-center gap-6 relative z-10 transition-all duration-700">
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-black dark:text-white tracking-[0.6em] uppercase leading-none hover:text-indigo-500 transition-colors cursor-default select-none font-outfit">
                            ITVEXO
                        </span>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="h-[1px] w-5 bg-indigo-500/50" />
                            <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.4em] opacity-80 group-hover:opacity-100 transition-opacity font-inter">
                                Founded by <span className="text-indigo-500/50">Aftab SK</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 relative z-10 bg-white/5 dark:bg-black/5 px-8 py-3 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-md">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 relative group/link"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-500 group-hover/link:w-full" />
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6 relative z-10 border-l border-white/10 pl-12 ml-4">
                    <ThemeToggle />
                    <div className="h-8 w-px bg-white/10 mx-2" />
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={18} /></a>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-blue-400 transition-colors p-2">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-x-6 top-32 glass rounded-3xl z-40 p-8 md:hidden border border-white/10 shadow-3xl"
                >
                    <div className="flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-bold text-white hover:text-blue-400 tracking-wider transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
