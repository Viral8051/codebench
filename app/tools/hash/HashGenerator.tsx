"use client";
import { useState } from "react";
import AdBanner from "@/app/components/AdBanner";

async function hashText(text: string, algo: string): Promise<string> {
  const encoded = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest(algo, encoded);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

const ALGOS = [
  { label: "SHA-1", value: "SHA-1", color: "#FF8C5A" },
  { label: "SHA-256", value: "SHA-256", color: "#00C896" },
  { label: "SHA-384", value: "SHA-384", color: "#6C8EFF" },
  { label: "SHA-512", value: "SHA-512", color: "#C77DFF" },
];

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<string | null>(null);

  const generate = async () => {
    if (!input) return;
    const results: Record<string, string> = {};
    for (const algo of ALGOS) {
      results[algo.value] = await hashText(input, algo.value);
    }
    setHashes(results);
  };

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>Hash Generator</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Generate SHA-1, SHA-256, SHA-384 and SHA-512 hashes from any text.</p>
            <p>A cryptographic hash function takes any input and produces a fixed-length 
            string called a hash or digest. The same input always produces the same 
            hash, but even a tiny change in the input produces a completely different 
            hash — making hashes ideal for verifying data integrity.

            CodeBench generates SHA-1, SHA-256, SHA-384 and SHA-512 hashes instantly 
            using the browser's built-in Web Crypto API — no server involved.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Type or paste your input text into the box</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Click Generate Hashes</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> All four SHA variants are generated simultaneously</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Click Copy next to the hash you need</li>
            </ul>
          </div>
          <div className="label">Input text</div>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={5} placeholder="Enter text to hash..." />
          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <button className="btn-primary" onClick={generate}>Generate Hashes</button>
            <button className="btn-ghost" onClick={() => { setInput(""); setHashes({}); }}>Clear</button>
          </div>
          {Object.keys(hashes).length > 0 && (
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {ALGOS.map(algo => (
                <div key={algo.value} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "14px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: algo.color, fontFamily: "var(--font-mono)" }}>{algo.label}</span>
                    <button className="btn-ghost" onClick={() => copy(hashes[algo.value], algo.value)} style={{ padding: "3px 10px", fontSize: "11px", color: copied === algo.value ? "var(--accent)" : undefined }}>
                      {copied === algo.value ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text)", wordBreak: "break-all", lineHeight: 1.6 }}>{hashes[algo.value]}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
