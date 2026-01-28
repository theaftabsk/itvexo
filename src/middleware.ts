import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect admin routes (except login page)
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const token = request.cookies.get('admin-token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        // Verify token
        const payload = await verifyToken(token);

        if (!payload) {
            // Invalid token, clear cookie and redirect
            const response = NextResponse.redirect(new URL('/admin/login', request.url));
            response.cookies.delete('admin-token');
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
