"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = "idle" | "sending" | "success" | "error";

const topics = [
  { icon: "🛠️", title: "Tool Suggestion", desc: "Have an idea for a new developer tool?" },
  { icon: "🐛", title: "Bug Report", desc: "Found something that isn't working?" },
  { icon: "🤝", title: "Collaboration", desc: "Want to contribute or partner?" },
  { icon: "📢", title: "General Feedback", desc: "Feedback, compliments or questions." },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValid = name.trim() && email.trim() && message.trim();

  const handleSubmit = async () => {
    if (!isValid || status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject || "CodeBench Contact",
          message: message,
          reply_to: email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px", borderBottom: "1px solid var(--border)", paddingBottom: "32px" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, letterSpacing: "-1px", marginBottom: "12px" }}>
            Get in <span style={{ color: "var(--accent)" }}>Touch</span>
          </h1>
          <p style={{ color: "var(--text2)", fontSize: "15px", lineHeight: 1.8 }}>
            Have a tool suggestion, found a bug, or just want to say hello? We read every message and aim to reply within 2 business days.
          </p>
        </div>

        {/* Topic Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "32px" }}>
          {topics.map(t => (
            <div
              key={t.title}
              onClick={() => setSubject(t.title)}
              style={{
                background: subject === t.title ? "rgba(0,200,150,0.08)" : "var(--bg2)",
                border: `1px solid ${subject === t.title ? "var(--accent)" : "var(--border)"}`,
                borderRadius: "10px",
                padding: "16px",
                cursor: "pointer",
                transition: "all 0.15s",
                userSelect: "none",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "8px" }}>{t.icon}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}>{t.title}</div>
              <div style={{ fontSize: "12px", color: "var(--text2)", lineHeight: 1.5 }}>{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Success State */}
        {status === "success" ? (
          <div style={{ background: "rgba(0,200,150,0.08)", border: "1px solid rgba(0,200,150,0.3)", borderRadius: "16px", padding: "48px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>
              Message Sent!
            </div>
            <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
              Thanks for reaching out! We&apos;ll get back to you within 2 business days.
            </p>
            <button className="btn-ghost" onClick={() => setStatus("idle")}>
              Send Another Message
            </button>
          </div>
        ) : (
          /* Form */
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>
              Send a Message
            </h2>

            <form ref={formRef} onSubmit={e => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <div className="label" style={{ marginBottom: "6px" }}>Your Name *</div>
                  <input
                    name="from_name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="John Doe"
                    disabled={status === "sending"}
                  />
                </div>
                <div>
                  <div className="label" style={{ marginBottom: "6px" }}>Email Address *</div>
                  <input
                    type="email"
                    name="from_email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    disabled={status === "sending"}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <div className="label" style={{ marginBottom: "6px" }}>Subject</div>
                <input
                  name="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Tool suggestion, bug report, feedback..."
                  disabled={status === "sending"}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <div className="label" style={{ marginBottom: "6px" }}>Message *</div>
                <textarea
                  name="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                  disabled={status === "sending"}
                />
                <div style={{ fontSize: "11px", color: "var(--text3)", marginTop: "4px", textAlign: "right" }}>
                  {message.length} characters
                </div>
              </div>

              {/* Error */}
              {status === "error" && (
                <div style={{ marginBottom: "16px", padding: "12px 14px", background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.3)", borderRadius: "8px", fontSize: "13px", color: "#ff6b6b" }}>
                  ⚠ {errorMsg}
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "var(--text3)" }}>* Required fields</span>
                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={!isValid || status === "sending"}
                  style={{
                    padding: "10px 24px",
                    fontSize: "14px",
                    opacity: (!isValid || status === "sending") ? 0.5 : 1,
                    cursor: (!isValid || status === "sending") ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span style={{ display: "inline-block", width: "14px", height: "14px", border: "2px solid #000", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.6s linear infinite" }} />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Direct Contact */}
        <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {[
            { icon: "📧", label: "Email", value: "codeBench9632@outlook.com", href: "mailto:your@email.com" },
            { icon: "🌐", label: "Website", value: "codebench.online", href: "https://codebench.online" },
          ].map(c => (
            <a key={c.label} href={c.href} style={{ display: "flex", alignItems: "center", gap: "14px", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px", textDecoration: "none" }}>
              <span style={{ fontSize: "22px" }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: "11px", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{c.label}</div>
                <div style={{ fontSize: "13px", color: "var(--accent)" }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>
            Common Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { q: "How quickly will I get a reply?", a: "We aim to reply to all messages within 2 business days. Tool suggestions and bug reports are prioritised." },
              { q: "Can I suggest a new tool?", a: "Yes! Tool suggestions are always welcome. Describe what the tool should do and why it would be useful for developers." },
              { q: "How do I report a bug?", a: "Describe what tool you were using, what you expected to happen, and what actually happened. A screenshot helps if possible." },
              { q: "Is CodeBench open source?", a: "We are considering open-sourcing the project in the future. Stay tuned for updates." },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px 18px" }}>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--text)", marginBottom: "6px" }}>{q}</div>
                <div style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>

      </main>
    </>
  );
}
