"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Layers, Layout, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { getSkills } from "@/lib/actions";

const IconMap = {
    layout: Layout,
    server: Server,
    layers: Layers,
    database: Database,
    shield: Shield,
    code: Code,
};

const SkillsSection = () => {
    const [skillGroups, setSkillGroups] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            const data = await getSkills();
            setSkillGroups(data);
            setLoading(false);
        };
        fetchSkills();
    }, []);

    if (loading) return null;

    return (
        <section id="skills" className="py-40 px-6 relative">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                        Technical <span className="text-gradient">Stacks</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Expertise built on years of experience with modern web technologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="next-card p-10 group"
                        >
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                                {(() => {
                                    const Icon = IconMap[group.icon as keyof typeof IconMap] || Layout;
                                    return <Icon size={28} className="text-blue-600 transition-colors" />;
                                })()}
                            </div>

                            <h3 className="text-xl font-bold mb-6">{group.name}</h3>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item: string) => (
                                    <span key={item} className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-xl text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
