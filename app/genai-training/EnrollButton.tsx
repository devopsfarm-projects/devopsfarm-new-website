"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "919971566583"; // country code + number, no "+"
const COURSE_NAME = "Generative AI Training";

// ---- Behaviour switches (change true/false) ----
// true  -> "Enroll Now" opens WhatsApp directly with a ready message (no form, no database)
// false -> "Enroll Now" opens the popup form (saved in database + email) and then opens WhatsApp
const DIRECT_WHATSAPP = false;

type Status = "idle" | "loading" | "success" | "fallback";

function EnrollModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [waUrl, setWaUrl] = useState("");

  // Close on Esc + lock body scroll while the popup is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const buildWhatsAppUrl = () => {
    const text =
      `Hello DevOpsFarm, I want to enroll in ${COURSE_NAME}.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: +91${form.phone}\n` +
      (form.email ? `Email: ${form.email}\n` : "") +
      (form.experience ? `Experience: ${form.experience}\n` : "") +
      (form.message ? `Message: ${form.message}\n` : "");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const phone = form.phone.replace(/\D/g, "");
    if (!form.name.trim()) return setError("Please enter your name.");
    if (phone.length !== 10) return setError("Please enter a valid 10-digit mobile number.");

    setStatus("loading");

    try {
      // Server saves in database + sends email. If both fail -> WhatsApp fallback below.
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          course: COURSE_NAME,
          name: form.name,
          email: form.email,
          phone,
          experience: form.experience,
          message: form.message,
          website: "", // honeypot
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("submit failed");
      // Saved. Now also send the student's details to WhatsApp
      const url = buildWhatsAppUrl();
      setWaUrl(url);
      setStatus("success");
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // Could not save/send -> fall back to WhatsApp
      const url = buildWhatsAppUrl();
      setWaUrl(url);
      setStatus("fallback");
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="genai-modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="genai-modal" role="dialog" aria-modal="true" aria-labelledby="genai-modal-title">
        <button type="button" className="genai-modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="genai-modal-done">
            <div className="genai-modal-emoji">✅</div>
            <h3>Application Submitted!</h3>
            <p>
              Thank you {form.name.split(" ")[0]}! Our team will contact you very soon.
              We’ve also opened WhatsApp with your details — just press <b>Send</b>.
            </p>
            <a className="genai-modal-submit" href={waUrl} target="_blank" rel="noopener noreferrer">
              Open WhatsApp
            </a>
          </div>
        ) : status === "fallback" ? (
          <div className="genai-modal-done">
            <div className="genai-modal-emoji">💬</div>
            <h3>Continue on WhatsApp</h3>
            <p>
              We couldn’t send your form by email. We’ve opened WhatsApp with your details —
              just press <b>Send</b>. If it didn’t open, tap the button below.
            </p>
            <a className="genai-modal-submit" href={waUrl} target="_blank" rel="noopener noreferrer">
              Open WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h3 id="genai-modal-title">Enroll in Generative AI Training</h3>
            <p className="genai-modal-sub">Fill in your details and our team will get in touch.</p>

            <label>
              Full Name *
              <input type="text" value={form.name} onChange={set("name")} placeholder="Your name" autoComplete="name" required />
            </label>

            <label>
              Email
              <input type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" autoComplete="email" />
            </label>

            <label>
              Mobile Number *
              <div className="genai-modal-phone">
                <span>🇮🇳 +91</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                  placeholder="10-digit number"
                  autoComplete="tel-national"
                  required
                />
              </div>
            </label>

            <label>
              Course
              <input type="text" value={COURSE_NAME} readOnly className="genai-modal-readonly" />
            </label>

            <label>
              Total Work Experience
              <select value={form.experience} onChange={set("experience")}>
                <option value="">Select</option>
                <option>Fresher (0 years)</option>
                <option>1-2 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </label>

            <label>
              Message (optional)
              <textarea rows={3} value={form.message} onChange={set("message")} placeholder="Any question?" />
            </label>

            {error && <p className="genai-modal-error">{error}</p>}

            <button type="submit" className="genai-modal-submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function EnrollButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (DIRECT_WHATSAPP) {
    const text = `Hello DevOpsFarm, I want to enroll in ${COURSE_NAME}. Please share the details.`;
    return (
      <a
        className={className}
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {mounted && open && createPortal(<EnrollModal onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}