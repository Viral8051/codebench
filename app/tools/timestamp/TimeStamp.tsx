"use client";
import { useState, useEffect } from "react";
import AdBanner from "@/app/components/AdBanner";

export default function TimestampConverter() {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [tsInput, setTsInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [tsResult, setTsResult] = useState<Record<string, string> | null>(null);
  const [dateResult, setDateResult] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const t = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(t);
  }, []);

  const convertTs = () => {
    const ts = parseInt(tsInput);
    if (isNaN(ts)) return;
    const ms = ts < 1e12 ? ts * 1000 : ts;
    const d = new Date(ms);
    setTsResult({
      "UTC": d.toUTCString(),
      "ISO 8601": d.toISOString(),
      "Local": d.toLocaleString(),
      "Date only": d.toLocaleDateString(),
      "Time only": d.toLocaleTimeString(),
      "Unix (seconds)": String(Math.floor(ms / 1000)),
      "Unix (ms)": String(ms),
    });
  };

  const convertDate = () => {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return;
    setDateResult(String(Math.floor(d.getTime() / 1000)));
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
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>Timestamp Converter</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Convert Unix timestamps to readable dates and vice versa.</p>
            <p>A Unix timestamp is the number of seconds that have elapsed since 
            January 1, 1970 (UTC) — also known as the Unix Epoch. It's the 
            standard way computers store and compare dates and times across 
            programming languages, databases and APIs.

            CodeBench's timestamp converter works in both directions — paste a 
            Unix timestamp to see the human-readable date, or pick a date and 
            time to get its Unix timestamp. A live clock shows the current 
            Unix time updating every second.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> See the current Unix timestamp updating live at the top</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> To convert a timestamp: paste it in the left box and click Convert</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> To convert a date: pick a date and time in the right box and click Convert</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Copy any output format with one click</li>
            </ul>
          </div>

          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px 20px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "var(--text2)" }}>Current Unix time</span>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "20px", fontWeight: 600, color: "var(--accent)" }}>{now}</span>
              <button className="btn-ghost" onClick={() => copy(String(now), "now")} style={{ padding: "4px 10px", fontSize: "11px", color: copied === "now" ? "var(--accent)" : undefined }}>{copied === "now" ? "Copied!" : "Copy"}</button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <div className="label" style={{ marginBottom: "8px" }}>Unix Timestamp → Date</div>
              <input value={tsInput} onChange={e => setTsInput(e.target.value)} placeholder="e.g. 1700000000" />
              <button className="btn-primary" onClick={convertTs} style={{ marginTop: "10px", width: "100%" }}>Convert →</button>
              {tsResult && (
                <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {Object.entries(tsResult).map(([k, v]) => (
                    <div key={k} style={{ background: "var(--bg3)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                      <div>
                        <div style={{ fontSize: "10px", color: "var(--text3)", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{k}</div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text)" }}>{v}</div>
                      </div>
                      <button className="btn-ghost" onClick={() => copy(v, k)} style={{ padding: "2px 8px", fontSize: "10px", flexShrink: 0, color: copied === k ? "var(--accent)" : undefined }}>{copied === k ? "✓" : "Copy"}</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="label" style={{ marginBottom: "8px" }}>Date → Unix Timestamp</div>
              <input type="datetime-local" value={dateInput} onChange={e => setDateInput(e.target.value)} />
              <button className="btn-primary" onClick={convertDate} style={{ marginTop: "10px", width: "100%" }}>Convert →</button>
              {dateResult && (
                <div style={{ marginTop: "12px", background: "var(--bg3)", borderRadius: "8px", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "10px", color: "var(--text3)", marginBottom: "4px", textTransform: "uppercase" }}>Unix (seconds)</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", fontWeight: 600, color: "var(--accent)" }}>{dateResult}</div>
                  </div>
                  <button className="btn-ghost" onClick={() => copy(dateResult, "dateResult")} style={{ padding: "6px 14px", color: copied === "dateResult" ? "var(--accent)" : undefined }}>{copied === "dateResult" ? "Copied!" : "Copy"}</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
