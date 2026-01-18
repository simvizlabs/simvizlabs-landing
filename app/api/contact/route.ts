import { NextRequest, NextResponse } from "next/server";
import { getGraphAccessToken, sendEmailViaGraph, ContactInquiry } from "@/lib/microsoft-graph";

export async function POST(request: NextRequest) {
    try {
        const data: ContactInquiry = await request.json();

        // Basic validation
        if (!data.firstName || !data.email || !data.orgType) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // 1. Get Access Token
        const accessToken = await getGraphAccessToken();

        // 2. Send Email
        await sendEmailViaGraph(accessToken, data);

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error: any) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to process contact inquiry"
            },
            { status: 500 }
        );
    }
}
