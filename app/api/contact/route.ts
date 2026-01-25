import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  orgName?: string;
  org_name?: string;
  message: string;
  pageUrl?: string;
  submitted?: string;
  userAgent?: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function getClientIpAddress(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  const xri = headers.get("x-real-ip");

  const raw = (xff || xri || "").trim();
  if (!raw) return "";

  // x-forwarded-for can be a comma-separated list. Take the first.
  const first = raw.split(",")[0]?.trim() ?? "";
  if (!first) return "";

  // If we got an IPv6 like ::1, we can't reliably convert it to IPv4.
  // Return only IPv4 (as requested).
  const ipv4Match = first.match(/\b(\d{1,3}\.){3}\d{1,3}\b/);
  return ipv4Match ? ipv4Match[0] : "";
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const p = body as Partial<ContactPayload>;
    if (!isNonEmptyString(p.name) || !isNonEmptyString(p.email) || !isNonEmptyString(p.phone) || !isNonEmptyString(p.message)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const params = {
      name: p.name.trim(),
      email: p.email.trim(),
      phone: p.phone.trim(),
      orgName: (p.orgName ?? p.org_name ?? "").trim() || null,
      message: p.message.trim(),
      pageUrl: isNonEmptyString(p.pageUrl) ? p.pageUrl.trim() : null,
      submitted: isNonEmptyString(p.submitted) ? p.submitted : new Date().toISOString(),
      ipAddress: getClientIpAddress(req.headers),
      userAgent: req.headers.get("user-agent") ?? (isNonEmptyString(p.userAgent) ? p.userAgent : null),
    };

    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.rpc("insert_contact_message", {
      p_params: params,
    });

    if (error) {
      console.error("Contact RPC failed", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return NextResponse.json({ error: error.message || "Failed to save message" }, { status: 500 });
    }

    const rowReturned = Array.isArray(data) ? data.length > 0 : Boolean(data);
    if (!rowReturned) {
      console.error("Contact RPC returned no row", { data });
      return NextResponse.json({ error: "Insert did not return a row" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact handler failed", err);
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

