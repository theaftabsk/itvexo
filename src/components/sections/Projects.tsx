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
        <section id="projects" className="py-40 px-6 relative">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        A showcase of premium digital experiences crafted with precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="next-card group h-full flex flex-col"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-1 gap-6">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.category}</span>
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map((tech: string, i: number) => (
                                        <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" className="flex-1 py-3 text-center bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                            Live
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" className="flex-1 py-3 text-center border-2 border-slate-200 dark:border-white/10 text-foreground rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                            Code
                                        </a>
                                    )}
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
