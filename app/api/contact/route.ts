import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export const runtime = "nodejs";

// Very small in-memory cooldown (per process).
// Keyed by `${ip}:${email}` to reduce accidental collisions.
const rateLimitStore: Map<string, number> = (global as any).contactRateMap || new Map();
(global as any).contactRateMap = rateLimitStore;

const DEFAULT_COOLDOWN_SECONDS = Number(process.env.CONTACT_COOLDOWN_SECONDS || 60);

type Payload = {
  inquiryType?: string;
  companyName?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function getClientIP(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

export async function POST(req: NextRequest) {
  try {
    // Accept both JSON and classic form posts
    const ct = req.headers.get("content-type") || "";
    const accept = req.headers.get("accept") || "";
    const isHtmlSubmit = accept.includes("text/html");
    let data: Payload;
    if (ct.includes("application/json")) {
      data = (await req.json()) as Payload;
    } else if (
      ct.includes("application/x-www-form-urlencoded") ||
      ct.includes("multipart/form-data")
    ) {
      // Use URLSearchParams for urlencoded; for multipart, req.formData() is supported in Web API
      if (ct.includes("application/x-www-form-urlencoded")) {
        const text = await req.text();
        const params = new URLSearchParams(text);
        data = {
          inquiryType: params.get("inquiryType") || undefined,
          companyName: params.get("companyName") || undefined,
          name: params.get("name") || undefined,
          phone: params.get("phone") || undefined,
          email: params.get("email") || undefined,
          message: params.get("message") || undefined,
        };
      } else {
        const fd = await (req as unknown as Request).formData();
        data = {
          inquiryType: String(fd.get("inquiryType") || ""),
          companyName: String(fd.get("companyName") || ""),
          name: String(fd.get("name") || ""),
          phone: String(fd.get("phone") || ""),
          email: String(fd.get("email") || ""),
          message: String(fd.get("message") || ""),
        };
      }
    } else {
      // Default to JSON parse; if fails, error out
      data = (await req.json().catch(() => ({}))) as Payload;
    }
    const { name, email, message } = data;
    if (!name || !email || !message) {
      if (isHtmlSubmit) {
        const url = new URL("/contact?error=validation", req.url);
        return NextResponse.redirect(url, 303);
      }
      return NextResponse.json(
        { error: "Missing required fields: name, email, message." },
        { status: 400 }
      );
    }

    // Cooldown check
    const ip = getClientIP(req as unknown as Request);
    const key = `${ip}:${email}`;
    const now = Date.now();
    const last = rateLimitStore.get(key) || 0;
    const cooldownMs = DEFAULT_COOLDOWN_SECONDS * 1000;
    const diff = now - last;
    if (diff < cooldownMs) {
      const waitSec = Math.ceil((cooldownMs - diff) / 1000);
      if (isHtmlSubmit) {
        const url = new URL(`/contact?error=rate&wait=${waitSec}`, req.url);
        return NextResponse.redirect(url, 303);
      }
      const res = NextResponse.json(
        { error: `Please wait ${waitSec}s before sending again.` },
        { status: 429 }
      );
      res.headers.set("Retry-After", String(waitSec));
      return res;
    }

    // Build email content
    const { MAIL_TO } = process.env as Record<string, string | undefined>;
    const to = (MAIL_TO && MAIL_TO.split(",").map((s) => s.trim()).filter(Boolean)) || [
      (process.env.SMTP_USER as string),
    ];
    const subject = `Aloqa — New Inquiry${data.name ? ` from ${data.name}` : ""}`;
    const text = `New inquiry received\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone || "-"}\n` +
      `Company: ${data.companyName || "-"}\n` +
      `Type: ${data.inquiryType || "-"}\n` +
      `IP: ${ip}\n\n` +
      `Message:\n${data.message}`;

    const html = `
<div style="background:#f4f6f8;padding:24px">
  <table role="presentation" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.06);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a">
    <tr>
      <td style="padding:24px 24px 12px;border-bottom:1px solid #eef2f7">
        <h1 style="margin:0;font-size:20px;color:#1C3990">Aloqa — New Inquiry</h1>
        <p style="margin:8px 0 0;font-size:12px;color:#64748b">Submitted from the website</p>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 24px">
        <table role="presentation" style="width:100%;border-collapse:collapse">
          <tr>
            <td style="width:160px;padding:8px 12px;background:#f1f5f9;border:1px solid #eef2f7;font-size:13px;color:#475569"><b>Name</b></td>
            <td style="padding:8px 12px;background:#f8fafc;border:1px solid #eef2f7;font-size:14px;color:#0f172a">${escapeHtml(data.name || "-")}</td>
          </tr>
          <tr>
            <td style="width:160px;padding:8px 12px;background:#f1f5f9;border:1px solid #eef2f7;font-size:13px;color:#475569"><b>Email</b></td>
            <td style="padding:8px 12px;background:#f8fafc;border:1px solid #eef2f7;font-size:14px;color:#0f172a">${escapeHtml(data.email || "-")}</td>
          </tr>
          <tr>
            <td style="width:160px;padding:8px 12px;background:#f1f5f9;border:1px solid #eef2f7;font-size:13px;color:#475569"><b>Phone</b></td>
            <td style="padding:8px 12px;background:#f8fafc;border:1px solid #eef2f7;font-size:14px;color:#0f172a">${escapeHtml(data.phone || "-")}</td>
          </tr>
          <tr>
            <td style="width:160px;padding:8px 12px;background:#f1f5f9;border:1px solid #eef2f7;font-size:13px;color:#475569"><b>Company</b></td>
            <td style="padding:8px 12px;background:#f8fafc;border:1px solid #eef2f7;font-size:14px;color:#0f172a">${escapeHtml(data.companyName || "-")}</td>
          </tr>
          <tr>
            <td style="width:160px;padding:8px 12px;background:#f1f5f9;border:1px solid #eef2f7;font-size:13px;color:#475569"><b>Type</b></td>
            <td style="padding:8px 12px;background:#f8fafc;border:1px solid #eef2f7;font-size:14px;color:#0f172a">${escapeHtml(data.inquiryType || "-")}</td>
          </tr>
        </table>
        <div style="margin-top:16px;padding:16px;border:1px solid #eef2f7;background:#f8fafc;border-radius:8px">
          <div style="font-weight:600;margin-bottom:8px;color:#0f172a">Message</div>
          <div style="white-space:pre-wrap;line-height:1.5">${escapeHtml(data.message || "-")}</div>
        </div>
        <p style="margin:16px 0 0;font-size:12px;color:#94a3b8">IP: ${escapeHtml(ip)}</p>
      </td>
    </tr>
  </table>
</div>`;

    // Send mail using Nodemailer (SMTP via env vars)
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_FROM,
      SMTP_SECURE,
    } = process.env as Record<string, string | undefined>;

    // Treat obvious placeholder values as "not configured" to avoid DNS/auth errors.
    const looksPlaceholder = (v?: string) => {
      if (!v) return true;
      const s = v.trim();
      if (!s) return true;
      // Common placeholder patterns from .env.example
      if (
        /smtp\.example\.com/i.test(s) ||
        /your_smtp_username/i.test(s) ||
        /your_smtp_password/i.test(s) ||
        /no-reply@example\.com/i.test(s) ||
        /@example\.com$/i.test(s)
      ) {
        return true;
      }
      return false;
    };

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      looksPlaceholder(SMTP_HOST) ||
      looksPlaceholder(SMTP_USER) ||
      looksPlaceholder(SMTP_PASS) ||
      looksPlaceholder(MAIL_FROM)
    ) {
      if (isHtmlSubmit) {
        const url = new URL("/contact?error=config", req.url);
        return NextResponse.redirect(url, 303);
      }
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM.",
        },
        { status: 501 }
      );
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST.trim(),
      port: Number(String(SMTP_PORT).trim()),
      secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
      // Normalize accidental whitespace in credentials (e.g., spaced Gmail app passwords)
      auth: { user: SMTP_USER.trim(), pass: (SMTP_PASS || "").replace(/\s+/g, "") },
    });

    const info = await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER!,
      to,
      replyTo: data.email,
      subject,
      text,
      html,
    });
    console.info(
      "/api/contact delivered",
      JSON.stringify({ id: info.messageId, accepted: info.accepted, rejected: info.rejected })
    );

    // Mark send time for cooldown
    rateLimitStore.set(key, now);

    if (isHtmlSubmit) {
      const url = new URL(`/contact?sent=1&cooldown=${DEFAULT_COOLDOWN_SECONDS}`, req.url);
      return NextResponse.redirect(url, 303);
    }
    const res = NextResponse.json({ ok: true }, { status: 201 });
    res.headers.set("Retry-After", String(DEFAULT_COOLDOWN_SECONDS));
    return res;
  } catch (err: any) {
    console.error("/api/contact error", err);
    // If non-JS form submission, redirect back with error flag
    const accept = req.headers.get("accept") || "";
    if (accept.includes("text/html")) {
      const url = new URL("/contact?error=server", req.url);
      return NextResponse.redirect(url, 303);
    }
    return NextResponse.json(
      { error: "Failed to send. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
