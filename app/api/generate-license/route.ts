import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

// Simple in-memory store for license keys (in production, use a database)
// This is used for quick validation. The source of truth is the external API.
const licenseStore = new Map<string, {
    licenseKey: string;
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
    userType: string;
    createdAt: Date;
}>();

const LICENSE_API_URL = process.env.LICENSE_API_URL || process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3002';
const LMS_API_URL = process.env.LMS_API_BACKEND_URL || process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3001';

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

export async function POST(request: NextRequest) {
    try {
        // Check authentication
        // const auth = checkAuth(request);
        // if (!auth.authenticated) {
        //     return NextResponse.json(
        //         { success: false, message: "Authentication required" },
        //         { status: 401 }
        //     );
        // }

        const data = await request.json();
        const { email, password, firstName, lastName, user_type, subscriptionType, lmsEnabled, typeOfFms } = data;

        // Transform typeOfFms from Enum to Array for backend
        let typeOfFmsArray: string[] = [];
        if (typeOfFms === "BOTH") {
            typeOfFmsArray = ["both"];
        } else if (typeOfFms === "HONEYWELL") {
            typeOfFmsArray = ["honeywell"];
        } else if (typeOfFms === "THALES") {
            typeOfFmsArray = ["thales"];
        } else {
            // Default to thales if not provided or unknown
            typeOfFmsArray = ["thales"];
        }

        // Validation
        if (!email || !firstName || !lastName) {
            return NextResponse.json(
                { success: false, message: "Email, first name, and last name are required" },
                { status: 400 }
            );
        }

        if (lmsEnabled && !password) {
            return NextResponse.json(
                { success: false, message: "Password is required for LMS integrated account creation" },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email address" },
                { status: 400 }
            );
        }

        // Call external license API
        let response;

        if (lmsEnabled) {
            console.log("LMS Enabled: Routing to Direct Creation API in Payments Service");
            response = await fetch(`${LICENSE_API_URL}/api/licenses/create-direct`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    user_type: user_type || 'paid-user',
                    subscriptionType: subscriptionType || 'monthly',
                    typeOfFms: typeOfFmsArray,
                }),
            });
        } else {
            console.log("Standard License Generation");
            response = await fetch(`${LICENSE_API_URL}/api/licenses/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    firstName,
                    lastName,
                    user_type: user_type || 'temp',
                    subscriptionType: subscriptionType || 'monthly',
                    lmsEnabled: false,
                    typeOfFms: typeOfFmsArray,
                }),
            });
        }
        console.log(response.ok);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("License API error:", errorData);
            return NextResponse.json(
                {
                    success: false,
                    message: errorData.message || "Failed to generate license key from external API",
                },
                { status: response.status }
            );
        }

        const result = await response.json();

        if (!result.success || !result.data) {
            return NextResponse.json(
                {
                    success: false,
                    message: result.message || "Failed to generate license key",
                },
                { status: 500 }
            );
        }

        const { licenseKey, user, license } = result.data;

        // Store license key locally for quick validation
        licenseStore.set(licenseKey, {
            licenseKey,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user.userId || user.user_id,
            userType: user.user_type,
            createdAt: new Date(result.timestamp || new Date()),
        });

        return NextResponse.json({
            success: true,
            licenseKey,
            message: result.message || "License key generated successfully",
            data: {
                licenseKey,
                user: {
                    userId: user.userId || user.user_id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    user_type: user.user_type,
                },
                license: license ? {
                    plan: license.plan,
                    expiresAt: license.expiresAt,
                    subscriptionType: license.subscriptionType || null,
                } : null,
            },
        });
    } catch (error: any) {
        console.error("License generation error:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to generate license key",
            },
            { status: 500 }
        );
    }
}

// GET endpoint to validate license key
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const licenseKey = searchParams.get("key");

        if (!licenseKey) {
            return NextResponse.json(
                { success: false, message: "License key is required" },
                { status: 400 }
            );
        }

        const licenseData = licenseStore.get(licenseKey);

        if (!licenseData) {
            return NextResponse.json(
                { success: false, message: "Invalid license key" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            valid: true,
            licenseData: {
                licenseKey: licenseData.licenseKey,
                email: licenseData.email,
                firstName: licenseData.firstName,
                lastName: licenseData.lastName,
                userId: licenseData.userId,
                userType: licenseData.userType,
                createdAt: licenseData.createdAt.toISOString(),
            },
        });
    } catch (error: any) {
        console.error("License validation error:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to validate license key",
            },
            { status: 500 }
        );
    }
}
