"use server";

import prisma from "./prisma";

export async function getProjects() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: "desc" },
        });

        return projects.map((p) => ({
            ...p,
            techStack: JSON.parse(p.techStack as string),
            screenshots: JSON.parse(p.screenshots as string),
        }));
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getSkills() {
    try {
        const skills = await prisma.skill.findMany();

        // Group skills by category for the UI
        const grouped = skills.reduce((acc: any, skill) => {
            const category = skill.category || "General";
            if (!acc[category]) {
                acc[category] = {
                    name: category,
                    icon: skill.icon,
                    items: [],
                };
            }
            acc[category].items.push(skill.name);
            return acc;
        }, {});

        return Object.values(grouped);
    } catch (error) {
        console.error("Error fetching skills:", error);
        return [];
    }
}
