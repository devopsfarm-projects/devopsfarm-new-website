import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { getEnrollments } from "@/lib/enrollmentsDb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function passwordOk(input: string) {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(real);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "ADMIN_PASSWORD is not set on the server" }, { status: 500 });
  }
  const { password } = await req.json().catch(() => ({ password: "" }));
  if (!passwordOk(String(password ?? ""))) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }
  try {
    const col = await getEnrollments();
    const rows = await col.find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(5000).toArray();
    return NextResponse.json({ rows });
  } catch (err) {
    console.error("[admin] DB read failed:", err);
    return NextResponse.json({ error: "Database not reachable (check MONGO_URI)" }, { status: 500 });
  }
}
