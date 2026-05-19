"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { courses } from "./CourseDetail";
import {
  IconBrandLinkedin,
  IconBrandX,
  IconBrandInstagram,
  IconCheck,
  IconClock,
  IconCalendar,
  IconUsers,
  IconStar,
  IconCertificate,
  IconCloud,
  IconBrandDocker,
  IconBrandAws,
  IconArrowRight,
  IconPlayerPlay,
} from "@tabler/icons-react";

// ── Countdown Timer ──────────────────────────────────────────────────────────
function Countdown() {
  const target = new Date("2026-05-21T23:59:59");
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, target.getTime() - now.getTime());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-green-950 border border-green-800 rounded-xl p-4 mb-4">
      <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3 text-center">
        Admissions Close On 21st May
      </p>
      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { label: "Days", val: time.days },
          { label: "Hours", val: time.hours },
          { label: "Minutes", val: time.minutes },
          { label: "Seconds", val: time.seconds },
        ].map((t) => (
          <div key={t.label} className="bg-black rounded-lg py-2">
            <p className="text-white text-2xl font-bold tabular-nums">
              {String(t.val).padStart(2, "0")}
            </p>
            <p className="text-gray-400 text-xs">{t.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Enroll Form ──────────────────────────────────────────────────────────────
function EnrollForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiry: "Myself", experience: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      alert("Please enter Name and Phone number!");
      return;
    }
    setLoading(true);
    
    const res = await fetch("https://formsubmit.co/ajax/devopsfarmer@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Name: form.name,
        Email: form.email,
        Phone: `+91${form.phone}`,
        Inquiry: form.inquiry,
        Experience: form.experience,
        _subject: "New Enrollment - DevOpsFarm",
      }),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again!");
    }
  };
  return (
    <div id="enroll" className="bg-gray-950 border border-gray-800 rounded-2xl p-6 sticky top-24">
      <Countdown />
      <h3 className="text-white text-lg font-bold mb-4">Apply Now</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-gray-900 border border-gray-700 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500"
        />
        <input
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-gray-900 border border-gray-700 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500"
        />
        <div className="flex gap-2">
          <div className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-400 flex-shrink-0">
            🇮🇳 +91
          </div>
          <input
            type="tel"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500"
          />
        </div>
        <select
          value={form.inquiry}
          onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
          className="w-full bg-gray-900 border border-gray-700 text-gray-400 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500"
        >
          <option>Myself</option>
          <option>My Company</option>
        </select>
        <select
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
          className="w-full bg-gray-900 border border-gray-700 text-gray-400 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500"
        >
          <option value="">Total Work Experience</option>
          <option>Fresher (0 years)</option>
          <option>1-2 years</option>
          <option>3-5 years</option>
          <option>5+ years</option>
        </select>
      {submitted ? (
  <div className="w-full bg-green-900 text-green-400 font-bold py-3 rounded-xl text-center">
    ✅ Application Submitted! We will contact you soon.
  </div>
) : (
  <button
    onClick={handleSubmit}
    disabled={loading}
    className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2"
  >
    {loading ? "Submitting..." : <> Apply Now <IconArrowRight size={16} /></>}
  </button>
)}
        <button className="w-full border border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400 font-semibold py-3 rounded-xl transition duration-200">
          Download Syllabus
        </button>
        <p className="text-gray-500 text-xs text-center">
          By providing contact details, you agree to our{" "}
          <span className="text-green-400 cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function DevOpsCourseDetail({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug) || courses[0];
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Hero ── */}
      <div className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left Content */}
            <div className="flex-1">
              <Link href="/courses" className="inline-flex items-center gap-1 text-green-400 text-sm mb-4 hover:underline">
                ← Back to C ourses
              </Link>

              <span className="inline-block bg-green-900 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
               {course.emoji} {course.tag}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-400 text-lg mb-4">{course.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <IconStar key={i} size={16} className={i <= 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"} />
                  ))}
                </div>
                <span className="text-white font-semibold">{course.rating}</span>
                <span className="text-gray-400 text-sm">Ratings</span>
                <span className="text-gray-600">|</span>
                <IconUsers size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">{course.learners} Learners</span>
              </div>

              {/* Partners */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="text-gray-400 text-sm">In Collaboration With</span>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-900 text-blue-300 text-xs px-3 py-1 rounded-full font-semibold">Microsoft Azure</div>
                  <div className="bg-orange-900 text-orange-300 text-xs px-3 py-1 rounded-full font-semibold">AWS</div>
                  <div className="bg-blue-950 text-blue-300 text-xs px-3 py-1 rounded-full font-semibold">Docker</div>
                </div>
              </div>

              {/* Course Meta */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-6">
                <div className="text-center">
                  <p className="text-gray-400 text-xs mb-1 flex items-center justify-center gap-1"><IconCalendar size={14}/> Application Closes</p>
                  <p className="text-white font-bold text-sm">21 May, 2026</p>
                </div>
                <div className="text-center border-x border-gray-800">
                  <p className="text-gray-400 text-xs mb-1 flex items-center justify-center gap-1"><IconClock size={14}/> Program Duration</p>
                  <p className="text-white font-bold text-sm">{course.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-xs mb-1 flex items-center justify-center gap-1"><IconPlayerPlay size={14}/> Learning Format</p>
                  <p className="text-white font-bold text-sm">{course.format}</p>
                </div>
              </div>
            </div>

            {/* Right — Course Image */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="relative h-48 lg:h-56 w-full rounded-2xl overflow-hidden">
                <Image src={course.imgSrc} alt={course.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                    <IconPlayerPlay size={24} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">

        {/* Left — Main Content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Why Join */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Why Join This Program</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.highlights.map((h, i) => (
                <div key={i} className="bg-gray-900 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconCheck size={16} className="text-green-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">📚 Course Curriculum</h2>
            <div className="space-y-3">
              {course.topics.map((t, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-start gap-4 hover:border-green-800 transition">
                  <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 text-green-400 text-xs font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">{t.week}</p>
                    <p className="text-white font-semibold text-sm">{t.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mentor */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6"> Your Mentor</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-green-900 flex-shrink-0">
                <Image
                  src={course.mentorImage}
                  alt={course.mentor}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-bold">{course.mentor}</h3>
                <p className="text-green-400 text-sm mb-2">{course.mentorRole}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  8+ years of experience in Site Reliability Engineering and CloudOps. Has worked with top companies on large-scale cloud infrastructure. Expert in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines.
                </p>
                <div className="flex gap-3 mt-4 opacity-70 hover:opacity-100 transition">
                  <Link href={course.social.linkedin} target="_blank" className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-900">
                    <IconBrandLinkedin size={16} />
                  </Link>
                  <Link href={course.social.twitter} target="_blank" className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-900">
                    <IconBrandX size={16} />
                  </Link>
                  <Link href={course.social.instagram} target="_blank" className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-900">
                    <IconBrandInstagram size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Certificate */}
          <section>
            <div className="bg-gradient-to-r from-green-950 to-gray-900 border border-green-800 rounded-2xl p-6 flex items-center gap-6">
              <IconCertificate size={48} className="text-green-400 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-lg mb-1">DevOpsFarm Certificate</h3>
                <p className="text-gray-400 text-sm">
                  Upon successful completion, receive an industry-recognized certificate from DevOpsFarm validating your DevOps & Cloud skills.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Right — Sticky Form */}
        <div className="lg:col-span-1">
          <EnrollForm />
        </div>
      </div>
    </div>
  );
}