import { NextResponse } from "next/server";
import { getEnrollments } from "@/lib/enrollmentsDb";

export const runtime = "nodejs";

const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY || "29f34068-cb93-4acf-91b8-9b01d85c43ad";

const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field, real users never see it
  if (body.website) return NextResponse.json({ success: true });

  const data = {
    course: clean(body.course, 100) || "Generative AI Training",
    name: clean(body.name, 100),
    email: clean(body.email, 150),
    phone: clean(body.phone, 15).replace(/\D/g, ""),
    experience: clean(body.experience, 50),
    message: clean(body.message, 1000),
  };

  if (!data.name) return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 });
  if (data.phone.length !== 10) return NextResponse.json({ success: false, error: "Invalid mobile number" }, { status: 400 });
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
    return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
  }

  // 1) Save in database
  let dbOk = false;
  try {
    const col = await getEnrollments();
    await col.insertOne({ ...data, createdAt: new Date() });
    dbOk = true;
  } catch (err) {
    console.error("[enroll] DB save failed:", err);
  }

  // 2) Send email
  let mailOk = false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New Enrollment - ${data.course} - DevOpsFarm`,
        from_name: "DevOpsFarm Website",
        Course: data.course,
        Name: data.name,
        Email: data.email,
        Phone: `+91${data.phone}`,
        Experience: data.experience,
        Message: data.message,
      }),
    });
    const json = await res.json();
    mailOk = !!json.success;
  } catch (err) {
    console.error("[enroll] Email failed:", err);
  }

  // Success if at least one channel worked; otherwise the browser falls back to WhatsApp
  if (dbOk || mailOk) return NextResponse.json({ success: true, dbOk, mailOk });
  return NextResponse.json({ success: false }, { status: 502 });
}
