"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FolderKanban, Plus, Settings, LogOut, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    const router = useRouter();
    const [stats, setStats] = useState({
        totalProjects: 0,
        featuredProjects: 0,
    });

    useEffect(() => {
        // Fetch project stats
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const response = await fetch("/api/projects");
            if (response.ok) {
                const projects = await response.json();
                setStats({
                    totalProjects: projects.length,
                    featuredProjects: projects.filter((p: any) => p.featured).length,
                });
            }
        } catch (error) {
            console.error("Failed to fetch stats:", error);
        }
    };

    const handleLogout = async () => {
        // Clear cookie and redirect
        document.cookie = "admin-token=; Max-Age=0; path=/;";
        router.push("/admin/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-black dark:to-indigo-950">
            {/* Admin Navbar */}
            <nav className="glass border-b border-black/5 dark:border-white/5 sticky top-0 z-50 backdrop-blur-3xl">
                <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-2xl flex items-center justify-center font-black text-white text-xl font-outfit shadow-lg">
                            I
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-black dark:text-white tracking-tight font-outfit">
                                ITVEXO
                            </h1>
                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 font-inter">
                                Command Center
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-3 glass hover:bg-red-500/10 hover:border-red-500/30 border border-black/5 dark:border-white/5 rounded-2xl text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-red-500 transition-all flex items-center gap-3 font-inter"
                    >
                        <LogOut size={16} />
                        Exit
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-6xl font-black text-black dark:text-white tracking-tighter mb-4 font-outfit">
                        Command <span className="text-gradient">Dashboard</span>
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-16 font-inter">
                        Manage your elite digital portfolio
                    </p>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass p-10 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-indigo-500/10 rounded-2xl">
                                    <FolderKanban size={28} className="text-indigo-500" />
                                </div>
                                <BarChart3 size={24} className="text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-3 font-inter">
                                Total Projects
                            </p>
                            <h3 className="text-6xl font-black text-black dark:text-white tracking-tighter font-outfit">
                                {stats.totalProjects}
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass p-10 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                                    <Settings size={28} className="text-cyan-500" />
                                </div>
                                <BarChart3 size={24} className="text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-3 font-inter">
                                Featured
                            </p>
                            <h3 className="text-6xl font-black text-black dark:text-white tracking-tighter font-outfit">
                                {stats.featuredProjects}
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass p-10 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-purple-500/10 rounded-2xl">
                                    <BarChart3 size={28} className="text-purple-500" />
                                </div>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-3 font-inter">
                                Status
                            </p>
                            <h3 className="text-2xl font-black text-black dark:text-white tracking-tight font-outfit">
                                ONLINE
                            </h3>
                        </motion.div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-black text-black dark:text-white tracking-tighter font-outfit">
                            Quick Actions
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Link
                                href="/admin/projects/new"
                                className="group glass p-10 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all flex items-center justify-between"
                            >
                                <div>
                                    <h4 className="text-2xl font-black text-black dark:text-white mb-2 font-outfit group-hover:text-indigo-500 transition-colors">
                                        New Project
                                    </h4>
                                    <p className="text-sm text-slate-500 font-inter">Create a new portfolio entry</p>
                                </div>
                                <div className="p-5 bg-indigo-500/10 group-hover:bg-indigo-500 rounded-3xl transition-all">
                                    <Plus size={32} className="text-indigo-500 group-hover:text-white transition-colors" />
                                </div>
                            </Link>

                            <Link
                                href="/admin/projects"
                                className="group glass p-10 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all flex items-center justify-between"
                            >
                                <div>
                                    <h4 className="text-2xl font-black text-black dark:text-white mb-2 font-outfit group-hover:text-cyan-500 transition-colors">
                                        Manage Projects
                                    </h4>
                                    <p className="text-sm text-slate-500 font-inter">Edit or delete existing projects</p>
                                </div>
                                <div className="p-5 bg-cyan-500/10 group-hover:bg-cyan-500 rounded-3xl transition-all">
                                    <FolderKanban size={32} className="text-cyan-500 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
