import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || 'itvexo-ultra-secret-key-change-in-production'
);

export interface AdminPayload {
    id: string;
    username: string;
    email: string;
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

// Create JWT token
export async function createToken(payload: AdminPayload): Promise<string> {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(JWT_SECRET);
}

// Verify JWT token
export async function verifyToken(token: string): Promise<AdminPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as AdminPayload;
    } catch (error) {
        return null;
    }
}
