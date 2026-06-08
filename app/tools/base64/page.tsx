import type { Metadata } from "next";
import Base64Tool from "./Base64";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder — CodeBench",
  description: "Encode text to Base64 or decode Base64 strings back to plain text instantly in your browser. Free, fast, no login required.",
};

export default function Page() {
  return <Base64Tool/>
}