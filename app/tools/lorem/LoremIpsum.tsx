"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import AdBanner from "@/app/components/AdBanner";

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure dolor reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci lobortis eleifend pede sociis natoque penatibus magnis dis parturient montes nascetur ridiculus mus".split(" ");

function randomWord() { return WORDS[Math.floor(Math.random() * WORDS.length)]; }
function capitalize(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }

function generateSentence(minWords = 8, maxWords = 16): string {
  const len = minWords + Math.floor(Math.random() * (maxWords - minWords));
  return capitalize(Array.from({ length: len }, randomWord).join(" ")) + ".";
}

function generateParagraph(minSentences = 4, maxSentences = 7): string {
  const len = minSentences + Math.floor(Math.random() * (maxSentences - minSentences));
  return Array.from({ length: len }, generateSentence).join(" ");
}

export default function LoremIpsum() {
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let result = "";
    if (type === "paragraphs") result = Array.from({ length: count }, generateParagraph).join("\n\n");
    else if (type === "sentences") result = Array.from({ length: count }, generateSentence).join(" ");
    else result = Array.from({ length: count }, randomWord).join(" ");
    setOutput(result);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const wordCount = output.trim() ? output.trim().split(/\s+/).length : 0;
  const charCount = output.length;

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>Lorem Ipsum Generator</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Generate placeholder text for your designs and mockups.</p>
            <p>Lorem Ipsum is placeholder text used by designers and developers 
            when the real content isn't ready yet. It lets you visualise 
            the layout, typography and spacing of a design without being 
            distracted by the actual words.

            The original Lorem Ipsum text comes from a work of Latin literature 
            by Cicero, written in 45 BC. CodeBench's generator creates 
            randomised variations so your placeholder text never looks identical 
            twice — choose between paragraphs, sentences or individual words.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Choose your unit — Paragraphs, Sentences or Words</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Enter how many you need</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Click Generate</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> Click Copy All to grab the text</li>
            </ul>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              {(["paragraphs", "sentences", "words"] as const).map(t => (
                <button key={t} onClick={() => setType(t)} className={type === t ? "btn-primary" : "btn-ghost"} style={{ textTransform: "capitalize" }}>{t}</button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input type="number" min={1} max={50} value={count} onChange={e => setCount(Math.max(1, Math.min(50, Number(e.target.value))))} style={{ width: "72px" }} />
              <button className="btn-primary" onClick={generate}>Generate</button>
            </div>
          </div>

          {output && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div style={{ fontSize: "12px", color: "var(--text3)" }}>{wordCount} words · {charCount} characters</div>
                <button className="btn-ghost" onClick={copy} style={{ padding: "4px 12px", fontSize: "12px", color: copied ? "var(--accent)" : undefined }}>{copied ? "Copied!" : "Copy All"}</button>
              </div>
              <div className="output" style={{ minHeight: "200px", lineHeight: 1.8, fontSize: "14px", color: "var(--text2)", whiteSpace: "pre-wrap" }}>{output}</div>
            </>
          )}

          {!output && (
            <div style={{ border: "1px dashed var(--border)", borderRadius: "10px", padding: "48px", textAlign: "center", color: "var(--text3)", fontSize: "14px" }}>
              Choose options and click Generate
            </div>
          )}
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
