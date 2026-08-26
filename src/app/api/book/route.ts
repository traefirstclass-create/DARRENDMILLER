import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const details = String(body.details || "").trim();
  const company = String(body.company || "").trim();
  const dates = String(body.dates || "").trim();
  const projectType = String(body.projectType || "").trim();

  if (!name || !email || !details) {
    return NextResponse.json(
      { error: "Name, email, and details are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Booking form is not configured: missing RESEND_API_KEY or BOOKING_TO_EMAIL env vars."
    );
    return NextResponse.json(
      { error: "Booking form is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
    );

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Production / Company", company || "—"],
    ["Project Dates", dates || "—"],
    ["Project Type", projectType || "—"],
    ["Details", details],
  ];

  const html = `
    <h2>New booking request — Darren Dequan Miller</h2>
    <table cellpadding="6" cellspacing="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(
              value
            ).replace(/\n/g, "<br/>")}</td></tr>`
        )
        .join("")}
    </table>
  `;

  try {
    const { error } = await resend.emails.send({
      from: process.env.BOOKING_FROM_EMAIL || "Booking Form <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New booking request from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send booking request. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking form send failed:", err);
    return NextResponse.json(
      { error: "Failed to send booking request. Please try again." },
      { status: 500 }
    );
  }
}
