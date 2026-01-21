import { NextResponse } from "next/server";

export async function GET() {
    // Apple App Site Association file
    // Replace YOUR_TEAM_ID with your actual Apple Team ID
    // Replace com.simvizlabs.yourappname with your actual bundle identifier
    const aasa = {
        applinks: {
            details: [
                {
                    appIDs: ["743ZC4UGHL.com.simvizlabs.SimViz A320"],
                    components: [
                        {
                            "/": "/activate/*",
                            comment: "Matches activation links like /activate/KEY123"
                        },
                        {
                            "/": "/licenseKey",
                            "?": { "query": "*" },
                            comment: "Matches license key validation links like /licenseKey?query=KEY123"
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
