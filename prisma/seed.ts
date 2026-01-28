import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("Seeding started...");

    // Clear existing data
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();

    // Seed Projects
    const projects = [
        {
            title: "Eco-SaaS Platform",
            category: "Web Application",
            description: "Enterprise SaaS for sustainability tracking with real-time 3D data visualization.",
            mainImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            screenshots: JSON.stringify([]),
            techStack: JSON.stringify(["Next.js", "Three.js", "MySQL", "Prisma"]),
        },
        {
            title: "Vexo Dashboard",
            category: "Admin System",
            description: "Highly customized admin panel with complex data management and task automation.",
            mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            screenshots: JSON.stringify([]),
            techStack: JSON.stringify(["React", "PHP", "Laravel", "Tailwind"]),
        },
        {
            title: "AI Chat Interface",
            category: "SaaS Component",
            description: "Next-gen AI conversational UI with smooth framer-motion animations.",
            mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            screenshots: JSON.stringify([]),
            techStack: JSON.stringify(["React", "OpenAI", "Lucide", "Node"]),
        },
    ];

    for (const p of projects) {
        await prisma.project.create({ data: p });
    }

    // Seed Skills
    const skills = [
        { name: "Frontend Development", icon: "layout", category: "Frontend" },
        { name: "Backend Core", icon: "server", category: "Backend" },
        { name: "SaaS & Systems", icon: "layers", category: "Fullstack" },
        { name: "Database Design", icon: "database", category: "Database" },
        { name: "Security & DevOps", icon: "shield", category: "DevOps" },
        { name: "Clean Architecture", icon: "code", category: "Architecture" },
    ];

    for (const s of skills) {
        await prisma.skill.create({ data: s });
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
