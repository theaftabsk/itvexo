"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Save, X } from "lucide-react";

export default function NewProject() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        mainImage: "",
        liveLink: "",
        githubLink: "",
        techStack: "",
        featured: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const techStackArray = formData.techStack
                .split(",")
                .map((s) => s.trim())
                .filter((s) => s);

            const response = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    techStack: techStackArray,
                }),
            });

            if (response.ok) {
                router.push("/admin/projects");
            } else {
                alert("Failed to create project");
                setLoading(false);
            }
        } catch (error) {
            console.error("Submit error:", error);
            alert("Failed to create project");
            setLoading(false);
        }
    };

    const updateField = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-black dark:to-indigo-950">
            {/* Navbar */}
            <nav className="glass border-b border-black/5 dark:border-white/5 sticky top-0 z-50 backdrop-blur-3xl">
                <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                    <Link href="/admin/projects" className="flex items-center gap-3 group">
                        <ArrowLeft size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors" />
                        <span className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors font-inter">
                            Back to Projects
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-6xl font-black text-black dark:text-white tracking-tighter mb-4 font-outfit">
                        New <span className="text-gradient">Project</span>
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-16 font-inter">
                        Add a new masterpiece to your portfolio
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* Title & Category */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                                    Project Title *
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => updateField("title", e.target.value)}
                                    className="w-full px-8 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit text-lg"
                                    placeholder="ITVEXO Platform"
                                    required
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                                    Category *
                                </label>
                                <input
                                    type="text"
                                    value={formData.category}
                                    onChange={(e) => updateField("category", e.target.value)}
                                    className="w-full px-8 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit text-lg"
                                    placeholder="SaaS, Web App, CRM, etc."
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                                Description *
                            </label>
                            <textarea
                                rows={6}
                                value={formData.description}
                                onChange={(e) => updateField("description", e.target.value)}
                                className="w-full px-8 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight resize-none font-outfit text-lg leading-relaxed"
                                placeholder="A comprehensive description of your elite project..."
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                                Main Image URL
                            </label>
                            <input
                                type="text"
                                value={formData.mainImage}
                                onChange={(e) => updateField("mainImage", e.target.value)}
                                className="w-full px-8 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit"
                                placeholder="/projects/my-project.png"
                            />
                            {formData.mainImage && (
                                <div className="mt-4 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 max-w-md">
                                    <img src={formData.mainImage} alt="Preview" className="w-full" />
                                </div>
                            )}
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                                    Live URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.liveLink}
                                    onChange={(e) => updateField("liveLink", e.target.value)}
                                    className="w-full px-8 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit"
                                    placeholder="https://project-live.com"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.githubLink}
                                    onChange={(e) => updateField("githubLink", e.target.value)}
                                    className="w-full px-8 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit"
                                    placeholder="https://github.com/user/repo"
                                />
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4 font-inter">
                                Tech Stack (comma-separated)
                            </label>
                            <input
                                type="text"
                                value={formData.techStack}
                                onChange={(e) => updateField("techStack", e.target.value)}
                                className="w-full px-8 py-5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl focus:outline-none focus:border-indigo-500/50 transition-all text-black dark:text-white placeholder:text-slate-400 font-bold tracking-tight font-outfit"
                                placeholder="Next.js, React, Three.js, Prisma, MySQL"
                            />
                        </div>

                        {/* Featured Toggle */}
                        <div className="flex items-center gap-4 glass p-6 rounded-3xl border border-black/5 dark:border-white/5">
                            <input
                                type="checkbox"
                                id="featured"
                                checked={formData.featured}
                                onChange={(e) => updateField("featured", e.target.checked)}
                                className="w-6 h-6 rounded bg-black/5 dark:bg-white/5 border-2 border-indigo-500 checked:bg-indigo-500 cursor-pointer"
                            />
                            <label htmlFor="featured" className="text-lg font-black text-black dark:text-white cursor-pointer font-outfit">
                                Mark as Featured Project
                            </label>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-6 pt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 py-6 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center gap-4 shadow-[0_20px_60px_-10px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group font-inter"
                            >
                                {loading ? "Creating..." : "Create Project"}
                                {!loading && <Save size={20} className="group-hover:scale-110 transition-transform" />}
                            </button>

                            <Link
                                href="/admin/projects"
                                className="px-12 py-6 glass hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.4em] transition-all border border-black/5 dark:border-white/10 flex items-center gap-4 hover:scale-105 active:scale-95 font-inter"
                            >
                                <X size={20} />
                                Cancel
                            </Link>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
