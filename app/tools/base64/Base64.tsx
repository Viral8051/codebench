"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import AdBanner from "@/app/components/AdBanner";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);

  const encode = () => {
    try {
      const result = btoa(unescape(encodeURIComponent(input)));
      setOutput(result);
      setStatus({ msg: "✓ Encoded successfully", ok: true });
    } catch {
      setStatus({ msg: "✗ Encoding failed", ok: false });
    }
  };

  const decode = () => {
    try {
      const result = decodeURIComponent(escape(atob(input)));
      setOutput(result);
      setStatus({ msg: "✓ Decoded successfully", ok: true });
    } catch {
      setStatus({ msg: "✗ Invalid Base64 string", ok: false });
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "#6C8EFF", marginRight: "10px" }}>b64</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, display: "inline", letterSpacing: "-0.5px" }}>Base64 Encoder</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Encode text to Base64 or decode Base64 strings back to text.</p>
            <p>Base64 is an encoding scheme that converts binary data into a text string 
            using 64 printable ASCII characters. It's widely used in web development 
            to safely transmit data through mediums that only support text — like 
            embedding images in HTML, passing data in URLs, or encoding credentials 
            in HTTP Authorization headers.

            Our Base64 encoder and decoder works instantly in your browser — just paste 
            your text or Base64 string and convert in one click.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Paste your plain text into the input box to encode it</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Or paste a Base64 string to decode it back to plain text</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Click Encode or Decode</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Copy the output with one click</li>
            </ul>
          </div>

          <div className="label">Input</div>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={6} placeholder="Enter text to encode, or a Base64 string to decode..." />
          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <button className="btn-primary" onClick={encode}>Encode →</button>
            <button className="btn-primary" onClick={decode} style={{ background: "#6C8EFF" }}>← Decode</button>
            <button className="btn-ghost" onClick={() => { setInput(""); setOutput(""); setStatus(null); }}>Clear</button>
          </div>
          {status && <p className={status.ok ? "status-ok" : "status-err"}>{status.msg}</p>}

          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <div className="label">Output</div>
              {output && <button className="btn-ghost" onClick={() => navigator.clipboard.writeText(output)} style={{ padding: "3px 10px", fontSize: "11px" }}>Copy</button>}
            </div>
            <div className="output">{output || "Output appears here..."}</div>
          </div>
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
