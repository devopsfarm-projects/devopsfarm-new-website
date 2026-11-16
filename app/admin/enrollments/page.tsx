"use client";

import { useMemo, useState } from "react";

type Row = {
  course: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
  createdAt: string;
};

export default function EnrollmentsAdmin() {
  const [password, setPassword] = useState("");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");

  const load = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setRows(data.rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    if (!rows) return [];
    const s = q.trim().toLowerCase();
    return s ? rows.filter((r) => Object.values(r).join(" ").toLowerCase().includes(s)) : rows;
  }, [rows, q]);

  const fmt = (d: string) =>
    new Date(d).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

  const downloadCsv = () => {
    const head = ["Date", "Course", "Name", "Email", "Phone", "Experience", "Message"];
    const esc = (v: string) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = filtered.map((r) =>
      [fmt(r.createdAt), r.course, r.name, r.email, "+91" + r.phone, r.experience, r.message].map(esc).join(",")
    );
    const blob = new Blob(["\uFEFF" + [head.join(","), ...lines].join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "enrollments.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  if (!rows) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <form onSubmit={load} className="w-full max-w-sm bg-gray-950 border border-gray-800 rounded-2xl p-6 space-y-4">
          <h1 className="text-xl font-bold">Enrollments Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            disabled={loading || !password}
            className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-60 font-semibold py-2.5 rounded-lg"
          >
            {loading ? "Loading..." : "View Students"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 pt-28 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <h1 className="text-2xl font-bold mr-auto">
            Enrollments <span className="text-gray-400 text-base">({filtered.length})</span>
          </h1>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name / phone / email"
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm w-60 focus:outline-none focus:border-purple-500"
          />
          <button onClick={load} className="border border-gray-700 hover:border-purple-500 rounded-lg px-4 py-2 text-sm">
            Refresh
          </button>
          <button onClick={downloadCsv} className="bg-purple-600 hover:bg-purple-500 rounded-lg px-4 py-2 text-sm font-semibold">
            Download CSV
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-800 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-900 text-gray-300 text-left">
              <tr>
                {["Date", "Name", "Phone", "Email", "Experience", "Course", "Message"].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={i} className="border-t border-gray-800 hover:bg-gray-950">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-400">{fmt(r.createdAt)}</td>
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <a className="text-green-400 hover:underline" href={`https://wa.me/91${r.phone}`} target="_blank" rel="noopener noreferrer">
                      +91 {r.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3">{r.email || "-"}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.experience || "-"}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.course}</td>
                  <td className="px-4 py-3 max-w-xs">{r.message || "-"}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-500">No enrollments yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
