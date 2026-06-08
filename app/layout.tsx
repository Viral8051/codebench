import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "codeBench — Free Developer Tools",
  description: "Free online tools for developers. JSON formatter, password generator, hash generator, JWT decoder, regex tester and more. No login required.",
  keywords: "developer tools, json formatter, base64 encoder, password generator, regex tester, jwt decoder, hash generator, free dev tools",
  openGraph: {
    title: "CodeBench — Free Developer Tools",
    description: "Your free developer workbench. 14 tools, no login, no installs.",
    url: "https://codebench.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
