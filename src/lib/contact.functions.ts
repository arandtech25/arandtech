import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Το όνομα είναι υποχρεωτικό").max(100),
  email: z.string().trim().email("Μη έγκυρο email").max(255),
  phone: z.string().trim().min(1).max(50),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error("Email service is not configured");
    }

    const escape = (s: string) =>
      s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

    const html = `
      <div style="font-family:Arial,sans-serif;color:#0f172a;">
        <h2 style="color:#0b1e3a;">Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
        <p><strong>Όνομα:</strong> ${escape(data.name)}</p>
        <p><strong>Email:</strong> ${escape(data.email)}</p>
        <p><strong>Τηλέφωνο:</strong> ${escape(data.phone)}</p>
        <p><strong>Θέμα:</strong> ${escape(data.subject)}</p>
        <hr />
        <p style="white-space:pre-wrap;">${escape(data.message)}</p>
      </div>
    `;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "ARANDTECH Contact <onboarding@resend.dev>",
        to: ["arandtech25@gmail.com"],
        reply_to: data.email,
        subject: `[Επικοινωνία] ${data.subject}`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error", res.status, body);
      throw new Error(`Αποτυχία αποστολής (${res.status})`);
    }

    return { ok: true as const };
  });
