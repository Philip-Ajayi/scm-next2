import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category, fullName, email, amount, notes } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full Name and Email Address are required." },
        { status: 400 }
      );
    }

    const numericAmount = parseFloat(String(amount));
    if (isNaN(numericAmount) || numericAmount < 1) {
      return NextResponse.json(
        { error: "Please enter a valid amount of at least $1.00 USD." },
        { status: 400 }
      );
    }

    const categoryTitle =
      category === "event"
        ? "Support Event · Supernatural Camp Meeting 2026"
        : "General Offering · Supernatural Community Church";

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: categoryTitle,
              description: `Contribution by ${fullName}`
            },
            unit_amount: Math.round(numericAmount * 100) // Convert to cents
          },
          quantity: 1
        }
      ],
      mode: "payment",
      metadata: {
        category,
        fullName,
        email,
        notes: notes || "None"
      },
      submit_type: "donate",
      success_url: `${origin}/give?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/give?status=cancelled`
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to initiate payment session." },
      { status: 500 }
    );
  }
}