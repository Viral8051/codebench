"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import AdBanner from "@/app/components/AdBanner";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testStr, setTestStr] = useState("");
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);
  const [matches, setMatches] = useState<string[]>([]);

  const test = (pat: string, fl: string, str: string) => {
    setPattern(pat); setFlags(fl); setTestStr(str);
    if (!pat) { setStatus(null); setMatches([]); return; }
    try {
      const re = new RegExp(pat, fl);
      const m = str.match(re) || [];
      setMatches(m);
      setStatus({ msg: `✓ ${m.length} match${m.length !== 1 ? "es" : ""}`, ok: true });
    } catch (e: unknown) {
      setMatches([]);
      setStatus({ msg: "✗ " + (e instanceof Error ? e.message : "Invalid regex"), ok: false });
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "#C77DFF", marginRight: "10px" }}>.*</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, display: "inline", letterSpacing: "-0.5px" }}>Regex Tester</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Test regular expressions with live match results.</p>
            <p>A regular expression (regex) is a sequence of characters that defines a 
            search pattern. Regex is used in nearly every programming language for 
            validating input, searching text, extracting data, and replacing strings.

            Testing regex patterns from memory is error-prone — our live regex tester 
            shows you exactly which parts of your test string match your pattern in 
            real time, with a built-in quick reference cheat sheet.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Enter your regex pattern in the Pattern field</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Add flags in the flags field (g for global, i for case-insensitive, m for multiline)</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Type or paste your test string</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Matches are highlighted and listed instantly</li>
            </ul>
          </div>

          <div className="label">Pattern</div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
            <span style={{ color: "var(--text2)", fontFamily: "var(--font-mono)", fontSize: "18px" }}>/</span>
            <input value={pattern} onChange={e => test(e.target.value, flags, testStr)} placeholder="[a-z]+" style={{ flex: 1 }} />
            <span style={{ color: "var(--text2)", fontFamily: "var(--font-mono)", fontSize: "18px" }}>/</span>
            <input value={flags} onChange={e => test(pattern, e.target.value, testStr)} placeholder="gi" style={{ width: "60px" }} />
          </div>

          <div className="label">Test string</div>
          <textarea value={testStr} onChange={e => test(pattern, flags, e.target.value)} rows={6} placeholder="hello world 123 foo bar" />

          {status && <p className={status.ok ? "status-ok" : "status-err"} style={{ marginTop: "10px" }}>{status.msg}</p>}

          {matches.length > 0 && (
            <div style={{ marginTop: "16px" }}>
              <div className="label">Matches</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                {matches.map((m, i) => (
                  <span key={i} style={{ background: "rgba(199,125,255,0.12)", color: "#C77DFF", border: "1px solid rgba(199,125,255,0.3)", borderRadius: "6px", padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: "13px" }}>{m}</span>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: "24px", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px" }}>
            <div className="label" style={{ marginBottom: "10px" }}>Quick reference</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {[[".", "Any char"], ["\\d", "Digit"], ["\\w", "Word char"], ["\\s", "Whitespace"], ["^", "Start"], ["$", "End"], ["+", "One or more"], ["*", "Zero or more"], ["?", "Optional"]].map(([p, d]) => (
                <div key={p} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <code style={{ background: "var(--bg3)", color: "#C77DFF", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", fontFamily: "var(--font-mono)" }}>{p}</code>
                  <span style={{ fontSize: "12px", color: "var(--text2)" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
