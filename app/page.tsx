import Link from "next/link";
import Navbar from "./components/Navbar";
import AdBanner from "./components/AdBanner";

const tools = [
  { slug: "json", icon: "{ }", name: "JSON Formatter", desc: "Format, minify & validate JSON", color: "#00C896" },
  { slug: "base64", icon: "b64", name: "Base64 Encoder", desc: "Encode / decode Base64 strings", color: "#6C8EFF" },
  { slug: "wordcount", icon: "Aa", name: "Word Counter", desc: "Words, characters & reading time", color: "#FF8C5A" },
  { slug: "color", icon: "◉", name: "Color Converter", desc: "HEX ↔ RGB ↔ HSL converter", color: "#FF5FA0" },
  { slug: "regex", icon: ".*", name: "Regex Tester", desc: "Test regex with live highlights", color: "#C77DFF" },
  { slug: "markdown", icon: "#", name: "Markdown Preview", desc: "Live Markdown to HTML renderer", color: "#6C8EFF" },
  { slug: "password", icon: "**", name: "Password Generator", desc: "Secure random password creator", color: "#00C896" },
  { slug: "hash", icon: "###", name: "Hash Generator", desc: "SHA-1, SHA-256, SHA-384, SHA-512", color: "#FF8C5A" },
  { slug: "cssminifier", icon: ".{}",name: "CSS Minifier", desc: "Remove whitespace from CSS", color: "#FF5FA0" },
  { slug: "diff", icon: "+-", name: "Diff Checker", desc: "Compare two texts line by line", color: "#C77DFF" },
  { slug: "jwt", icon: "JWT", name: "JWT Decoder", desc: "Decode & inspect JWT tokens", color: "#00C896" },
  { slug: "timestamp", icon: "ts", name: "Timestamp Converter", desc: "Unix timestamps ↔ dates", color: "#6C8EFF" },
  { slug: "gradient", icon: "▓", name: "Gradient Generator", desc: "Visual CSS gradient builder", color: "#FF8C5A" },
  { slug: "lorem", icon: "¶", name: "Lorem Ipsum", desc: "Placeholder text generator", color: "#FF5FA0" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* <AdBanner slot="top" /> */}
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: "10px" }}>
              Free tools for<br /><span style={{ color: "var(--accent)" }}>developers</span>
            </h1>
            <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}>
              {tools.length} tools. No login. No BS. Just fast, clean utilities that work.
            </p>
            <p>CodeBench is a free, fast, and ad-free developer toolbox built for programmers, 
designers, and students. No sign-up required — just open a tool and get to work. 
From formatting JSON to generating secure passwords, CodeBench has everything 
you need in one place.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "12px" }}>
            {tools.map((t) => (
              <Link key={t.slug} href={"/tools/" + t.slug} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "18px", cursor: "pointer", transition: "border-color 0.15s, transform 0.15s", height: "100%" }}>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: t.color, marginBottom: "8px", fontFamily: "var(--font-mono)" }}>{t.icon}</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-display)", color: "var(--text)", marginBottom: "5px" }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--text2)", lineHeight: 1.5 }}>{t.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* <AdBanner slot="side" /> */}
      </main>
    </>
  );
}
