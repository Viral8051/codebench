export default function Privacy() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px", color: "var(--text2)", lineHeight: 1.8, fontSize: "14px" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: "var(--text)", marginBottom: "24px" }}>Privacy Policy</h1>
      <p>Last updated: {new Date().toDateString()}</p>
      <h2 style={{ color: "var(--text)", marginTop: "24px", marginBottom: "8px" }}>Data We Collect</h2>
      <p>CodeBench does not collect, store or transmit any personal data. All tools run entirely in your browser.</p>
      <h2 style={{ color: "var(--text)", marginTop: "24px", marginBottom: "8px" }}>Cookies & Advertising</h2>
      <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to this and other websites. You can opt out at <a href="https://www.google.com/settings/ads" style={{ color: "var(--accent)" }}>Google Ads Settings</a>.</p>
      <h2 style={{ color: "var(--text)", marginTop: "24px", marginBottom: "8px" }}>Third Party Services</h2>
      <p>We use Vercel for hosting. Vercel may collect anonymised access logs. See <a href="https://vercel.com/legal/privacy-policy" style={{ color: "var(--accent)" }}>Vercel's Privacy Policy</a>.</p>
      <h2 style={{ color: "var(--text)", marginTop: "24px", marginBottom: "8px" }}>Contact</h2>
      <p>For any questions email: codeBench9632@outlook.com</p>
    </main>
  );
}