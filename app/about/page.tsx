import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CodeBench — Free Developer Tools",
  description: "Learn about CodeBench — a free collection of developer tools built for programmers, designers and students. No login, no installs, no paywalls.",
};

const tools = [
  { name: "JSON Formatter", desc: "Format, validate and minify JSON instantly" },
  { name: "Base64 Encoder", desc: "Encode and decode Base64 strings" },
  { name: "Word Counter", desc: "Count words, characters and reading time" },
  { name: "Color Converter", desc: "Convert HEX, RGB and HSL color formats" },
  { name: "Regex Tester", desc: "Test regular expressions with live highlights" },
  { name: "Markdown Previewer", desc: "Live Markdown to HTML renderer" },
  { name: "Password Generator", desc: "Generate secure random passwords" },
  { name: "Hash Generator", desc: "SHA-1, SHA-256, SHA-384 and SHA-512 hashes" },
  { name: "CSS Minifier", desc: "Remove whitespace and compress CSS" },
  { name: "Diff Checker", desc: "Compare two texts line by line" },
  { name: "JWT Decoder", desc: "Decode and inspect JWT tokens" },
  { name: "Timestamp Converter", desc: "Convert Unix timestamps to dates" },
  { name: "CSS Gradient Generator", desc: "Build CSS gradients visually" },
  { name: "Lorem Ipsum Generator", desc: "Generate placeholder text" },
];

const values = [
  { icon: "⚡", title: "Fast", desc: "Every tool loads instantly. No heavy frameworks on the client side, no waiting for servers to respond. Just open and use." },
  { icon: "🔒", title: "Private", desc: "All processing happens in your browser. The code you paste, the passwords you generate, the tokens you decode — none of it ever leaves your device." },
  { icon: "🆓", title: "Free Forever", desc: "CodeBench will always have a free tier. Developer tools should be accessible to everyone — students, freelancers and professionals alike." },
  { icon: "🎯", title: "No Bloat", desc: "No sign-up popups. No cookie consent walls every 5 seconds. No dark patterns. Just tools that work." },
];

export default function About() {
  return (
    <>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

        {/* Hero */}
        <div style={{ marginBottom: "48px", borderBottom: "1px solid var(--border)", paddingBottom: "40px" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: "16px" }}>
            About <span style={{ color: "var(--accent)" }}>CodeBench</span>
          </h1>
          <p style={{ color: "var(--text2)", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>
            CodeBench is a free, browser-based developer toolbox built for programmers, designers and students. It started as a simple idea — why do developers have to visit ten different websites to do ten simple tasks? Why are so many of those sites slow, cluttered with ads, or hidden behind sign-up walls?
          </p>
          <p style={{ color: "var(--text2)", fontSize: "15px", lineHeight: 1.9 }}>
            CodeBench brings the most commonly needed developer utilities into one clean, fast, always-free workspace. No login. No installs. No paywalls. Just open a tool and get to work.
          </p>
        </div>

        {/* Values */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
            Our Principles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {values.map(v => (
              <div key={v.title} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>{v.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", marginBottom: "8px", color: "var(--text)" }}>{v.title}</div>
                <div style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.7 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
            What&apos;s Inside
          </h2>
          <p style={{ color: "var(--text2)", fontSize: "14px", marginBottom: "20px", lineHeight: 1.7 }}>
            CodeBench currently has {tools.length} free tools, with more added regularly. Every tool works offline once the page is loaded — no internet connection required after the initial load.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)" }}>
            {tools.map((t, i) => (
              <div key={t.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: i % 2 === 0 ? "var(--bg2)" : "var(--bg3)" }}>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--text)" }}>{t.name}</span>
                <span style={{ fontSize: "12px", color: "var(--text3)" }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Built With */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>
            Built With
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Next.js", "TypeScript", "React", "Tailwind CSS", "Netlify", "Web Crypto API", "marked.js"].map(t => (
              <span key={t} style={{ fontSize: "13px", color: "var(--accent)", background: "rgba(0,200,150,0.08)", border: "1px solid rgba(0,200,150,0.2)", borderRadius: "6px", padding: "4px 12px" }}>{t}</span>
            ))}
          </div>
          <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.8, marginTop: "16px" }}>
            CodeBench is built with Next.js and TypeScript for fast, SEO-friendly pages. All cryptographic operations like hashing use the browser&apos;s built-in Web Crypto API — no third-party crypto libraries needed. The site is hosted on Netlify&apos;s global CDN for fast load times worldwide.
          </p>
        </section>

        {/* Who Built It */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>
            Who Built This
          </h2>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px" }}>
            <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.9, marginBottom: "12px" }}>
              CodeBench was designed and built by a frontend developer from Jamnagar, Gujarat, India. It started as a personal project to have a single go-to place for everyday developer tasks — and grew into a full toolbox.
            </p>
            <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.9, marginBottom: "12px" }}>
              The goal is to keep adding useful tools regularly — if there&apos;s something you&apos;d like to see on CodeBench, reach out through the contact page. Every suggestion is read and considered.
            </p>
            <a href="/contact" style={{ fontSize: "13px", color: "var(--accent)", textDecoration: "none" }}>Get in touch →</a>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { q: "Is CodeBench completely free?", a: "Yes. All 14 tools are completely free to use with no sign-up, no subscription and no hidden paywalls. The site is supported by non-intrusive Google AdSense advertisements." },
              { q: "Is my data safe when I use CodeBench tools?", a: "Yes. Every tool on CodeBench runs entirely in your browser using JavaScript. Nothing you type, paste or generate is sent to any server. Your data never leaves your device." },
              { q: "Do I need to create an account?", a: "No. CodeBench requires no account, no email address and no personal information. Just open a tool and use it." },
              { q: "How often are new tools added?", a: "We aim to add new tools regularly based on what developers find most useful. Follow us on social media or check back often to see what's new." },
              { q: "Can I suggest a new tool?", a: "Absolutely — we'd love to hear your ideas. Use the contact page to send a suggestion and we'll consider it for a future update." },
              { q: "Does CodeBench work offline?", a: "Once a tool page is loaded, most tools will continue to work without an internet connection since all processing is done in the browser. However, ads and fonts require an internet connection." },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px 18px" }}>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--text)", marginBottom: "8px" }}>{q}</div>
                <div style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "32px", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "16px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>
            Ready to get started?
          </div>
          <p style={{ color: "var(--text2)", fontSize: "14px", marginBottom: "20px" }}>
            Explore all {tools.length} free developer tools — no login required.
          </p>
          <a href="/" style={{ display: "inline-block", background: "var(--accent)", color: "#000", borderRadius: "8px", padding: "10px 24px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Browse All Tools →
          </a>
        </div>

      </main>
    </>
  );
}
