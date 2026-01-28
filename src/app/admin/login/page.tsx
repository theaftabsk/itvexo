"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, User, ArrowRight } from "lucide-react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Login failed");
                setLoading(false);
                return;
            }

            // Redirect to dashboard on success
            router.push("/admin/dashboard");
        } catch (err) {
            setError("Network error. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-black dark:to-indigo-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
            <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass max-w-xl w-full mx-4 p-16 rounded-[4rem] border border-black/5 dark:border-white/10 shadow-2xl relative z-10"
            >
                {/* Logo & Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-3xl mb-8 shadow-xl">
                        <Lock size={40} className="text-white" />
                    </div>
                    <h1 className="text-6xl font-black text-black dark:text-white tracking-tighter mb-4 font-outfit">
                        ITVEXO
                    </h1>
                    <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-500 font-inter">
                        Admin Command Center
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold text-center"
                    >
                        {error}
                    </motion.div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                            Username
                        </label>
                        <div className="relative">
                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-[2rem] focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit text-lg"
                                placeholder="admin"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-[2rem] focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit text-lg"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-6 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center gap-4 shadow-[0_20px_60px_-10px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group font-inter"
                    >
                        {loading ? "Authorizing..." : "Enter Command Center"}
                        {!loading && <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />}
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-12 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 font-inter">
                    Secured by <span className="text-indigo-500">ITVEXO</span> Infrastructure
                </p>
            </motion.div>
        </div>
    );
}
