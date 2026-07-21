import type { Metadata } from "next";
import "./brochure.css";

export const metadata: Metadata = {
  title: "DevOps & GenAI Mastery Program | Upcoming Course - DevOpsFarm",
  description:
    "Industry-led, hands-on training in modern DevOps, SRE, CloudOps & Generative AI. A 4-month hybrid program by DevOpsFarm, Jodhpur — 2025 cohort enrolling now.",
  keywords:
    "DevOps course Jodhpur, GenAI training, SRE course, CloudOps training, DevOpsFarm upcoming course, DevOps GenAI Mastery Program",
  alternates: {
    canonical: "https://training.devopsfarm.in/courses/devops-genai-mastery",
  },
};

// Markup mirrors the DevOpsFarm brochure design. Kept as a single trusted,
// developer-authored HTML string (no user input) and rendered via
// dangerouslySetInnerHTML so the original SVG/markup is reproduced exactly;
// all styling is scoped to `.dof-brochure` in brochure.css.
const BROCHURE_HTML = `
<!-- ════ PAGE 1 — COVER ════ -->
<div class="page">
  <div class="dots"></div><div class="aurora"></div>

  <div class="hero">
    <div class="topbar">
      <div class="logorow">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="42" height="42" rx="9" fill="#0c0c1e"/>
          <path d="M21 21C15.5 13.5 5.5 13.5 5.5 21C5.5 28.5 15.5 28.5 21 21C26.5 13.5 36.5 13.5 36.5 21C36.5 28.5 26.5 28.5 21 21Z"
            stroke="url(#lgg)" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="lgg" x1="5.5" y1="13.5" x2="36.5" y2="28.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#9333ea"/>
              <stop offset="40%" stop-color="#6366f1"/>
              <stop offset="100%" stop-color="#3b82f6"/>
            </linearGradient>
          </defs>
        </svg>
        <div class="logotxt">Devops<span class="gt">Farm</span></div>
      </div>
      <div class="enrollbadge">⚡ 2025 Cohort — Enrolling Now</div>
    </div>

    <div class="eyebrow gt">// DevOpsFarm Presents</div>
    <h1 class="htitle">DevOps &amp; <span class="gt">GenAI</span><br>Mastery Program</h1>
    <p class="hsub">Industry-led, hands-on training in modern DevOps, SRE, CloudOps &amp; Generative AI — designed for working professionals and ambitious students alike.</p>

    <a href="/contact" class="cta-btn">Enroll Now — 2025 Cohort <span aria-hidden="true">→</span></a>

    <div class="pills">
      <div class="pill hl">🤖 GenAI in DevOps</div>
      <div class="pill">☁️ Cloud Native</div>
      <div class="pill">⚙️ SRE / Platform Eng</div>
      <div class="pill">🔁 CI/CD Pipelines</div>
      <div class="pill">🐳 Docker &amp; Kubernetes</div>
      <div class="pill">📊 Observability</div>
      <div class="pill">🏗️ IaC / Terraform</div>
      <div class="pill">🔒 DevSecOps</div>
    </div>

    <div class="stats">
      <div class="sbox"><div class="snum gt">4</div><div class="slbl">Months</div></div>
      <div class="sbox"><div class="snum gt">36+</div><div class="slbl">Yrs Combined XP</div></div>
      <div class="sbox"><div class="snum gt">3</div><div class="slbl">Industry Experts</div></div>
      <div class="sbox"><div class="snum gt">100%</div><div class="slbl">Hands-on Projects</div></div>
    </div>
  </div>

  <div class="tstrip">
    <span class="tlbl">Tech Stack</span>
    <span class="tchip">Linux</span><span class="tchip">Docker</span><span class="tchip">Kubernetes</span>
    <span class="tchip">Terraform</span><span class="tchip">Ansible</span><span class="tchip">AWS</span>
    <span class="tchip">Azure</span><span class="tchip">GCP</span><span class="tchip">Jenkins</span>
    <span class="tchip">GitHub Actions</span><span class="tchip">Prometheus</span><span class="tchip">Grafana</span>
    <span class="tchip">LLMs / ChatGPT</span><span class="tchip">Python</span>
  </div>

  <div class="term">
    <div class="tbar">
      <div class="dot dr"></div><div class="dot dy"></div><div class="dot dg"></div>
      <span class="ttl">devopsfarm — bash — 80×20</span>
    </div>
    <div class="tbody">
      <div><span class="tp">student@devopsfarm:~$</span> <span class="tc">kubectl get career --namespace=future</span></div>
      <div class="to">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STATUS&nbsp;&nbsp;&nbsp;&nbsp; READINESS&nbsp;&nbsp; SALARY-BOOST</div>
      <div class="to">devops-engineer&nbsp;&nbsp; <span class="th">Running</span>&nbsp;&nbsp;&nbsp;&nbsp; 100%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +45%</div>
      <div class="to">sre-engineer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="th">Running</span>&nbsp;&nbsp;&nbsp;&nbsp; 100%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +52%</div>
      <div class="to">platform-engineer&nbsp; <span class="th">Running</span>&nbsp;&nbsp;&nbsp;&nbsp; 100%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +58%</div>
      <div>&nbsp;</div>
      <div><span class="tp">student@devopsfarm:~$</span> <span class="tc">enroll --batch=2025 --mode=hybrid --timing=flexible</span></div>
      <div class="to">✔ Enrollment initiated · Duration: 4 months · Batches: Early AM &amp; Late PM</div>
      <div><span class="tp">student@devopsfarm:~$</span> <span class="cursor"></span></div>
    </div>
  </div>

  <div class="pfoot">
    <div class="pfoot-brand">DevOpsFarm — Jodhpur, Rajasthan</div>
    <div class="pfoot-url gt">training.devopsfarm.in</div>
    <div class="pfoot-num">01 / 04</div>
  </div>
</div>

<!-- ════ PAGE 2 — CURRICULUM ════ -->
<div class="page">
  <div class="dots"></div><div class="aurora"></div>
  <div class="p2">
    <div class="sec-eye gt">// Course Structure</div>
    <div class="sec-ttl">4-Month Curriculum Roadmap</div>

    <div class="pgrid">
      <div class="pcard">
        <div class="pnum gt">PHASE 01 — MONTH 1</div>
        <div class="pname">Foundations &amp; Linux Core</div>
        <div class="pdur">⏱ 4 weeks · Live Classes + Labs</div>
        <ul class="tlist">
          <li>Linux administration &amp; shell scripting</li>
          <li>Networking fundamentals for DevOps</li>
          <li>Git &amp; GitHub — branching strategies</li>
          <li>Python scripting for automation</li>
          <li>Containerization with Docker deep dive</li>
          <li>Intro to Cloud (AWS / Azure / GCP)</li>
        </ul>
      </div>
      <div class="pcard">
        <div class="pnum gt">PHASE 02 — MONTH 2</div>
        <div class="pname">CI/CD, IaC &amp; Orchestration</div>
        <div class="pdur">⏱ 4 weeks · Projects + Workshops</div>
        <ul class="tlist">
          <li>Jenkins, GitHub Actions &amp; GitLab CI</li>
          <li>Kubernetes — architecture to production</li>
          <li>Helm charts &amp; package management</li>
          <li>Terraform for infrastructure as code</li>
          <li>Ansible for configuration management</li>
          <li>Build multi-stage CI/CD pipelines</li>
        </ul>
      </div>
      <div class="pcard">
        <div class="pnum gt">PHASE 03 — MONTH 3</div>
        <div class="pname">SRE, CloudOps &amp; Observability</div>
        <div class="pdur">⏱ 4 weeks · Real-world SRE Projects</div>
        <ul class="tlist">
          <li>SRE principles: SLIs, SLOs, Error Budgets</li>
          <li>Prometheus, Grafana &amp; AlertManager</li>
          <li>Distributed tracing — OpenTelemetry</li>
          <li>Cloud cost optimisation &amp; FinOps</li>
          <li>Disaster recovery &amp; chaos engineering</li>
          <li>DevSecOps — SAST, DAST, secret scanning</li>
        </ul>
      </div>
      <div class="pcard">
        <div class="pnum gt">PHASE 04 — MONTH 4</div>
        <div class="pname">GenAI in DevOps + Capstone</div>
        <div class="pdur">⏱ 4 weeks · Capstone Project</div>
        <ul class="tlist">
          <li>LLMs &amp; prompt engineering for DevOps</li>
          <li>AI-powered incident response &amp; RCA</li>
          <li>Copilots in code review &amp; pipelines</li>
          <li>MLOps fundamentals &amp; model deployment</li>
          <li>Building AI-augmented runbooks</li>
          <li>Capstone: full pipeline with GenAI layer</li>
        </ul>
      </div>
    </div>

    <div class="drow">
      <div class="dcard"><div class="dico">🌐</div><div class="dlbl">Hybrid Delivery</div><div class="dsub">Online &amp; Offline both available</div></div>
      <div class="dcard"><div class="dico">🕐</div><div class="dlbl">Flexible Timings</div><div class="dsub">Early morning &amp; late evening batches</div></div>
      <div class="dcard"><div class="dico">🛠️</div><div class="dlbl">Hands-on Projects</div><div class="dsub">Real-world labs every week</div></div>
    </div>

    <div class="gaibanner">
      <div class="gaiico">🤖</div>
      <div>
        <div class="gaittl">GenAI-Augmented DevOps — What Sets This Course Apart</div>
        <div class="gaidesc">While most DevOps courses stop at pipelines, this program goes further — you'll wield the latest GenAI tools to write smarter pipelines, auto-generate IaC, perform AI-assisted incident analysis, build intelligent runbooks, and deploy LLM-powered bots for on-call automation. This is the future already running in production at top tech firms.</div>
        <div class="gaitags">
          <span class="gaitag">ChatGPT / GPT-4o</span><span class="gaitag">GitHub Copilot</span>
          <span class="gaitag">Claude AI</span><span class="gaitag">LangChain</span>
          <span class="gaitag">AI Runbooks</span><span class="gaitag">MLOps</span>
          <span class="gaitag">Prompt Engineering</span>
        </div>
      </div>
    </div>
  </div>
  <div class="pfoot">
    <div class="pfoot-brand">DevOpsFarm — Jodhpur, Rajasthan</div>
    <div class="pfoot-url gt">training.devopsfarm.in</div>
    <div class="pfoot-num">02 / 04</div>
  </div>
</div>

<!-- ════ PAGE 3 — TRAINERS ════ -->
<div class="page">
  <div class="dots"></div><div class="aurora"></div>
  <div class="p3">
    <div class="sec-eye gt">// Meet Your Trainers</div>
    <div class="sec-ttl">Learn from Those Who Build It Daily</div>

    <div class="tcards">
      <div class="tcard">
        <div class="tavatar">NY</div>
        <div>
          <div class="tname">Nikhil Yadav</div>
          <div class="texp gt">⚡ 14 Years Industry Experience</div>
          <div class="tbio">Full Stack Engineer turned AI/ML practitioner with 14 years building and scaling production systems. Nikhil combines deep software engineering roots with hands-on machine learning and AI-driven automation — giving students a real-world perspective on how GenAI integrates into modern DevOps workflows.</div>
          <div class="tcos">
            <span class="co c">⚡ Nevikenz (Current)</span>
            <span class="co">Anand Rathi</span>
          </div>
          <div class="echips">
            <span class="ech">Full Stack</span><span class="ech">AI / ML</span>
            <span class="ech">Python</span><span class="ech">GenAI Integration</span><span class="ech">System Design</span>
          </div>
        </div>
      </div>

      <div class="tcard">
        <div class="tavatar">OP</div>
        <div>
          <div class="tname">Omprakash Paliwal</div>
          <div class="texp gt">⚡ 13 Years Industry Experience</div>
          <div class="tbio">Seasoned SRE and DevOps architect with 13 years across enterprise software, defence R&amp;D, and product startups. From Java backend at Mentor Graphics to SRE and cloud at DigitalAI — he teaches reliability engineering the way it's actually practised: with on-call pagers, error budgets, and real incident playbooks.</div>
          <div class="tcos">
            <span class="co c">⚡ DigitalAI (Current)</span>
            <span class="co">Mentor Graphics</span><span class="co">CDAC</span><span class="co">Aricent</span>
          </div>
          <div class="echips">
            <span class="ech">SRE</span><span class="ech">DevOps</span>
            <span class="ech">Java</span><span class="ech">Cloud Architecture</span><span class="ech">Kubernetes</span>
          </div>
        </div>
      </div>

      <div class="tcard">
        <div class="tavatar">DP</div>
        <div>
          <div class="tname">Dinesh Paliwal</div>
          <div class="texp gt">⚡ 9 Years Industry Experience</div>
          <div class="tbio">DevOps and Cloud engineer currently building mission-critical systems at JP Morgan Chase, Bangalore. His journey from TCS to Wipro to one of the world's largest banks gives sharp, practical insight into enterprise-scale DevOps, security compliance, and cloud-native infrastructure — exactly the landscape students will enter.</div>
          <div class="tcos">
            <span class="co c">⚡ JPMC, Bangalore (Current)</span>
            <span class="co">Wipro</span><span class="co">TCS</span>
          </div>
          <div class="echips">
            <span class="ech">DevOps</span><span class="ech">Cloud AWS/Azure</span>
            <span class="ech">DevSecOps</span><span class="ech">Enterprise CI/CD</span>
          </div>
        </div>
      </div>
    </div>

    <div class="callout">
      <div class="cnum gt">36</div>
      <div class="ctxt">
        <strong>Years of combined industry experience — across startups, MNCs &amp; global banks</strong>
        All three trainers are currently active working professionals. What they teach on weekends, they practice on weekdays at Nevikenz, DigitalAI and JP Morgan Chase. You get knowledge that is current, tested, and production-proven.
      </div>
    </div>
  </div>
  <div class="pfoot">
    <div class="pfoot-brand">DevOpsFarm — Jodhpur, Rajasthan</div>
    <div class="pfoot-url gt">training.devopsfarm.in</div>
    <div class="pfoot-num">03 / 04</div>
  </div>
</div>

<!-- ════ PAGE 4 — DETAILS + CTA ════ -->
<div class="page">
  <div class="dots"></div><div class="aurora"></div>
  <div class="p4">
    <div class="sec-eye gt">// Who Is This For</div>
    <div class="sec-ttl">Built for Builders &amp; Learners</div>

    <div class="agrid">
      <div class="acard"><div class="aico">👨‍💻</div><div class="attl">Working Professionals</div><div class="asub">Upskill without quitting. Flexible timings designed for you.</div></div>
      <div class="acard"><div class="aico">🎓</div><div class="attl">Students &amp; Freshers</div><div class="asub">Get industry-ready with hands-on projects and real tools.</div></div>
      <div class="acard"><div class="aico">🚀</div><div class="attl">Career Switchers</div><div class="asub">Move into DevOps / SRE / Cloud from dev, ops or support.</div></div>
    </div>

    <div class="twocol">
      <div class="icard">
        <div class="ittl gt">// Program Details</div>
        <div class="irow"><span class="ikey">Duration</span><span class="ival">4 Months</span></div>
        <div class="irow"><span class="ikey">Format</span><span class="ival">Online + Offline (Hybrid)</span></div>
        <div class="irow"><span class="ikey">Morning Batch</span><span class="ival">6:00 AM – 8:00 AM</span></div>
        <div class="irow"><span class="ikey">Evening Batch</span><span class="ival">8:00 PM – 10:00 PM</span></div>
        <div class="irow"><span class="ikey">Mode</span><span class="ival">Live Classes + Recordings</span></div>
        <div class="irow"><span class="ikey">Projects</span><span class="ival">Weekly Labs + Capstone</span></div>
        <div class="irow"><span class="ikey">Certificate</span><span class="ival">DevOpsFarm Certified</span></div>
      </div>

      <div class="icard">
        <div class="ittl gt">// What You'll Achieve</div>
        <div class="olist">
          <div class="oi"><div class="odot">✓</div><span>Deploy and manage production-grade Kubernetes clusters</span></div>
          <div class="oi"><div class="odot">✓</div><span>Build fully automated CI/CD pipelines from scratch</span></div>
          <div class="oi"><div class="odot">✓</div><span>Apply SRE principles — SLOs, SLIs &amp; on-call practices</span></div>
          <div class="oi"><div class="odot">✓</div><span>Use GenAI tools to accelerate DevOps workflows</span></div>
          <div class="oi"><div class="odot">✓</div><span>Provision multi-cloud infra with Terraform</span></div>
          <div class="oi"><div class="odot">✓</div><span>Build a portfolio of real-world DevOps projects</span></div>
          <div class="oi"><div class="odot">✓</div><span>Interview-ready for DevOps, SRE &amp; Platform Eng roles</span></div>
        </div>
      </div>
    </div>

    <div class="cta">
      <div>
        <div class="ctattl">Ready to <span class="gt">level up?</span></div>
        <div class="ctasub">Join the next cohort — limited seats per batch to ensure quality mentorship.</div>
        <div class="ctacts">
          <div class="ctact"><span>📞</span><a href="tel:+919971566583">+91 99715 66583</a></div>
          <div class="ctact"><span>📧</span><a href="mailto:query@devopsfarm.in">query@devopsfarm.in</a></div>
          <div class="ctact"><span>📍</span><span>Bhaskar Circle, Ratanada, Jodhpur (Raj.)</span></div>
          <div class="ctact"><span>💬</span><a href="https://wa.link/manbm0" target="_blank" rel="noopener noreferrer">WhatsApp: wa.link/manbm0</a></div>
          <div class="ctact"><span>🌐</span><a href="/">training.devopsfarm.in</a></div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;align-items:center;gap:7px;flex-shrink:0;">
        <div style="background:#fff;border-radius:11px;padding:9px;width:88px;height:88px;display:flex;align-items:center;justify-content:center;">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="18" height="18" rx="2" fill="#070712"/>
            <rect x="5" y="5" width="12" height="12" rx="1" fill="#fff"/>
            <rect x="8" y="8" width="6" height="6" rx="1" fill="#070712"/>
            <rect x="50" y="2" width="18" height="18" rx="2" fill="#070712"/>
            <rect x="53" y="5" width="12" height="12" rx="1" fill="#fff"/>
            <rect x="56" y="8" width="6" height="6" rx="1" fill="#070712"/>
            <rect x="2" y="50" width="18" height="18" rx="2" fill="#070712"/>
            <rect x="5" y="53" width="12" height="12" rx="1" fill="#fff"/>
            <rect x="8" y="56" width="6" height="6" rx="1" fill="#070712"/>
            <rect x="24" y="4" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="30" y="4" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="36" y="4" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="42" y="4" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="24" y="10" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="36" y="10" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="42" y="10" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="30" y="16" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="4" y="24" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="10" y="24" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="16" y="30" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="4" y="36" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="10" y="42" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="24" y="24" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="30" y="30" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="36" y="24" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="42" y="30" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="48" y="24" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="56" y="24" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="62" y="24" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="36" y="36" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="48" y="36" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="62" y="36" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="24" y="54" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="30" y="60" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="36" y="54" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="42" y="60" width="4" height="4" rx="1" fill="#7c3aed"/>
            <rect x="48" y="54" width="4" height="4" rx="1" fill="#6366f1"/>
            <rect x="56" y="60" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="62" y="54" width="4" height="4" rx="1" fill="#7c3aed"/>
          </svg>
        </div>
        <div style="font-size:7.5px;color:#7b74b8;text-align:center;font-family:'JetBrains Mono',monospace;line-height:1.5;">Scan to visit<br>training site</div>
      </div>
    </div>

    <div class="socrow">
      <span style="font-size:8.5px;color:var(--muted);">Follow us:</span>
      <a class="soc h" href="https://www.linkedin.com/company/devopsfarm" target="_blank" rel="noopener noreferrer">linkedin.com/company/devopsfarm</a>
      <a class="soc" href="https://twitter.com/DevopsFarm" target="_blank" rel="noopener noreferrer">@DevopsFarm</a>
      <a class="soc" href="https://www.youtube.com/@DevopsFarm" target="_blank" rel="noopener noreferrer">youtube.com/@DevopsFarm</a>
      <a class="soc" href="https://www.instagram.com/devopsfarm" target="_blank" rel="noopener noreferrer">instagram.com/devopsfarm</a>
    </div>
  </div>

  <div class="pfoot">
    <div class="pfoot-brand">DevOpsFarm — Jodhpur, Rajasthan</div>
    <div class="pfoot-url gt">training.devopsfarm.in</div>
    <div class="pfoot-num">04 / 04</div>
  </div>
</div>
`;

export default function DevOpsGenAIMasteryCoursePage() {
  return (
    <div
      className="dof-brochure"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: BROCHURE_HTML }}
    />
  );
}
