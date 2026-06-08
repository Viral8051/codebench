import type { Metadata } from "next";
import DiffChecker from "./DiffChecker";

export const metadata: Metadata = {
  title: "Diff Checker — Compare Text Online — CodeBench",
  description: "Compare two pieces of text side by side and see exactly what changed line by line. Free online diff checker for code, JSON, documents and more.",
};

export default function Page() {
  return <DiffChecker/>
}