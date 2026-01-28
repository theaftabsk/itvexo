"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Star, ArrowLeft, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    mainImage: string;
    liveLink?: string;
    githubLink?: string;
    featured: boolean;
    order: number;
    createdAt: string;
}

export default function AdminProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch("/api/projects");
            if (response.ok) {
                const data = await response.json();
                setProjects(data);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setProjects(projects.filter((p) => p.id !== id));
            } else {
                alert("Failed to delete project");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("Failed to delete project");
        }
    };

    const toggleFeatured = async (id: string, currentFeatured: boolean) => {
        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ featured: !currentFeatured }),
            });

            if (response.ok) {
                setProjects(
                    projects.map((p) =>
                        p.id === id ? { ...p, featured: !currentFeatured } : p
                    )
                );
            }
        } catch (error) {
            console.error("Toggle featured error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-black dark:to-indigo-950">
            {/* Navbar */}
            <nav className="glass border-b border-black/5 dark:border-white/5 sticky top-0 z-50 backdrop-blur-3xl">
                <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                    <Link href="/admin/dashboard" className="flex items-center gap-3 group">
                        <ArrowLeft size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors" />
                        <span className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors font-inter">
                            Back to Dashboard
                        </span>
                    </Link>
                    <Link
                        href="/admin/projects/new"
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-2xl font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-inter"
                    >
                        <Plus size={18} />
                        New Project
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-6xl font-black text-black dark:text-white tracking-tighter mb-4 font-outfit">
                        Manage <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-16 font-inter">
                        Your elite portfolio collection
                    </p>

                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent"></div>
                            <p className="mt-6 text-slate-500 font-bold uppercase tracking-wider font-inter">Loading...</p>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="glass p-20 rounded-[4rem] text-center border border-black/5 dark:border-white/5">
                            <div className="w-24 h-24 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Eye size={48} className="text-indigo-500" />
                            </div>
                            <h3 className="text-3xl font-black text-black dark:text-white mb-4 font-outfit">No Projects Yet</h3>
                            <p className="text-slate-500 mb-8 font-inter">Start building your empire by creating your first project</p>
                            <Link
                                href="/admin/projects/new"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-3xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 font-inter"
                            >
                                <Plus size={20} />
                                Create First Project
                            </Link>
                        </div>
                    ) : (
                        <div className="grid gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass p-8 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-all group"
                                >
                                    <div className="flex gap-8">
                                        {/* Project Image */}
                                        <div className="w-48 h-32 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex-shrink-0">
                                            {project.mainImage ? (
                                                <img
                                                    src={project.mainImage}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        {/* Project Info */}
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-2xl font-black text-black dark:text-white font-outfit">
                                                            {project.title}
                                                        </h3>
                                                        {project.featured && (
                                                            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 font-inter">
                                                                <Star size={12} className="fill-current" />
                                                                Featured
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-3 font-inter">
                                                        {project.category}
                                                    </p>
                                                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2 font-inter">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => toggleFeatured(project.id, project.featured)}
                                                    className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-inter ${project.featured
                                                            ? "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/30"
                                                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                                                        }`}
                                                >
                                                    <Star size={14} className={project.featured ? "fill-current" : ""} />
                                                    {project.featured ? "Featured" : "Set Featured"}
                                                </button>

                                                <Link
                                                    href={`/admin/projects/${project.id}/edit`}
                                                    className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-inter"
                                                >
                                                    <Edit size={14} />
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => handleDelete(project.id, project.title)}
                                                    className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-inter"
                                                >
                                                    <Trash2 size={14} />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
