const PROJECTS = [
    {
        id: "1",
        title: "Eco-SaaS Platform",
        category: "Web Application",
        description: "Enterprise SaaS for sustainability tracking with real-time 3D data visualization.",
        mainImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        screenshots: [],
        techStack: ["Next.js", "Three.js", "MySQL", "Prisma"],
        featured: true,
        order: 1,
    },
    {
        id: "2",
        title: "Vexo Dashboard",
        category: "Admin System",
        description: "Highly customized admin panel with complex data management and task automation.",
        mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        screenshots: [],
        techStack: ["React", "PHP", "Laravel", "Tailwind"],
        featured: true,
        order: 2,
    },
    {
        id: "3",
        title: "AI Chat Interface",
        category: "SaaS Component",
        description: "Next-gen AI conversational UI with smooth framer-motion animations.",
        mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        screenshots: [],
        techStack: ["React", "OpenAI", "Lucide", "Node"],
        featured: true,
        order: 3,
    },
];

const SKILLS = [
    {
        name: "Frontend Development",
        icon: "layout",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    },
    {
        name: "Backend Core",
        icon: "server",
        items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"],
    },
    {
        name: "SaaS & Systems",
        icon: "layers",
        items: ["Authentication", "Stripe Integration", "Real-time Data", "System Design"],
    },
    {
        name: "Database Design",
        icon: "database",
        items: ["Prisma", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        name: "Security & DevOps",
        icon: "shield",
        items: ["JWT", "OAuth", "Docker", "CI/CD", "AWS", "Vercel"],
    },
    {
        name: "Clean Architecture",
        icon: "code",
        items: ["SOLID Principles", "Design Patterns", "Clean Code", "Unit Testing"],
    },
];

export async function getProjects() {
    return PROJECTS;
}

export async function getSkills() {
    return SKILLS;
}
