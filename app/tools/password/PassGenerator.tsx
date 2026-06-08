"use client";
import { useState, useCallback } from "react";
import Navbar from "@/app/components/Navbar";
import AdBanner from "@/app/components/AdBanner";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getStrength(pwd: string) {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (pwd.length >= 16) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 2) return { label: "Weak", color: "#ff6b6b", pct: 25 };
  if (score <= 3) return { label: "Fair", color: "#FF8C5A", pct: 50 };
  if (score <= 4) return { label: "Good", color: "#6C8EFF", pct: 75 };
  return { label: "Strong", color: "#00C896", pct: 100 };
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const generate = useCallback(() => {
    let chars = "";
    if (useUpper) chars += UPPER;
    if (useLower) chars += LOWER;
    if (useDigits) chars += DIGITS;
    if (useSymbols) chars += SYMBOLS;
    if (!chars) return;
    setPasswords(Array.from({ length: 5 }, () =>
      Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
    ));
    setCopied(null);
  }, [length, useUpper, useLower, useDigits, useSymbols]);

  const copy = (pwd: string, i: number) => {
    navigator.clipboard.writeText(pwd);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };

  const Toggle = ({ label, value, onChange }: { label: string; value: boolean; onChange: () => void }) => (
    <div onClick={onChange} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", padding: "10px 14px", background: value ? "rgba(0,200,150,0.08)" : "var(--bg2)", border: `1px solid ${value ? "var(--accent)" : "var(--border)"}`, borderRadius: "8px", transition: "all 0.15s", userSelect: "none" }}>
      <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: value ? "var(--accent)" : "var(--bg3)", border: `1px solid ${value ? "var(--accent)" : "var(--border)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {value && <span style={{ color: "#000", fontSize: "12px", fontWeight: 700 }}>✓</span>}
      </div>
      <span style={{ fontSize: "13px", color: "var(--text)" }}>{label}</span>
    </div>
  );

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>Password Generator</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Generate secure random passwords with custom options.</p>
            <p>A strong, unique password is your first line of defence against hackers, 
            data breaches and account takeovers. CodeBench's password generator creates 
            cryptographically random passwords instantly in your browser — with full 
            control over length, character types and complexity.

            Five passwords are generated at once so you can pick the one that looks 
            easiest to remember while still being strong. A strength indicator shows 
            you how secure each one is.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Set your desired password length using the slider (16+ recommended)</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Toggle uppercase letters, lowercase letters, numbers and symbols on or off</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Click Generate to create 5 unique passwords at once</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Click Copy next to your preferred password</li>
            </ul>
          </div>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "16px" }}>
            <div className="label" style={{ marginBottom: "12px" }}>Length: <span style={{ color: "var(--accent)", fontWeight: 600 }}>{length}</span></div>
            <input type="range" min={6} max={64} value={length} onChange={e => setLength(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--accent)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text3)", marginTop: "4px" }}><span>6</span><span>64</span></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
            <Toggle label="Uppercase (A–Z)" value={useUpper} onChange={() => setUseUpper(v => !v)} />
            <Toggle label="Lowercase (a–z)" value={useLower} onChange={() => setUseLower(v => !v)} />
            <Toggle label="Numbers (0–9)" value={useDigits} onChange={() => setUseDigits(v => !v)} />
            <Toggle label="Symbols (!@#$...)" value={useSymbols} onChange={() => setUseSymbols(v => !v)} />
          </div>
          <button className="btn-primary" onClick={generate} style={{ width: "100%", padding: "12px", fontSize: "14px" }}>Generate 5 Passwords</button>
          {passwords.length > 0 && (
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {passwords.map((pwd, i) => {
                const s = getStrength(pwd);
                return (
                  <div key={i} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: "13px", wordBreak: "break-all" }}>{pwd}</div>
                    <span style={{ fontSize: "11px", color: s.color, whiteSpace: "nowrap", minWidth: "44px" }}>{s.label}</span>
                    <button className="btn-ghost" onClick={() => copy(pwd, i)} style={{ padding: "4px 12px", fontSize: "12px", color: copied === i ? "var(--accent)" : undefined }}>{copied === i ? "Copied!" : "Copy"}</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
