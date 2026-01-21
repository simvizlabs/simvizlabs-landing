import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

const LICENSE_API_URL = process.env.LICENSE_API_URL || process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3002';

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

function checkAuth(request: NextRequest): { authenticated: boolean; email?: string } {
    const token = request.cookies.get("auth-token")?.value;
    
    if (!token) {
        return { authenticated: false };
    }

    const result = verifyToken(token);
    
    if (!result || !result.valid) {
        return { authenticated: false };
    }

    return { authenticated: true, email: result.email };
}

export async function GET(request: NextRequest) {
    try {
        // Check authentication
        // const auth = checkAuth(request);
        // if (!auth.authenticated) {
        //     return NextResponse.json(
        //         { success: false, message: "Authentication required" },
        //         { status: 401 }
        //     );
        // }

        // Get query parameters
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") || "1";
        const limit = searchParams.get("limit") || "50";
        const status = searchParams.get("status");

        // Build query string for external API
        const queryParams = new URLSearchParams();
        queryParams.set("page", page);
        queryParams.set("limit", limit);
        if (status) {
            queryParams.set("status", status);
        }

        // Call external license API
        const response = await fetch(`${LICENSE_API_URL}/api/licenses/temp-users?${queryParams.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("License API error:", errorData);
            return NextResponse.json(
                {
                    success: false,
                    message: errorData.message || "Failed to fetch temp users from external API",
                },
                { status: response.status }
            );
        }

        const result = await response.json();

        return NextResponse.json(result);
    } catch (error: any) {
        console.error("Temp users fetch error:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch temp users",
            },
            { status: 500 }
        );
    }
}
