import type { Metadata } from "next";
import JsonFormatter from "./JsonTool";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator — CodeBench",
  description: "Free online JSON formatter and validator. Format, minify and validate JSON instantly in your browser. No login required.",
};

export default function Page() {
  return <JsonFormatter/>
}