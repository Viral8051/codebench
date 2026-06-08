import type { Metadata } from "next";
import WordCounter from "./WordCount";

export const metadata: Metadata = {
  title: "Word Counter & Character Counter — CodeBench",
  description: "Free online word counter. Count words, characters, lines, sentences and reading time instantly as you type. No login required.",
};

export default function Page() {
  return <WordCounter/>
}