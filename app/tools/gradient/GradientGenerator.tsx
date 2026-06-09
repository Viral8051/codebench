"use client";
import { useState } from "react";
import AdBanner from "@/app/components/AdBanner";

const PRESETS = [
  { name: "Ocean", stops: ["#0093E9", "#80D0C7"] },
  { name: "Sunset", stops: ["#FF6B6B", "#FFE66D"] },
  { name: "Forest", stops: ["#11998e", "#38ef7d"] },
  { name: "Purple", stops: ["#8E2DE2", "#4A00E0"] },
  { name: "Peach", stops: ["#F7971E", "#FFD200"] },
  { name: "Night", stops: ["#0F2027", "#203A43", "#2C5364"] },
];

export default function GradientGenerator() {
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(135);
  const [stops, setStops] = useState(["#00C896", "#6C8EFF"]);
  const [copied, setCopied] = useState(false);

  const gradientCSS = type === "linear"
    ? `linear-gradient(${angle}deg, ${stops.join(", ")})`
    : `radial-gradient(circle, ${stops.join(", ")})`;

  const fullCSS = `background: ${gradientCSS};`;

  const addStop = () => setStops(s => [...s, "#ffffff"]);
  const removeStop = (i: number) => setStops(s => s.filter((_, idx) => idx !== i));
  const updateStop = (i: number, val: string) => setStops(s => s.map((c, idx) => idx === i ? val : c));

  const copy = () => {
    navigator.clipboard.writeText(fullCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>CSS Gradient Generator</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Build beautiful CSS gradients visually and copy the code.</p>
            <p>CSS gradients let you create smooth transitions between two or more 
            colors without using image files — keeping your site fast and scalable. 
            They're used for hero backgrounds, buttons, cards, text effects and 
            decorative UI elements throughout modern web design.

            CodeBench's gradient generator lets you build linear and radial 
            gradients visually — adjust colors, angle and stops, then copy 
            the CSS with one click. Includes hand-picked presets to get started fast.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Choose Linear or Radial gradient type</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Adjust the angle slider for linear gradients</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Click the color swatches to pick your colors</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Add more color stops for multi-color gradients</li>
                <li><strong style={{ color: "var(--accent)" }}>5.</strong> Click a preset for instant inspiration</li>
                <li><strong style={{ color: "var(--accent)" }}>6.</strong> Copy the CSS output and paste it into your stylesheet</li>
            </ul>
          </div>

          <div style={{ borderRadius: "16px", height: "180px", background: gradientCSS, marginBottom: "24px", transition: "background 0.2s" }} />

          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px 20px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text)", wordBreak: "break-all" }}>{fullCSS}</div>
            <button className="btn-primary" onClick={copy} style={{ marginLeft: "12px", flexShrink: 0, color: copied ? "#000" : undefined }}>{copied ? "Copied!" : "Copy CSS"}</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <div className="label" style={{ marginBottom: "10px" }}>Type & Angle</div>
              <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                {(["linear", "radial"] as const).map(t => (
                  <button key={t} onClick={() => setType(t)} className={type === t ? "btn-primary" : "btn-ghost"} style={{ flex: 1, textTransform: "capitalize" }}>{t}</button>
                ))}
              </div>
              {type === "linear" && (
                <>
                  <div className="label">Angle: <span style={{ color: "var(--accent)" }}>{angle}°</span></div>
                  <input type="range" min={0} max={360} value={angle} onChange={e => setAngle(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--accent)", marginTop: "8px" }} />
                </>
              )}

              <div className="label" style={{ marginTop: "16px", marginBottom: "10px" }}>Color Stops</div>
              {stops.map((stop, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <input type="color" value={stop} onChange={e => updateStop(i, e.target.value)} style={{ width: "44px", height: "36px", padding: "2px", cursor: "pointer", borderRadius: "6px", background: "none" }} />
                  <input value={stop} onChange={e => updateStop(i, e.target.value)} maxLength={7} style={{ flex: 1 }} />
                  {stops.length > 2 && <button className="btn-ghost" onClick={() => removeStop(i)} style={{ padding: "6px 10px", color: "#ff6b6b" }}>✕</button>}
                </div>
              ))}
              {stops.length < 5 && <button className="btn-ghost" onClick={addStop} style={{ marginTop: "4px", width: "100%" }}>+ Add Stop</button>}
            </div>

            <div>
              <div className="label" style={{ marginBottom: "10px" }}>Presets</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {PRESETS.map(p => (
                  <div key={p.name} onClick={() => setStops(p.stops)} style={{ cursor: "pointer", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)", transition: "transform 0.1s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)"}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"}>
                    <div style={{ height: "52px", background: `linear-gradient(135deg, ${p.stops.join(", ")})` }} />
                    <div style={{ padding: "6px 10px", background: "var(--bg2)", fontSize: "12px", color: "var(--text2)" }}>{p.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
