"use client";
import Navbar from "@/app/components/Navbar";

const skills = {
  "Languages": ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  "Frameworks": ["React", "Next.js", "Tailwind CSS", "Node.js"],
  "Tools": ["Git", "GitHub", "Figma", "VS Code", "Vercel"],
  "Concepts": ["REST APIs", "Responsive Design", "SEO", "Performance Optimization"],
};

const projects = [
  {
    name: "DevToolbox",
    desc: "A collection of free developer tools built with Next.js — JSON formatter, Base64 encoder, color converter, regex tester and more. Designed for AdSense monetization with clean UX.",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "/",
    color: "#00C896",
  },
];

const experience = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-employed",
    period: "2024 – Present",
    points: [
      "Building full-stack web apps using React and Next.js",
      "Designing and implementing UI with a focus on performance and accessibility",
      "Integrating Google AdSense and SEO best practices for monetization",
    ],
  },
];

export default function CV() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px", borderBottom: "1px solid var(--border)", paddingBottom: "32px" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "42px", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.0, marginBottom: "8px" }}>
              Your Name
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--accent)", fontWeight: 600, marginBottom: "12px" }}>
              Frontend Developer
            </p>
            <p style={{ color: "var(--text2)", fontSize: "14px", maxWidth: "460px", lineHeight: 1.7 }}>
              Passionate about building fast, accessible, and beautiful web experiences. 
              Currently focused on React &amp; Next.js projects with a strong eye for design and performance.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "right", fontSize: "13px", color: "var(--text2)" }}>
            <a href="mailto:you@email.com" style={{ color: "var(--accent)", textDecoration: "none" }}>you@email.com</a>
            <a href="https://github.com/yourusername" style={{ color: "var(--text2)", textDecoration: "none" }}>github.com/yourusername</a>
            <a href="https://linkedin.com/in/yourusername" style={{ color: "var(--text2)", textDecoration: "none" }}>linkedin.com/in/you</a>
            <span>Jamnagar, Gujarat, India</span>
          </div>
        </div>

        {/* Skills */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text3)", marginBottom: "16px" }}>
            Technical Skills
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "14px 16px" }}>
                <div style={{ fontSize: "11px", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {items.map(s => (
                    <span key={s} style={{ fontSize: "12px", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "6px", padding: "3px 10px", color: "var(--text)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text3)", marginBottom: "16px" }}>
            Projects
          </h2>
          {projects.map(p => (
            <div key={p.name} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color }} />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px" }}>{p.name}</span>
                </div>
                <a href={p.link} style={{ fontSize: "12px", color: "var(--accent)", textDecoration: "none" }}>View →</a>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.7, marginBottom: "12px" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: "11px", color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}30`, borderRadius: "5px", padding: "2px 8px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text3)", marginBottom: "16px" }}>
            Experience
          </h2>
          {experience.map(e => (
            <div key={e.role} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px" }}>{e.role}</span>
                <span style={{ fontSize: "12px", color: "var(--text3)" }}>{e.period}</span>
              </div>
              <div style={{ fontSize: "13px", color: "var(--accent)", marginBottom: "12px" }}>{e.company}</div>
              <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {e.points.map((pt, i) => (
                  <li key={i} style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.6 }}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education placeholder */}
        <section>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text3)", marginBottom: "16px" }}>
            Education
          </h2>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px" }}>Your Degree / Diploma</span>
              <span style={{ fontSize: "12px", color: "var(--text3)" }}>Year – Year</span>
            </div>
            <div style={{ fontSize: "13px", color: "var(--text2)" }}>Your College / University, Jamnagar, Gujarat</div>
          </div>
        </section>

        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: "var(--text3)" }}>devtoolbox.vercel.app/cv</span>
          <a href="#" onClick={() => window.print()} style={{ fontSize: "13px", color: "var(--accent)", textDecoration: "none", cursor: "pointer" }}>Print / Save as PDF →</a>
        </div>
      </main>
    </>
  );
}
