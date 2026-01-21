import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

const SECRET = process.env.AUTH_SECRET || process.env.NEXT_PUBLIC_AUTH_SECRET || "your-secret-key-change-in-production";

function verifyToken(token: string): { email: string; valid: boolean } | null {
    try {
        const decoded = Buffer.from(token, "base64").toString("utf-8");
        const [payloadString, signature] = decoded.split(".");
        
        if (!payloadString || !signature) {
            return null;
        }

        // Verify signature
        const expectedSignature = createHmac("sha256", SECRET).update(payloadString).digest("hex");
        if (signature !== expectedSignature) {
            return null;
        }

        const payload = JSON.parse(payloadString);
        
        // Check expiration
        if (Date.now() > payload.expires) {
            return null;
        }

        return { email: payload.email, valid: true };
    } catch (error) {
        return null;
    }
}

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json(
                { success: false, authenticated: false, message: "No token provided" },
                { status: 401 }
            );
        }

        // Verify token
        const result = verifyToken(token);

        if (!result || !result.valid) {
            return NextResponse.json(
                {
                    success: false,
                    authenticated: false,
                    message: "Invalid or expired token",
                },
                { status: 401 }
            );
        }

        return NextResponse.json({
            success: true,
            authenticated: true,
            email: result.email,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                authenticated: false,
                message: "Invalid or expired token",
            },
            { status: 401 }
        );
    }
}
