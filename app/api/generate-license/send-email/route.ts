import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { getGraphAccessToken } from "@/lib/microsoft-graph";

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

function formatLicenseEmailHtml(data: {
    firstName: string;
    lastName: string;
    licenseKey: string;
    licenseUrl: string;
}) {
    return `
    <div style="font-family: sans-serif; max-width: 600px; color: #191716; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1381e5 0%, #5ea2ef 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Your License Key</h1>
      </div>
      
      <div style="padding: 30px; background: white; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5;">
        <p style="font-size: 16px; line-height: 1.6; color: #191716; margin-bottom: 20px;">
          Hello ${data.firstName} ${data.lastName},
        </p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #191716; margin-bottom: 20px;">
          Your license key has been generated successfully. Please use the link below to access your license:
        </p>
        
        <div style="background: #f5f5f7; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #1381e5;">
          <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #666;">License Key:</p>
          <p style="margin: 0; font-size: 20px; font-family: monospace; font-weight: bold; color: #1381e5; word-break: break-all;">
            ${data.licenseKey}
          </p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${data.licenseUrl}" 
             style="display: inline-block; background: #1381e5; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Activate License
          </a>
        </div>
        
        <p style="font-size: 14px; line-height: 1.6; color: #666; margin-top: 30px;">
          Or copy and paste this URL into your browser:<br>
          <a href="${data.licenseUrl}" style="color: #1381e5; word-break: break-all;">${data.licenseUrl}</a>
        </p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
          <p style="font-size: 12px; color: #999; margin: 0;">
            This email was sent from SimViz Labs License Management System.
          </p>
        </div>
      </div>
    </div>
  `;
}

async function sendEmailViaGraph(accessToken: string, data: {
    email: string;
    firstName: string;
    lastName: string;
    licenseKey: string;
    licenseUrl: string;
}) {
    const senderMail = process.env.AZURE_AD_SENDER_MAIL;

    if (!senderMail) {
        throw new Error("Missing Microsoft Graph sender email: AZURE_AD_SENDER_MAIL environment variable is not set");
    }

    const url = `https://graph.microsoft.com/v1.0/users/${senderMail}/sendMail`;

    const payload = {
        message: {
            subject: `Your SimViz Labs License Key - ${data.licenseKey}`,
            body: {
                contentType: "HTML",
                content: formatLicenseEmailHtml(data),
            },
            toRecipients: [
                {
                    emailAddress: {
                        address: data.email,
                    },
                },
            ],
        },
        saveToSentItems: "true",
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.error("Graph sendMail error:", error);
        throw new Error("Failed to send email via Microsoft Graph");
    }

    return true;
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
        const { email, firstName, lastName, licenseKey } = data;

        // Validation
        if (!email || !firstName || !lastName || !licenseKey) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
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

        // Get access token
        const accessToken = await getGraphAccessToken();

        // Construct license URL
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://simvizlabs.com";
        const licenseUrl = `${baseUrl}/licenseKey?query=${licenseKey}`;

        // Send email
        await sendEmailViaGraph(accessToken, {
            email,
            firstName,
            lastName,
            licenseKey,
            licenseUrl,
        });

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error: any) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to send email",
            },
            { status: 500 }
        );
    }
}
