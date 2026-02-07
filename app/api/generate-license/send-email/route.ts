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

  console.log(data.licenseUrl);

  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        table, td, div, h1, p {font-family: sans-serif;}
      </style>
    </head>
    <body style="margin:0;padding:0;">
      <div role="article" aria-roledescription="email" lang="en" style="width:100%;border-radius:20px;background-color:#ffffff;">
        <center style="width:100%">
          <!--[if mso | IE]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="608" style="background-color:#ffffff;border:1px solid #4B4B4B;">
          <tr>
          <td>
          <![endif]-->
          <table align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:608px;background-color:#ffffff;border:1px solid #4B4B4B;border-radius:20px;overflow:hidden;margin:0 auto;">
            
            <!-- Header Image -->
            <tr>
              <td style="padding:0;">
                <img src="https://cdn.simvizlabs.com/public_assets/email_banner.png" alt="" style="width:100%;height:auto;display:block;border:0;border-top-left-radius:20px;border-top-right-radius:20px;" />
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td style="padding:40px 30px;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  
                  <!-- Title -->
                  <tr>
                    <td style="padding-bottom:20px;">
                      <h2 style="margin:0;color:#112480;font-size:32px;font-weight:bold;line-height:1.2;font-family:Arial,sans-serif;">
                        Your Account is Ready
                      </h2>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding-bottom:20px;">
                       <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                         <tr>
                            <td style="border-top:1px solid #cccccc;font-size:0;line-height:0;">&nbsp;</td>
                         </tr>
                       </table>
                    </td>
                  </tr>

                  <!-- Greeting -->
                  <tr>
                    <td style="padding-bottom:20px;font-size:16px;line-height:1.6;color:#000000;font-family:Arial,sans-serif;">
                      Hello <strong style="color:#112480;">${data.firstName} ${data.lastName}</strong>,
                    </td>
                  </tr>

                  <!-- Introductory Text -->
                  <tr>
                    <td style="padding-bottom:40px;font-size:16px;line-height:1.6;color:#000000;font-family:Arial,sans-serif;">
                      Your Account has been successfully created.<br/>
                      To Access the app, please follow the steps below.
                    </td>
                  </tr>

                  <!-- Step 1 -->
                  <tr>
                    <td style="padding-bottom:30px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding-bottom:15px;font-size:16px;font-weight:bold;color:#000000;font-family:Arial,sans-serif;">
                            1. Download the SimViz Labs app on your device.
                          </td>
                        </tr>
                        <tr>
                          <td align="left">
                            <div>
                              <!--[if mso]>
                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://apps.apple.com/in/app/airbus-a320-fms/id6743235055" style="height:50px;v-text-anchor:middle;width:240px;" arcsize="64%" stroke="f" fillcolor="#112480">
                                <w:anchorlock/>
                                <center>
                              <![endif]-->
                                  <a href="https://apps.apple.com/in/app/airbus-a320-fms/id6743235055" target="_blank" style="background-color:#1381e5;color:#ffffff;display:inline-block;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:240px;-webkit-text-size-adjust:none;border-radius:32px;">Download on App Store</a>
                              <!--[if mso]>
                                </center>
                              </v:roundrect>
                              <![endif]-->
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Step 2 -->
                  <tr>
                    <td style="padding-bottom:30px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding-bottom:15px;font-size:16px;font-weight:bold;color:#000000;font-family:Arial,sans-serif;">
                            2. Once the app is installed, click <strong>Sign In</strong> to apply your license.
                          </td>
                        </tr>
                        <tr>
                          <td align="left">
                             <div>
                              <!--[if mso]>
                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${data.licenseUrl}" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="64%" stroke="f" fillcolor="#112480">
                                <w:anchorlock/>
                                <center>
                              <![endif]-->
                                  <a href="${data.licenseUrl}" target="_blank" style="background-color:#1381e5;color:#ffffff;display:inline-block;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;border-radius:32px;">Sign In</a>
                              <!--[if mso]>
                                </center>
                              </v:roundrect>
                              <![endif]-->
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Warning -->
                  <tr>
                    <td style="padding-top:10px;">
                      <p style="margin:0;font-size:14px;line-height:1.6;font-weight:bold;color:#000000;font-family:Arial,sans-serif;">
                        Important: Please ensure the SimViz Labs app is installed on your device before clicking Sign In. Your device must be running iPadOs 17 or later. Signing In without the app installed may result in activation failure.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
          <!--[if mso | IE]>
          </td>
          </tr>
          </table>
          <![endif]-->
        </center>
      </div>
    </body>
    </html>
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
      subject: `Your SimViz Labs Account is Ready`,
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
      ccRecipients: [
      {
      emailAddress: {
      address: "bony@simvizlabs.com",
        },
     },
      {
      emailAddress: {
      address: "kush@simvizlabs.com",
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

    // Construct web bridge URL (will redirect to app)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://simvizlabs.com";
    // const licenseUrl = `${baseUrl}/activate/${encodeURIComponent(licenseKey)}`;
    // const licenseUrl = `${baseUrl}/licenseKey?query=${encodeURIComponent(licenseKey)}`;
    const licenseUrl = `${baseUrl}/licenseKey?query=${encodeURIComponent(email)}`;

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
