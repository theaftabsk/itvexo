"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/actions";

const ProjectsSection = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="py-40 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <section id="projects" className="py-40 px-6 relative bg-mesh">
            <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]"
                        >
                            Portfolio
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black tracking-tighter text-black dark:text-white"
                        >
                            Featured <span className="text-gradient">Creations</span>
                        </motion.h2>
                    </div>
                    <button className="px-10 py-5 glass font-bold uppercase tracking-widest rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 border border-white/10 flex items-center gap-3">
                        View All Projects <ArrowUpRight size={18} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-card group relative overflow-hidden h-[550px] rounded-3xl p-0 flex flex-col justify-between"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out brightness-50 group-hover:brightness-[0.4]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech: string, i: number) => (
                                            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-slate-200 text-sm font-light leading-relaxed mb-6 line-clamp-2 italic">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-4">
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" className="flex-1 py-3 bg-white text-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-indigo-50 transition-colors">
                                                Live
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-indigo-500 transition-colors border border-white/10">
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-2">{project.category}</p>
                                        <h3 className="text-2xl font-black text-black dark:text-white tracking-tight italic group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-2xl group-hover:bg-indigo-500 group-hover:text-white transition-all duration-700">
                                        <ArrowUpRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
