"use client";
import { useState } from "react";
import AdBanner from "@/app/components/AdBanner";

function b64UrlDecode(str: string): string {
  const pad = str.length % 4 === 0 ? "" : "=".repeat(4 - (str.length % 4));
  const base64 = (str + pad).replace(/-/g, "+").replace(/_/g, "/");
  return atob(base64);
}

function decodeJWT(token: string) {
  const parts = token.trim().split(".");
  if (parts.length !== 3) throw new Error("Invalid JWT: must have 3 parts");
  const header = JSON.parse(b64UrlDecode(parts[0]));
  const payload = JSON.parse(b64UrlDecode(parts[1]));
  return { header, payload, signature: parts[2] };
}

function formatTime(ts: number) {
  return new Date(ts * 1000).toLocaleString();
}

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState<{ header: Record<string, unknown>; payload: Record<string, unknown>; signature: string } | null>(null);
  const [error, setError] = useState("");

  const decode = () => {
    try {
      setDecoded(decodeJWT(token));
      setError("");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Decode failed");
      setDecoded(null);
    }
  };

  const expVal = decoded?.payload?.exp; const isExpired = typeof expVal === "number" ? expVal < Date.now() / 1000 : false;

  return (
    <>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>JWT Decoder</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Decode and inspect JWT tokens. Header, payload and expiry at a glance.</p>
            <p>A JSON Web Token (JWT) is a compact, URL-safe token used to securely 
            transmit information between parties — most commonly for authentication. 
            When a user logs in, the server issues a JWT that the client sends with 
            every subsequent request to prove identity.

            JWTs have three parts separated by dots: a Header (algorithm info), 
            a Payload (claims and user data), and a Signature (for verification). 
            Our JWT decoder lets you inspect the header and payload instantly — 
            and tells you whether the token has expired.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Paste your JWT token into the input field</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Click Decode</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> View the decoded header and payload fields clearly</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Check the expiry banner — green means valid, red means expired</li>
            </ul>
          </div>
          <div className="label">JWT Token</div>
          <textarea value={token} onChange={e => setToken(e.target.value)} rows={4} placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }} />
          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <button className="btn-primary" onClick={decode}>Decode</button>
            <button className="btn-ghost" onClick={() => { setToken(""); setDecoded(null); setError(""); }}>Clear</button>
          </div>
          {error && <p className="status-err" style={{ marginTop: "8px" }}>{error}</p>}
          {decoded && (
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {typeof decoded.payload.exp === "number" && (
                <div style={{ padding: "10px 14px", background: isExpired ? "rgba(255,107,107,0.08)" : "rgba(0,200,150,0.08)", border: `1px solid ${isExpired ? "#ff6b6b" : "#00C896"}`, borderRadius: "8px", fontSize: "13px", color: isExpired ? "#ff6b6b" : "#00C896" }}>
                  {isExpired ? "⚠ Token expired" : "✓ Token valid"} — expires {formatTime(decoded.payload.exp as number)}
                </div>
              )}
              {[
                { label: "Header", data: decoded.header, color: "#6C8EFF" },
                { label: "Payload", data: decoded.payload, color: "#00C896" },
              ].map(section => (
                <div key={section.label} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--border)", fontSize: "12px", fontWeight: 600, color: section.color, display: "flex", justifyContent: "space-between" }}>
                    <span>{section.label}</span>
                    <button className="btn-ghost" onClick={() => navigator.clipboard.writeText(JSON.stringify(section.data, null, 2))} style={{ padding: "2px 8px", fontSize: "11px" }}>Copy</button>
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    {Object.entries(section.data).map(([k, v]) => (
                      <div key={k} style={{ display: "flex", gap: "12px", padding: "4px 0", borderBottom: "1px solid var(--border)", fontSize: "13px" }}>
                        <span style={{ color: "var(--text3)", minWidth: "80px", fontFamily: "var(--font-mono)" }}>{k}</span>
                        <span style={{ color: "var(--text)", fontFamily: "var(--font-mono)", wordBreak: "break-all" }}>
                          {(k === "exp" || k === "iat" || k === "nbf") && typeof v === "number"
                            ? `${v} (${formatTime(v)})`
                            : JSON.stringify(v)}
                        </span>
                      </div>
                    ))}
                  </div>
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
