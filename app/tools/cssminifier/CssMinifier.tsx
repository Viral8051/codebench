"use client";
import { useState } from "react";
import AdBanner from "@/app/components/AdBanner";

function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*,\s*/g, ",")
    .replace(/;\s*}/g, "}")
    .replace(/\n/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export default function CSSMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const minify = () => {
    const result = minifyCSS(input);
    setOutput(result);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const savings = input.length > 0 ? Math.round((1 - output.length / input.length) * 100) : 0;

  return (
    <>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>CSS Minifier</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Remove whitespace and comments from CSS to reduce file size.</p>
            <p>CSS minification removes all unnecessary characters from your stylesheet 
            — whitespace, comments, line breaks and redundant semicolons — without 
            changing how it works. The result is a smaller file that loads faster 
            in the browser, improving your site's performance and Google PageSpeed score.

            Even a modest reduction in CSS file size can meaningfully improve load 
            times, especially on mobile connections.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Paste your CSS into the input box on the left</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Click Minify</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> See the original size, minified size and percentage saved</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Copy the minified CSS to use in production</li>
            </ul>
          </div>
          {output && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "20px" }}>
              {[
                { label: "Original", value: `${input.length} chars`, color: "#FF8C5A" },
                { label: "Minified", value: `${output.length} chars`, color: "#00C896" },
                { label: "Savings", value: `${savings}%`, color: "#6C8EFF" },
              ].map(s => (
                <div key={s.label} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "11px", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{s.label}</div>
                  <div style={{ fontSize: "22px", fontWeight: 700, color: s.color, fontFamily: "var(--font-display)" }}>{s.value}</div>
                </div>
              ))}
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <div className="label" style={{ marginBottom: "8px" }}>Input CSS</div>
              <textarea value={input} onChange={e => setInput(e.target.value)} rows={16} placeholder={`.container {\n  display: flex;\n  /* center items */\n  align-items: center;\n  justify-content: center;\n}`} />
              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                <button className="btn-primary" onClick={minify}>Minify</button>
                <button className="btn-ghost" onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div className="label">Output</div>
                {output && <button className="btn-ghost" onClick={copy} style={{ padding: "3px 10px", fontSize: "11px", color: copied ? "var(--accent)" : undefined }}>{copied ? "Copied!" : "Copy"}</button>}
              </div>
              <div className="output" style={{ minHeight: "280px" }}>{output || "Minified CSS appears here..."}</div>
            </div>
          </div>
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
