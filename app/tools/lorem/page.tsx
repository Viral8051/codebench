import type { Metadata } from "next";
import LoremIpsum from "./LoremIpsum";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — CodeBench",
  description: "Generate Lorem Ipsum placeholder text by paragraphs, sentences or words. Randomised variations every time. Free online Lorem Ipsum generator.",
};

export default function Page() {
  return <LoremIpsum/>
}