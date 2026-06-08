export default function About() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>About CodeBench</h1>
      <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
        CodeBench is a free collection of developer tools built for programmers, 
        designers and students. Every tool runs entirely in your browser — 
        no data is ever sent to a server, no login required, no paywalls.
      </p>
      <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
        Built with Next.js by a frontend developer from Jamnagar, India. 
        Started as a side project to help developers save time on everyday tasks.
      </p>
      <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.8 }}>
        Have a tool suggestion? Email: you@email.com
      </p>
    </main>
  );
}