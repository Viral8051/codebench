"use client";
import { useState } from "react";
import AdBanner from "@/app/components/AdBanner";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const lines = text === "" ? 0 : text.split("\n").length;
  const sentences = text === "" ? 0 : (text.match(/[.!?]+/g) || []).length;
  const readTime = Math.max(1, Math.round(words / 200));

  const stats = [
    { label: "Words", value: words, color: "#00C896" },
    { label: "Characters", value: chars, color: "#6C8EFF" },
    { label: "No spaces", value: charsNoSpace, color: "#FF8C5A" },
    { label: "Lines", value: lines, color: "#FF5FA0" },
    { label: "Sentences", value: sentences, color: "#C77DFF" },
    { label: "Read time", value: readTime + " min", color: "#00C896" },
  ];

  return (
    <>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "#FF8C5A", marginRight: "10px" }}>Aa</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, display: "inline", letterSpacing: "-0.5px" }}>Word Counter</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Count words, characters, lines and estimated reading time.</p>
            <p>A word counter is an essential writing tool for bloggers, students, 
            copywriters, and developers writing documentation. It gives you an instant 
            count of words, characters, lines, sentences and estimated reading time 
            as you type — no need to click anything.

            Whether you're hitting a word limit for an essay, writing SEO-optimised 
            meta descriptions, or just curious about the length of a document, 
            CodeBench's word counter gives you all the stats in real time.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Type or paste your text into the input box</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Stats update instantly as you type — no button needed</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> See word count, character count, line count, sentence count and reading time</li>
            </ul>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "20px" }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px", textAlign: "center" }}>
                <div style={{ fontSize: "11px", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{s.label}</div>
                <div style={{ fontSize: "28px", fontWeight: 700, fontFamily: "var(--font-display)", color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          <div className="label">Your text</div>
          <textarea value={text} onChange={e => setText(e.target.value)} rows={12} placeholder="Start typing or paste your text here..." />
          {text && (
            <button className="btn-ghost" onClick={() => setText("")} style={{ marginTop: "10px" }}>Clear</button>
          )}
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
