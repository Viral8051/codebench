"use client";
import { useState } from "react";
import AdBanner from "@/app/components/AdBanner";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setStatus({ msg: "✓ Valid JSON", ok: true });
    } catch (e: unknown) {
      setOutput("");
      setStatus({ msg: "✗ " + (e instanceof Error ? e.message : "Invalid JSON"), ok: false });
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setStatus({ msg: "✓ Minified", ok: true });
    } catch (e: unknown) {
      setStatus({ msg: "✗ " + (e instanceof Error ? e.message : "Invalid JSON"), ok: false });
    }
  };

  const copyOutput = () => { if (output) navigator.clipboard.writeText(output); };

  return (
    <>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <AdBanner slot="top" />
          <div style={{ marginBottom: "24px" }}>
            <span style={{ fontSize: "22px", marginRight: "10px" }}>{"{ }"}</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, display: "inline", letterSpacing: "-0.5px" }}>JSON Formatter</h1>
            <p style={{ color: "var(--text2)", fontSize: "13px", marginTop: "6px" }}>Format, minify and validate JSON. Instantly highlights errors.</p>
            <p>A JSON Formatter takes raw, unreadable JSON data and restructures it with 
              proper indentation and line breaks, making it easy to read and debug. It also 
              validates your JSON in real time — instantly telling you if there's a syntax 
              error and exactly where it is.

              JSON (JavaScript Object Notation) is the most widely used data format for 
              APIs, config files, and databases. Whether you're debugging an API response 
              or cleaning up a config file, a JSON formatter is one of the most-used tools 
              in any developer's workflow.
            </p>
            <p><strong style={{ color: "var(--accent)" }}>How to use:</strong></p>
            <ul>
                <li><strong style={{ color: "var(--accent)" }}>1.</strong> Paste your raw JSON into the input box on the left</li>
                <li><strong style={{ color: "var(--accent)" }}>2.</strong> Click Format to pretty-print it with indentation</li>
                <li><strong style={{ color: "var(--accent)" }}>3.</strong> Click Minify to compress it into a single line</li>
                <li><strong style={{ color: "var(--accent)" }}>4.</strong> If there's an error, the validator will highlight exactly what's wrong</li>
                <li><strong style={{ color: "var(--accent)" }}>5.</strong> Click Copy to grab the output</li>
            </ul>
          </div>


          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <div className="label">Input JSON</div>
              <textarea value={input} onChange={e => setInput(e.target.value)} rows={18} placeholder={'{\n  "name": "DevToolbox",\n  "tools": 5\n}'} />
              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                <button className="btn-primary" onClick={format}>Format</button>
                <button className="btn-ghost" onClick={minify}>Minify</button>
                <button className="btn-ghost" onClick={() => { setInput(""); setOutput(""); setStatus(null); }}>Clear</button>
              </div>
              {status && <p className={status.ok ? "status-ok" : "status-err"}>{status.msg}</p>}
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <div className="label">Output</div>
                {output && <button className="btn-ghost" onClick={copyOutput} style={{ padding: "3px 10px", fontSize: "11px" }}>Copy</button>}
              </div>
              <div className="output" style={{ minHeight: "280px" }}>{output || "Output appears here..."}</div>
            </div>
          </div>
        </div>
        <AdBanner slot="side" />
      </main>
    </>
  );
}
