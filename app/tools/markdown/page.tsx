import type { Metadata } from "next";
import MarkdownPreviewer from "./MarkDown";

export const metadata: Metadata = {
  title: "Markdown Previewer & Editor — CodeBench",
  description: "Live Markdown previewer with side-by-side editor. Write Markdown and see the rendered HTML output in real time. Free online Markdown editor.",
};

export default function Page() {
  return <MarkdownPreviewer/>
}