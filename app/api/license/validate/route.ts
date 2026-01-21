import { NextRequest, NextResponse } from "next/server";

const LICENSE_API_URL = process.env.LICENSE_API_URL || process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3002';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { licenseKey } = data;

        // Validation
        if (!licenseKey) {
            return NextResponse.json(
                { success: false, message: "License key is required" },
                { status: 400 }
            );
        }

        // Call external license API to validate license key
        const response = await fetch(`${LICENSE_API_URL}/api/license/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                licenseKey,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("License validation API error:", errorData);
            return NextResponse.json(
                {
                    success: false,
                    message: errorData.message || "Failed to validate license key",
                },
                { status: response.status }
            );
        }

        const result = await response.json();

        return NextResponse.json(result);
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
