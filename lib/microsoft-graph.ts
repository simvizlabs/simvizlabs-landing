export interface ContactInquiry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orgType: string;
  region: string;
  country: string;
  solutions: string[];
  additionalInfo: string;
}

export async function getGraphAccessToken() {
  const tenantId = process.env.AZURE_AD_TENANT_ID;
  const clientId = process.env.AZURE_AD_CLIENT_ID;
  const clientSecret = process.env.AZURE_AD_CLIENT_SECRET;

  const missingVars = [];
  if (!tenantId) missingVars.push("AZURE_AD_TENANT_ID");
  if (!clientId) missingVars.push("AZURE_AD_CLIENT_ID");
  if (!clientSecret) missingVars.push("AZURE_AD_CLIENT_SECRET");

  if (missingVars.length > 0) {
    throw new Error(`Missing Azure AD environment variables: ${missingVars.join(", ")}`);
  }

  const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  const body = new URLSearchParams();
  body.append("client_id", clientId);
  body.append("scope", "https://graph.microsoft.com/.default");
  body.append("client_secret", clientSecret);
  body.append("grant_type", "client_credentials");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    console.error("Graph OAuth error detail:", JSON.stringify(errorBody, null, 2));
    throw new Error(`Graph OAuth failed (${response.status}): ${errorBody.error_description || errorBody.error || "Unknown error"}`);
  }

  const data = await response.json();
  return data.access_token;
}

export function formatContactEmailHtml(data: ContactInquiry) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; color: #191716;">
      <h2 style="color: #1381e5;">New Inquiry from SimViz Labs</h2>
      <p>A new contact form has been submitted with the following details:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 40%;">First Name</td>
          <td style="padding: 10px; border: 1px solid #eee;">${data.firstName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Last Name</td>
          <td style="padding: 10px; border: 1px solid #eee;">${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border: 1px solid #eee;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Organization Type</td>
          <td style="padding: 10px; border: 1px solid #eee;">${data.orgType}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Region</td>
          <td style="padding: 10px; border: 1px solid #eee;">${data.region}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Country</td>
          <td style="padding: 10px; border: 1px solid #eee;">${data.country}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Training Solutions</td>
          <td style="padding: 10px; border: 1px solid #eee;">${data.solutions.join(", ") || "None selected"}</td>
        </tr>
      </table>
      
      <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
        <p style="font-weight: bold; margin-bottom: 10px;">Additional Information:</p>
        <p style="margin: 0; line-height: 1.6;">${data.additionalInfo || "N/A"}</p>
      </div>
      
      <p style="margin-top: 30px; font-size: 12px; color: #666;">
        This email was sent from the SimViz Labs Contact Us form.
      </p>
    </div>
  `;
}

export async function sendEmailViaGraph(accessToken: string, data: ContactInquiry) {
  const senderMail = process.env.AZURE_AD_SENDER_MAIL;
  const recipientMail = process.env.CONTACT_RECIPIENT_MAIL || senderMail;

  if (!senderMail) {
    throw new Error("Missing Microsoft Graph sender email: AZURE_AD_SENDER_MAIL environment variable is not set");
  }

  if (!recipientMail) {
    throw new Error("Missing Microsoft Graph recipient email: CONTACT_RECIPIENT_MAIL is not set and AZURE_AD_SENDER_MAIL is also missing");
  }

  const url = `https://graph.microsoft.com/v1.0/users/${senderMail}/sendMail`;

  const payload = {
    message: {
      subject: `CONTACT-US: New Inquiry -> ${data.orgType} - ${data.firstName} ${data.lastName}`,
      body: {
        contentType: "HTML",
        content: formatContactEmailHtml(data),
      },
      toRecipients: [
        {
          emailAddress: {
            address: recipientMail,
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            address: "bony@simvizlabs.com",
          },
        },
      ],
      replyTo: [
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
    const error = await response.json();
    console.error("Graph sendMail error:", error);
    throw new Error("Failed to send email via Microsoft Graph");
  }

  return true;
}
