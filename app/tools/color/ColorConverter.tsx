"use client";
import { useState } from "react";
import AdBanner from "@/app/components/AdBanner";

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  if (h.length !== 6) return null;
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("").toUpperCase();
}

function rgbToHsl(r: number, g: number, b: number) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break;
      case gn: h = (bn - rn) / d + 2; break;
      case bn: h = (rn - gn) / d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export default function ColorConverter() {
  const [hex, setHex] = useState("#1D9E75");
  const [r, setR] = useState("29");
  const [g, setG] = useState("158");
  const [b, setB] = useState("117");
  const [previewColor, setPreviewColor] = useState("#1D9E75");

  const fromHex = (val: string) => {
    setHex(val);
    const rgb = hexToRgb(val);
    if (rgb) { setR(String(rgb.r)); setG(String(rgb.g)); setB(String(rgb.b)); setPreviewColor(val); }
  };

  const fromRgb = (rv: string, gv: string, bv: string) => {
    setR(rv); setG(gv); setB(bv);
    const ri = parseInt(rv) || 0, gi = parseInt(gv) || 0, bi = parseInt(bv) || 0;
    const h = rgbToHex(ri, gi, bi);
    setHex(h); setPreviewColor(h);
  };

  const ri = parseInt(r) || 0, gi = parseInt(g) || 0, bi = parseInt(b) || 0;
  const hsl = rgbToHsl(ri, gi, bi);

  return (
    <>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <span style={{ fontSize: "22px", color: "#FF5FA0", marginRight: "10px" }}>◉</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, display: "inline", letterSpacing: "-0.5px" }}>Color Converter</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Convert colors between HEX, RGB and HSL formats.</p>
            <p>A color converter lets you instantly translate colors between the three 
            most common CSS color formats — HEX, RGB and HSL. Designers and 
            front-end developers constantly switch between these formats depending 
            on the context: HEX in design tools like Figma, RGB in CSS, and HSL 
            for creating color variations programmatically.

            CodeBench's color converter updates live as you type, with a real-time 
            preview swatch and one-click copy for every format.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Enter a HEX color code (e.g. #1D9E75) to convert it to RGB and HSL</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Or enter R, G, B values to convert to HEX and HSL</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> See a live color preview as you type</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Click Copy next to any format to grab the CSS value</li>
            </ul>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <div style={{ background: previewColor, borderRadius: "12px", height: "120px", marginBottom: "20px", border: "1px solid var(--border)", transition: "background 0.2s" }} />

              <div className="label">HEX</div>
              <input value={hex} onChange={e => fromHex(e.target.value)} maxLength={7} placeholder="#1D9E75" style={{ marginBottom: "16px" }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {[["R", r, (v: string) => fromRgb(v, g, b)], ["G", g, (v: string) => fromRgb(r, v, b)], ["B", b, (v: string) => fromRgb(r, g, v)]].map(([label, val, fn]) => (
                  <div key={label as string}>
                    <div className="label">{label as string}</div>
                    <input value={val as string} onChange={e => (fn as (v: string) => void)(e.target.value)} maxLength={3} placeholder="0" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "HEX", value: hex.toUpperCase() },
                  { label: "RGB", value: `rgb(${ri}, ${gi}, ${bi})` },
                  { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
                  { label: "CSS Variable", value: `--color: ${hex.toUpperCase()};` },
                ].map(item => (
                  <div key={item.label} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div className="label">{item.label}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--text)" }}>{item.value}</div>
                    </div>
                    <button className="btn-ghost" onClick={() => navigator.clipboard.writeText(item.value)} style={{ padding: "4px 10px", fontSize: "11px" }}>Copy</button>
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
