"use client";
import { useState } from "react";
import { marked } from "marked";
import Navbar from "@/app/components/Navbar";
import AdBanner from "@/app/components/AdBanner";

const DEFAULT = `# Hello, Markdown!

Write **bold**, *italic*, or \`inline code\`.

## Lists
- Item one
- Item two
- Item three

## Code Block
\`\`\`javascript
const greet = (name) => \`Hello, \${name}!\`;
\`\`\`

## Blockquote
> "The best tool is the one you actually use."

[Visit codeBench](/)
`;

export default function MarkdownPreviewer() {
  const [md, setMd] = useState(DEFAULT);
  const html = marked(md) as string;

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>
        <AdBanner slot="top" />
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "20px", color: "#6C8EFF", marginRight: "10px" }}>#</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, display: "inline", letterSpacing: "-0.5px" }}>Markdown Previewer</h1>
          <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Write Markdown on the left, see the rendered preview on the right.</p>
          <p>Markdown is a lightweight markup language that lets you write formatted 
          documents using plain text. It's the standard writing format for README 
          files on GitHub, documentation sites, blog platforms like Dev.to and 
          Hashnode, and tools like Notion and Obsidian.

          CodeBench's Markdown Previewer renders your Markdown into formatted HTML 
          in real time on the right side as you type on the left — no save button needed.
          </p>
          <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
          <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Type or paste your Markdown in the left editor panel</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> See the formatted HTML preview update live on the right</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Use the Copy HTML button to grab the rendered HTML output</li>
          </ul>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", height: "580px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="label" style={{ marginBottom: "8px" }}>Editor</div>
            <textarea value={md} onChange={e => setMd(e.target.value)} style={{ flex: 1, resize: "none" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <div className="label">Preview</div>
              <button className="btn-ghost" onClick={() => navigator.clipboard.writeText(html)} style={{ padding: "3px 10px", fontSize: "11px" }}>Copy HTML</button>
            </div>
            <div
              className="md-preview"
              style={{ flex: 1, background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px", overflowY: "auto", lineHeight: 1.7, fontSize: "14px", color: "var(--text)" }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <style>{`
          .md-preview h1,.md-preview h2,.md-preview h3{font-family:var(--font-display);color:var(--text);margin:1rem 0 0.4rem;font-weight:700}
          .md-preview h1{font-size:22px} .md-preview h2{font-size:18px} .md-preview h3{font-size:15px}
          .md-preview code{background:var(--bg3);padding:2px 6px;border-radius:4px;font-size:12px;color:#6C8EFF;font-family:var(--font-mono)}
          .md-preview pre{background:var(--bg3);padding:14px;border-radius:8px;overflow:auto;margin:10px 0}
          .md-preview pre code{background:none;padding:0;color:var(--text)}
          .md-preview blockquote{border-left:3px solid var(--accent);padding-left:14px;color:var(--text2);margin:10px 0;font-style:italic}
          .md-preview ul,.md-preview ol{padding-left:22px;margin:8px 0}
          .md-preview li{margin:4px 0}
          .md-preview a{color:var(--accent);text-decoration:none}
          .md-preview a:hover{text-decoration:underline}
          .md-preview p{margin:8px 0}
          .md-preview hr{border:none;border-top:1px solid var(--border);margin:16px 0}
          .md-preview table{width:100%;border-collapse:collapse;margin:10px 0;font-size:13px}
          .md-preview th{background:var(--bg3);padding:8px 12px;text-align:left;border:1px solid var(--border)}
          .md-preview td{padding:8px 12px;border:1px solid var(--border)}
        `}</style>
      </main>
    </>
  );
}
