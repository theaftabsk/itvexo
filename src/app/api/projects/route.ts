import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all projects
export async function GET(request: NextRequest) {
    try {
        const projects = await prisma.project.findMany({
            orderBy: [
                { featured: 'desc' },
                { order: 'asc' },
                { createdAt: 'desc' }
            ]
        });

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return NextResponse.json(
            { error: 'Failed to fetch projects' },
            { status: 500 }
        );
    }
}

// POST create new project
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            title,
            category,
            description,
            mainImage,
            screenshots = [],
            liveLink,
            githubLink,
            techStack = [],
            featured = false,
            order = 0
        } = body;

        if (!title || !category || !description) {
            return NextResponse.json(
                { error: 'Title, category, and description are required' },
                { status: 400 }
            );
        }

        const project = await prisma.project.create({
            data: {
                title,
                category,
                description,
                mainImage: mainImage || '',
                screenshots: JSON.stringify(screenshots),
                liveLink,
                githubLink,
                techStack: JSON.stringify(techStack),
                featured,
                order
            }
        });

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        console.error('Failed to create project:', error);
        return NextResponse.json(
            { error: 'Failed to create project' },
            { status: 500 }
        );
    }
}
