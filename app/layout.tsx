import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CodeBench — Free Developer Tools",
  description: "Free online tools for developers. JSON formatter, password generator, hash generator, JWT decoder, regex tester and more. No login required.",
  keywords: "developer tools, json formatter, base64 encoder, password generator, regex tester, jwt decoder, hash generator, free dev tools",
  openGraph: {
    title: "CodeBench — Free Developer Tools",
    description: "Your free developer workbench. 14 tools, no login, no installs.",
    url: "https://codebench.online",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        {/* Monetag — must be at end of body */}
        <Script
          src="https://5gvci.com/act/files/tag.min.js?z=11121522"
          data-cfasync="false"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}