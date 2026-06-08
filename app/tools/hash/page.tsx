import type { Metadata } from "next";
import HashGenerator from "./HashGenerator";

export const metadata: Metadata = {
  title: "Hash Generator SHA-256 SHA-512 — CodeBench",
  description: "Generate SHA-1, SHA-256, SHA-384 and SHA-512 hashes from any text. Runs entirely in your browser using the Web Crypto API. Free hash generator.",
};

export default function Page() {
  return <HashGenerator/>
}