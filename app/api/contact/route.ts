import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, reason, message } = body;

    // Validate required fields
    if (!fullName || !email || !reason || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const recipient =
      process.env.CONTACT_RECEIVER_EMAIL || "iyunademadebowale@gmail.com";

    // Clean human-readable reason format
    const readableReason = reason
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char: string) => char.toUpperCase());

    // Send formatted HTML notification to Iyunade
    const { data, error } = await resend.emails.send({
      from: "Supernatural Contact <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `New Contact Inquiry: [${readableReason}] from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #101014; background-color: #f7f7f5; padding: 24px; margin: 0; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e5e5e0; overflow: hidden; }
              .header { background: #101014; color: #ffffff; padding: 32px 28px; }
              .header h1 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
              .header p { margin: 6px 0 0; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; }
              .content { padding: 32px 28px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #71717a; margin-bottom: 4px; font-weight: bold; }
              .value { font-size: 15px; color: #18181b; font-weight: 500; }
              .message-box { background: #f7f7f5; border-radius: 12px; padding: 18px; border: 1px solid #e4e4e7; margin-top: 8px; font-size: 15px; white-space: pre-wrap; color: #27272a; }
              .footer { padding: 20px 28px; background: #fafafa; border-top: 1px solid #e5e5e0; font-size: 12px; color: #a1a1aa; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <p>Supernatural Community Church</p>
                <h1>New Website Contact Message</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Reason for Contact</div>
                  <div class="value" style="color: #8b5cf6; font-weight: 700;">${readableReason}</div>
                </div>

                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${fullName}</div>
                </div>

                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}" style="color: #101014;">${email}</a></div>
                </div>

                <div class="field">
                  <div class="label">Phone Number</div>
                  <div class="value">${phone || "Not provided"}</div>
                </div>

                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                You can reply directly to this email to respond to ${fullName} (${email}).
              </div>
            </div>
          </body>
        </html>
      `
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to dispatch email. Please try again shortly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (err: any) {
    console.error("Contact API Server Error:", err);
    return NextResponse.json(
      { error: err?.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}