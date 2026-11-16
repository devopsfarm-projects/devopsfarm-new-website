
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  MessageSquare,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
  Terminal,
  Globe,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import "./genai-training.css";

export const metadata: Metadata = {
  title: "Generative AI Training | DevOpsFarm",
  description:
    "Learn Generative AI, prompt engineering, LLMs, RAG, AI agents and real-world AI application development with DevOpsFarm.",
  keywords: [
    "Generative AI Training",
    "GenAI Course",
    "Prompt Engineering",
    "LLM Training",
    "RAG",
    "AI Agents",
    "DevOpsFarm",
  ],
  alternates: {
    canonical: "https://training.devopsfarm.in/genai-training",
  },
};

const modules = [
  {
    number: "01",
    title: "Python for AI",
    description:
      "Build a strong foundation in Python programming and the libraries used in AI development.",
    topics: ["Python fundamentals", "Functions & OOP", "APIs", "Data handling"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Generative AI Fundamentals",
    description:
      "Understand how modern generative AI models work and how to use them effectively.",
    topics: ["Introduction to GenAI", "LLMs", "Transformers", "Tokens & Embeddings"],
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Prompt Engineering",
    description:
      "Learn to communicate with AI models and generate accurate, useful outputs.",
    topics: ["Prompt design", "Few-shot prompting", "System prompts", "AI workflows"],
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "LLMs & AI APIs",
    description:
      "Work with leading AI models and integrate them into real applications.",
    topics: ["OpenAI API", "LLM integration", "Model parameters", "Structured outputs"],
    icon: Cpu,
  },
  {
    number: "05",
    title: "RAG & Vector Databases",
    description:
      "Build AI applications that can retrieve information from your own documents and data.",
    topics: ["RAG architecture", "Vector embeddings", "Semantic search", "Vector databases"],
    icon: Database,
  },
  {
    number: "06",
    title: "AI Agents & Automation",
    description:
      "Create intelligent AI-powered workflows that can use tools and perform tasks.",
    topics: ["AI agents", "Tool calling", "Agent workflows", "Automation"],
    icon: Workflow,
  },
];

const tools = [
  "Python",
  "ChatGPT",
  "OpenAI API",
  "LangChain",
  "Hugging Face",
  "Vector Databases",
  "Git & GitHub",
  "VS Code",
];

const projects = [
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description:
      "Build an intelligent conversational assistant powered by large language models.",
  },
  {
    icon: Database,
    title: "Document Q&A with RAG",
    description:
      "Create an application that answers questions using your own documents and data.",
  },
  {
    icon: Workflow,
    title: "AI Automation Agent",
    description:
      "Develop an AI agent that uses tools and automates practical workflows.",
  },
];

const benefits = [
  "Hands-on learning approach",
  "Practical real-world projects",
  "Industry-relevant AI tools",
  "Step-by-step guided learning",
  "Learn to build AI applications",
  "Career-oriented skill development",
];

export default function GenAITrainingPage() {
  return (
    <main className="genai-page">
      {/* HERO */}
      <section className="genai-hero">
        <div className="genai-orb genai-orb-one" />
        <div className="genai-orb genai-orb-two" />

        <div className="genai-container genai-hero-grid">
          <div className="genai-hero-content">
            <div className="genai-eyebrow">
              <Sparkles size={15} />
              THE FUTURE IS GENERATIVE AI
            </div>

            <h1>
              Build the Future
              <br />
              with <span>Generative AI</span>
            </h1>

            <p className="genai-hero-description">
              Move beyond simply using AI. Learn to build intelligent
              applications, work with LLMs, create AI agents and solve
              real-world problems with Generative AI.
            </p>

            <div className="genai-hero-buttons">
              <Link href="/contact" className="genai-primary-btn">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <a href="#curriculum" className="genai-secondary-btn">
                Explore Curriculum
              </a>
            </div>

            <div className="genai-hero-points">
              <span><CheckCircle2 /> Practical Learning</span>
              <span><CheckCircle2 /> Real Projects</span>
              <span><CheckCircle2 /> Industry Tools</span>
            </div>
          </div>

          <div className="genai-visual">
            <div className="genai-visual-glow" />
            <div className="genai-ai-card">
              <div className="genai-ai-card-top">
                <span className="genai-live-dot" />
                GENERATIVE AI LAB
                <span className="genai-card-menu">•••</span>
              </div>

              <div className="genai-brain">
                <BrainCircuit size={100} strokeWidth={1.1} />
                <div className="genai-brain-ring ring-one" />
                <div className="genai-brain-ring ring-two" />
              </div>

              <div className="genai-ai-label">
                <span>✦</span> Intelligence meets Innovation
              </div>

              <div className="genai-code-card">
                <div className="genai-code-heading">
                  <Terminal size={15} /> AI Assistant
                  <span>● Online</span>
                </div>
                <div className="genai-code-line">
                  <span>01</span> Build with Generative AI
                </div>
                <div className="genai-code-line">
                  <span>02</span> Connect intelligent models
                </div>
                <div className="genai-code-line">
                  <span>03</span> Create real-world solutions
                </div>
              </div>
            </div>

            <div className="genai-float-card float-left">
              <Bot size={20} />
              <div>
                <strong>AI Agents</strong>
                <small>Build intelligent systems</small>
              </div>
            </div>

            <div className="genai-float-card float-right">
              <Zap size={20} />
              <div>
                <strong>LLM Powered</strong>
                <small>Next-gen applications</small>
              </div>
            </div>
          </div>
        </div>

        <div className="genai-container genai-stats">
          <div><strong>GenAI</strong><span>Core Concepts</span></div>
          <div><strong>LLMs</strong><span>Model Integration</span></div>
          <div><strong>RAG</strong><span>Knowledge Systems</span></div>
          <div><strong>AI Agents</strong><span>Smart Automation</span></div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="genai-section genai-about">
        <div className="genai-container genai-about-grid">
          <div>
            <div className="genai-section-tag">WHY GENERATIVE AI?</div>
            <h2>
              Don't Just Use AI.
              <br />
              <span>Learn to Build It.</span>
            </h2>
          </div>

          <div className="genai-about-text">
            <p>
              Generative AI is changing how businesses create content,
              develop software, analyze information and automate work.
              Organizations are exploring intelligent applications powered
              by large language models and AI agents.
            </p>
            <p>
              This training is designed to help learners understand the
              technology behind Generative AI and develop practical skills
              to build AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section className="genai-section genai-learn">
        <div className="genai-container">
          <div className="genai-section-heading">
            <div className="genai-section-tag">YOUR LEARNING JOURNEY</div>
            <h2>What Will You <span>Learn?</span></h2>
            <p>
              Develop the skills to move from AI curiosity to practical
              application development.
            </p>
          </div>

          <div className="genai-learn-grid">
            {[
              {
                icon: BrainCircuit,
                title: "Understand GenAI",
                desc: "Explore generative models, LLMs and the technology behind modern AI.",
              },
              {
                icon: MessageSquare,
                title: "Master Prompting",
                desc: "Design effective prompts and get better results from AI models.",
              },
              {
                icon: Database,
                title: "Build RAG Systems",
                desc: "Connect language models with external knowledge and documents.",
              },
              {
                icon: Bot,
                title: "Create AI Agents",
                desc: "Build intelligent systems that can use tools and automate tasks.",
              },
              {
                icon: Code2,
                title: "Develop AI Apps",
                desc: "Integrate AI APIs into useful applications using Python.",
              },
              {
                icon: Rocket,
                title: "Work on Projects",
                desc: "Apply your learning by developing practical AI-powered solutions.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="genai-learn-card" key={index}>
                  <div className="genai-icon-box"><Icon size={25} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="genai-section genai-curriculum" id="curriculum">
        <div className="genai-container">
          <div className="genai-section-heading">
            <div className="genai-section-tag">COURSE ROADMAP</div>
            <h2>Explore the <span>Curriculum</span></h2>
            <p>
              A structured learning path covering the foundations and
              practical applications of Generative AI.
            </p>
          </div>

          <div className="genai-module-grid">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <article className="genai-module-card" key={module.number}>
                  <div className="genai-module-top">
                    <span>{module.number}</span>
                    <Icon size={25} />
                  </div>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <ul>
                    {module.topics.map((topic) => (
                      <li key={topic}>
                        <CheckCircle2 size={15} /> {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="genai-section genai-tools">
        <div className="genai-container genai-tools-grid">
          <div>
            <div className="genai-section-tag">TECHNOLOGY STACK</div>
            <h2>
              Learn the Tools
              <br />
              <span>Powering AI</span>
            </h2>
            <p>
              Get familiar with popular tools, frameworks and platforms
              used to develop modern Generative AI applications.
            </p>
            <Link href="/contact" className="genai-text-link">
              Start Learning <ArrowRight size={17} />
            </Link>
          </div>

          <div className="genai-tool-list">
            {tools.map((tool, index) => (
              <div className="genai-tool-chip" key={tool}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {tool}
                <CheckCircle2 size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="genai-section genai-projects">
        <div className="genai-container">
          <div className="genai-section-heading">
            <div className="genai-section-tag">LEARN BY BUILDING</div>
            <h2>Build Real-World <span>AI Projects</span></h2>
            <p>
              Put your knowledge into practice by exploring practical
              AI application ideas.
            </p>
          </div>

          <div className="genai-project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="genai-project-card" key={project.title}>
                  <div className="genai-project-icon"><Icon size={30} /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>Hands-on learning <ArrowRight size={15} /></span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="genai-section genai-benefits">
        <div className="genai-container genai-benefit-grid">
          <div>
            <div className="genai-section-tag">THE DEVOPSFARM APPROACH</div>
            <h2>
              Learn. Build.
              <br />
              <span>Innovate.</span>
            </h2>
            <p>
              Focus on understanding concepts, developing practical skills
              and applying Generative AI to real-world challenges.
            </p>
          </div>

          <div className="genai-benefit-list">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <CheckCircle2 size={19} /> {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="genai-final-cta">
        <div className="genai-container genai-cta-inner">
          <div className="genai-cta-icon"><GraduationCap size={35} /></div>
          <div>
            <div className="genai-section-tag">YOUR AI JOURNEY STARTS HERE</div>
            <h2>Ready to Build Something <span>Intelligent?</span></h2>
            <p>
              Take the next step towards learning Generative AI.
              Connect with our team to know more about the training and enrollment.
            </p>
          </div>
          <Link href="/contact" className="genai-primary-btn">
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="genai-contact-strip">
        <div className="genai-container genai-contact-inner">
          <span><Globe size={17} /> DevOpsFarm</span>
          <a href="mailto:query@devopsfarm.in">
            <MessageSquare size={16} /> query@devopsfarm.in
          </a>
          <a href="tel:+919971566583">
            <ShieldCheck size={16} /> +91 99715 66583
          </a>
          <a
            href="https://wa.link/manbm0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Bot size={17} /> WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
