"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-12 h-12 flex items-center justify-center rounded-2xl glass hover:bg-white/10 transition-all border border-white/10 group overflow-hidden"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme === "dark" ? "dark" : "light"}
                    initial={{ y: 20, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className="text-white dark:text-blue-400"
                >
                    {theme === "dark" ? (
                        <Moon size={20} className="fill-current" />
                    ) : (
                        <Sun size={20} className="fill-current" />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
}
