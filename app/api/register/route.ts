import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Registration } from "@/models/Registration";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, address } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !address) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const currentYear = new Date().getFullYear();

    await connectToDatabase();

    // Check if attendee is already registered for this year
    const existingRegistration = await Registration.findOne({
      email: normalizedEmail,
      year: currentYear
    });

    if (existingRegistration) {
      return NextResponse.json(
        {
          success: true,
          alreadyRegistered: true,
          message: `You are already registered for Supernatural Camp Meeting ${currentYear}! We look forward to receiving you.`,
          registrationId: existingRegistration._id
        },
        { status: 200 }
      );
    }

    // Create record (attendance is deliberately left empty, year auto-assigned)
    const newRegistration = await Registration.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim(),
      email: normalizedEmail,
      address: address.trim(),
      year: currentYear,
      attendance: [],
      unsubscribed: false
    });

    // Send confirmation email via Resend
    const sender =
      process.env.FROM_EMAIL || "Supernatural Community Church <info@noreply.supernaturalcc.org>";

    try {
      await resend.emails.send({
        from: sender,
        to: [normalizedEmail],
        subject: `Your Pass: Supernatural Camp Meeting ${currentYear} Registration Confirmed`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #101014; background-color: #f7f7f5; padding: 24px; margin: 0; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 1px solid #e4e4e7; overflow: hidden; }
                .header { background: #101014; color: #ffffff; padding: 36px 30px; text-align: left; }
                .header h1 { margin: 8px 0 0; font-size: 26px; font-weight: 600; letter-spacing: -0.03em; }
                .header p { margin: 0; color: #a1a1aa; font-size: 11px; text-transform: uppercase; letter-spacing: 0.16em; }
                .content { padding: 36px 30px; }
                .badge { display: inline-block; background: #ecfdf5; color: #047857; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; padding: 6px 14px; border-radius: 9999px; border: 1px solid #a7f3d0; margin-bottom: 20px; }
                .event-card { background: #f7f7f5; border: 1px solid #e4e4e7; border-radius: 14px; padding: 20px; margin: 24px 0; }
                .detail-row { display: flex; justify-content: space-between; border-bottom: 1px solid #e5e5e0; padding: 10px 0; font-size: 14px; }
                .detail-row:last-child { border-bottom: none; }
                .detail-label { color: #71717a; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; }
                .detail-val { font-weight: 600; color: #18181b; }
                .footer { padding: 24px 30px; background: #fafafa; border-top: 1px solid #e4e4e7; font-size: 12px; color: #71717a; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <p>Supernatural Camp Meeting ${currentYear}</p>
                  <h1>Registration Confirmed</h1>
                </div>
                <div class="content">
                  <div class="badge">Pass Confirmed · Free Admission</div>

                  <p style="font-size: 16px; color: #18181b;">
                    Dear <strong>${firstName} ${lastName}</strong>,
                  </p>

                  <p style="color: #52525b; font-size: 15px;">
                    We are thrilled to confirm your registration for <strong>Supernatural Camp Meeting ${currentYear}</strong>. Come expecting the Word taught in clarity, the Spirit in demonstration, and an encounter that leaves you transformed.
                  </p>

                  <div class="event-card">
                    <div class="detail-row">
                      <span class="detail-label">Dates</span>
                      <span class="detail-val">Nov 19 – 22, 2026</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">The &ldquo;Tent&rdquo; (Venue)</span>
                      <span class="detail-val">Rochester Airport Marriott</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Address</span>
                      <span class="detail-val">1890 W Ridge Rd, Rochester, NY</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Registration ID</span>
                      <span class="detail-val" style="font-family: monospace;">${newRegistration._id}</span>
                    </div>
                  </div>

                  <p style="color: #71717a; font-size: 13px;">
                    <strong>Important:</strong> No entertainment or side attractions are permitted. Come with a hungry heart, your Bible, and someone you love.
                  </p>
                </div>
                <div class="footer">
                  Supernatural Community Church · 1400 Lehigh Station Road, Rochester, NY 14467 · 585-210-5038
                </div>
              </div>
            </body>
          </html>
        `
      });
    } catch (emailError) {
      // Log email delivery failure without interrupting user registration
      console.warn("Confirmation email delivery note:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful! Confirmation email dispatched.",
        registrationId: newRegistration._id,
        year: currentYear
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle MongoDB duplicate key error gracefully
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: true,
          alreadyRegistered: true,
          message: `You are already registered for Supernatural Camp Meeting!`
        },
        { status: 200 }
      );
    }

    console.error("Registration error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process registration." },
      { status: 500 }
    );
  }
}