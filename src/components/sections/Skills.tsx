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
        <section id="skills" className="py-40 px-6 relative bg-mesh">
            <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]"
                    >
                        Expertise
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black dark:text-white">
                        Technical <span className="text-gradient">Mastery</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-10 group relative"
                        >
                            <div className="p-6 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 mb-8 group-hover:bg-indigo-600 transition-all duration-700 shadow-xl group-hover:shadow-indigo-500/20">
                                {(() => {
                                    const Icon = IconMap[group.icon as keyof typeof IconMap] || Layout;
                                    return <Icon size={32} className="text-indigo-500 group-hover:text-white transition-colors" />;
                                })()}
                            </div>

                            <h3 className="text-2xl font-black mb-6 text-black dark:text-white uppercase italic tracking-tighter group-hover:translate-x-2 transition-transform duration-700">{group.name}</h3>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item: string) => (
                                    <span key={item} className="px-4 py-1.5 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-black/5 dark:border-white/5 group-hover:border-indigo-500/30 group-hover:text-indigo-500 transition-all duration-700">
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
