import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

// In production, store credentials securely (environment variables, database, etc.)
// For now, using environment variables for admin credentials
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@simvizlabs.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

const SECRET = process.env.AUTH_SECRET || process.env.NEXT_PUBLIC_AUTH_SECRET || "your-secret-key-change-in-production";

function createToken(email: string): string {
    const payload = {
        email,
        timestamp: Date.now(),
        expires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    };
    const payloadString = JSON.stringify(payload);
    const signature = createHmac("sha256", SECRET).update(payloadString).digest("hex");
    return Buffer.from(`${payloadString}.${signature}`).toString("base64");
}

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: "Email and password are required" },
                { status: 400 }
            );
        }

        // Validate credentials
        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return NextResponse.json(
                { success: false, message: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Create token
        const token = createToken(email);

        // Create response with token in httpOnly cookie
        const response = NextResponse.json({
            success: true,
            message: "Login successful",
        });

        response.cookies.set("auth-token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24, // 24 hours
            path: "/",
        });

        return response;
    } catch (error: any) {
        console.error("Login error:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to login",
            },
            { status: 500 }
        );
    }
}
