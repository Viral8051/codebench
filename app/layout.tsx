import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <head>
        <script
  async
  data-cfasync="false"
  src="https://5gvci.com/act/files/tag.min.js?z=11121522"
/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7188533962283350"
     crossOrigin="anonymous"></script>
      <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} />
        
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
