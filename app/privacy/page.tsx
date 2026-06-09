import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CodeBench",
  description: "CodeBench privacy policy. Learn how we handle your data, cookies, and advertising. All tools run entirely in your browser — your data never leaves your device.",
};

const sections = [
  {
    title: "Introduction",
    content: `Welcome to CodeBench ("we", "our", or "us"). We are committed to protecting your privacy and being transparent about how our website works. This Privacy Policy explains what information is collected when you visit codebench.online, how it is used, and what rights you have.

By using CodeBench, you agree to the practices described in this policy. If you do not agree, please discontinue use of the site.`,
  },
  {
    title: "Who We Are",
    content: `CodeBench (codebench.online) is a free collection of developer tools including a JSON formatter, Base64 encoder, password generator, hash generator, JWT decoder, regex tester, CSS gradient generator and more. The site is operated by an independent developer based in Jamnagar, Gujarat, India.

Contact email: your@email.com`,
  },
  {
    title: "What Data We Collect",
    content: `CodeBench is designed with privacy as a priority. We do not collect, store or transmit any of the text, code or data you enter into our tools. All tool processing happens entirely within your browser using JavaScript — nothing is sent to our servers.

We may collect the following anonymised, non-personal data through third-party services:

• Pages visited and time spent on each page
• Browser type and version
• Operating system
• Referring website (how you found us)
• Country-level location (not precise location)
• Screen resolution and device type

This data is collected in aggregate and cannot be used to identify you personally.`,
  },
  {
    title: "Cookies",
    content: `CodeBench uses cookies through third-party services. Cookies are small text files stored on your device by your browser. We use the following types:

Essential Cookies — Required for the site to function correctly. These cannot be disabled.

Analytics Cookies — We use Google Analytics to understand how visitors use CodeBench. This helps us improve the tools and content. Google Analytics uses cookies to track anonymised usage data. You can opt out at https://tools.google.com/dlpage/gaoptout

Advertising Cookies — We use Google AdSense to display advertisements. Google uses cookies to serve ads relevant to your interests based on your browsing history across websites. These are third-party cookies set by Google, not by CodeBench directly.

You can control and delete cookies through your browser settings at any time.`,
  },
  {
    title: "Google AdSense & Advertising",
    content: `CodeBench displays advertisements served by Google AdSense. As a third-party vendor, Google uses cookies (including the DoubleClick cookie) to serve ads based on a user's prior visits to this website and other websites on the internet.

Google's use of advertising cookies enables it and its partners to serve ads based on your visit to CodeBench and other sites on the internet.

You may opt out of personalised advertising by visiting Google Ads Settings at https://www.google.com/settings/ads or by visiting the Network Advertising Initiative opt-out page at https://www.networkadvertising.org/managing/opt_out.asp

We do not control the content of advertisements shown on CodeBench. All ad content is managed by Google AdSense in accordance with their policies.`,
  },
  {
    title: "Google Analytics",
    content: `We use Google Analytics to collect anonymised data about how visitors use CodeBench. This helps us understand which tools are most popular, where our visitors come from, and how to improve the site.

Google Analytics collects data such as:
• Pages visited
• Time spent on pages
• Browser and device information
• Geographic location at country level

This data is processed by Google in accordance with their Privacy Policy at https://policies.google.com/privacy. We have enabled IP anonymisation so your full IP address is never stored.

You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout`,
  },
  {
    title: "Third Party Services",
    content: `CodeBench uses the following third-party services, each with their own privacy policies:

Netlify (Hosting) — Our website is hosted on Netlify's infrastructure. Netlify may collect server access logs including IP addresses for security and performance purposes. Privacy policy: https://www.netlify.com/privacy/

Google Analytics — Website analytics service. Privacy policy: https://policies.google.com/privacy

Google AdSense — Advertising service. Privacy policy: https://policies.google.com/privacy

We are not responsible for the privacy practices of these third-party services.`,
  },
  {
    title: "Your Data Rights",
    content: `Under applicable data protection laws, you have the following rights:

Right to Access — You can request information about what personal data we hold about you. Since CodeBench does not store personal data, there is typically nothing to provide.

Right to Deletion — You can request deletion of any personal data. As we do not store personal data, this right is automatically satisfied.

Right to Opt Out of Advertising — You can opt out of personalised ads through Google Ads Settings or your browser's cookie settings.

Right to Withdraw Consent — You can withdraw consent to cookies at any time through your browser settings.

To exercise any of these rights, contact us at your@email.com`,
  },
  {
    title: "Children's Privacy",
    content: `CodeBench is not directed at children under the age of 13. We do not knowingly collect any personal information from children. If you believe a child has provided personal information through our site, please contact us and we will take steps to remove that information.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.

Continued use of CodeBench after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns or requests regarding this Privacy Policy or how we handle data, please contact us:

Email: codeBench9632@outlook.com
Website: codebench.online
Location: India

We aim to respond to all privacy-related enquiries within 5 business days.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: "40px", borderBottom: "1px solid var(--border)", paddingBottom: "32px" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, letterSpacing: "-1px", marginBottom: "12px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--text2)", fontSize: "14px" }}>
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <div style={{ marginTop: "16px", padding: "14px 18px", background: "rgba(0,200,150,0.08)", border: "1px solid rgba(0,200,150,0.2)", borderRadius: "10px", fontSize: "13px", color: "var(--accent)" }}>
            🔒 All CodeBench tools run entirely in your browser. No data you enter is ever sent to our servers.
          </div>
        </div>

        <nav style={{ marginBottom: "40px", padding: "20px", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px" }}>
          <div style={{ fontSize: "12px", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Contents</div>
          <ol style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {sections.map((s, i) => (
              <li key={i}>
                <a href={`#section-${i}`} style={{ color: "var(--text2)", fontSize: "13px", textDecoration: "none" }}>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {sections.map((s, i) => (
            <section key={i} id={`section-${i}`}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "var(--text)" }}>
                {i + 1}. {s.title}
              </h2>
              <div style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.9, whiteSpace: "pre-line" }}>
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
