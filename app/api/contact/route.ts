import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  orgName?: string;
  message: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
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

    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.rpc("insert_contact_message", {
      p_name: p.name.trim(),
      p_email: p.email.trim(),
      p_phone: p.phone.trim(),
      p_org_name: (p.orgName ?? "").trim() || null,
      p_message: p.message.trim(),
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

