"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import AdBanner from "@/app/components/AdBanner";

type DiffLine = { type: "same" | "added" | "removed"; text: string };

function computeDiff(a: string, b: string): DiffLine[] {
  const aLines = a.split("\n");
  const bLines = b.split("\n");
  const result: DiffLine[] = [];
  const maxLen = Math.max(aLines.length, bLines.length);
  for (let i = 0; i < maxLen; i++) {
    const aLine = aLines[i];
    const bLine = bLines[i];
    if (aLine === bLine) {
      result.push({ type: "same", text: aLine ?? "" });
    } else {
      if (aLine !== undefined) result.push({ type: "removed", text: aLine });
      if (bLine !== undefined) result.push({ type: "added", text: bLine });
    }
  }
  return result;
}

export default function DiffChecker() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [diff, setDiff] = useState<DiffLine[] | null>(null);

  const compare = () => setDiff(computeDiff(left, right));

  const added = diff?.filter(d => d.type === "added").length ?? 0;
  const removed = diff?.filter(d => d.type === "removed").length ?? 0;

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>
        <AdBanner slot="top" />
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>Diff Checker</h1>
          <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Compare two blocks of text and see what changed line by line.</p>
          <p>A diff checker compares two pieces of text side by side and highlights 
          exactly what has changed — line by line. It's an essential tool for 
          reviewing code changes, comparing document versions, spotting differences 
          in config files, and understanding what changed between two API responses.

          Green lines were added. Red lines were removed. Unchanged lines are shown 
          in grey for context.
          </p>
          <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
          <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Paste your original text into the left panel</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Paste your modified text into the right panel</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Click Compare</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Added lines are highlighted green, removed lines in red</li>
          </ul>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
          <div>
            <div className="label" style={{ marginBottom: "8px" }}>Original</div>
            <textarea value={left} onChange={e => setLeft(e.target.value)} rows={10} placeholder="Paste original text here..." />
          </div>
          <div>
            <div className="label" style={{ marginBottom: "8px" }}>Modified</div>
            <textarea value={right} onChange={e => setRight(e.target.value)} rows={10} placeholder="Paste modified text here..." />
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
          <button className="btn-primary" onClick={compare}>Compare</button>
          <button className="btn-ghost" onClick={() => { setLeft(""); setRight(""); setDiff(null); }}>Clear</button>
          {diff && (
            <>
              <span style={{ fontSize: "12px", color: "#00C896", alignSelf: "center", marginLeft: "8px" }}>+{added} added</span>
              <span style={{ fontSize: "12px", color: "#ff6b6b", alignSelf: "center" }}>-{removed} removed</span>
            </>
          )}
        </div>
        {diff && (
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
            {diff.map((line, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "12px", padding: "4px 14px",
                background: line.type === "added" ? "rgba(0,200,150,0.08)" : line.type === "removed" ? "rgba(255,107,107,0.08)" : "transparent",
                borderLeft: `3px solid ${line.type === "added" ? "#00C896" : line.type === "removed" ? "#ff6b6b" : "transparent"}`,
              }}>
                <span style={{ fontSize: "12px", color: line.type === "added" ? "#00C896" : line.type === "removed" ? "#ff6b6b" : "var(--text3)", minWidth: "14px", marginTop: "2px", fontFamily: "var(--font-mono)" }}>
                  {line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: line.type === "same" ? "var(--text2)" : "var(--text)", whiteSpace: "pre-wrap", wordBreak: "break-all", lineHeight: 1.6 }}>
                  {line.text || "\u00a0"}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
