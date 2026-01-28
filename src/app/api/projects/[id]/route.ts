import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET single project
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const project = await prisma.project.findUnique({
            where: { id: params.id }
        });

        if (!project) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error('Failed to fetch project:', error);
        return NextResponse.json(
            { error: 'Failed to fetch project' },
            { status: 500 }
        );
    }
}

// PUT update project
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();

        const updateData: any = {};

        if (body.title !== undefined) updateData.title = body.title;
        if (body.category !== undefined) updateData.category = body.category;
        if (body.description !== undefined) updateData.description = body.description;
        if (body.mainImage !== undefined) updateData.mainImage = body.mainImage;
        if (body.screenshots !== undefined) updateData.screenshots = JSON.stringify(body.screenshots);
        if (body.liveLink !== undefined) updateData.liveLink = body.liveLink;
        if (body.githubLink !== undefined) updateData.githubLink = body.githubLink;
        if (body.techStack !== undefined) updateData.techStack = JSON.stringify(body.techStack);
        if (body.featured !== undefined) updateData.featured = body.featured;
        if (body.order !== undefined) updateData.order = body.order;

        const project = await prisma.project.update({
            where: { id: params.id },
            data: updateData
        });

        return NextResponse.json(project);
    } catch (error) {
        console.error('Failed to update project:', error);
        return NextResponse.json(
            { error: 'Failed to update project' },
            { status: 500 }
        );
    }
}

// DELETE project
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.project.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete project:', error);
        return NextResponse.json(
            { error: 'Failed to delete project' },
            { status: 500 }
        );
    }
}
