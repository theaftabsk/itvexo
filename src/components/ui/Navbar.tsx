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
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="glass px-8 py-3 rounded-full flex items-center justify-between w-full max-w-4xl shadow-xl border border-white/10"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
                        I
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground dark:text-white">
                        ITVEXO
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="ml-4 pl-4 border-l border-white/10 flex items-center gap-4">
                        <ThemeToggle />
                        <a href="https://github.com/theaftabsk" target="_blank" className="text-slate-500 hover:text-blue-500 transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed inset-x-6 top-24 glass rounded-3xl z-40 p-6 md:hidden border border-white/10"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-semibold text-center py-2 text-foreground hover:text-blue-500 transition-colors"
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
