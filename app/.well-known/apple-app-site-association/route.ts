import { NextResponse } from "next/server";

export async function GET() {
    // Apple App Site Association file
    // Replace YOUR_TEAM_ID with your actual Apple Team ID
    // Replace com.simvizlabs.yourappname with your actual bundle identifier
    const aasa = {
        applinks: {
            details: [
                {
                    "appIDs": ["743ZC4UGHL.com.simvizlabs.fms-trainer-airbus"],
                    "components": [
                        {
                            "/": "/licenseKey",
                            "?": { "query": "*" }
                        }
                    ]
                }
            ]
        }
    };

    return NextResponse.json(aasa, {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600",
        },
    });
}