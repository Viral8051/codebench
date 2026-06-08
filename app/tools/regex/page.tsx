import type { Metadata } from "next";
import RegexTester from "./Regex";

export const metadata: Metadata = {
  title: "Regex Tester & Debugger — CodeBench",
  description: "Test and debug regular expressions online with live match highlighting. Supports flags, quick reference cheat sheet included. Free regex tester.",
};

export default function Page() {
  return <RegexTester/>
}