import type { Metadata } from "next";
import JWTDecoder from "./JwtDecoder";

export const metadata: Metadata = {
  title: "JWT Decoder & Inspector — CodeBench",
  description: "Decode and inspect JWT tokens instantly. View header, payload and expiry status. Runs entirely in your browser — your token never leaves your device.",
};

export default function Page() {
  return <JWTDecoder/>
}