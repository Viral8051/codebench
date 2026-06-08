import type { Metadata } from "next";
import CSSMinifier from "./CssMinifier";


export const metadata: Metadata = {
  title: "CSS Minifier & Compressor — CodeBench",
  description: "Minify and compress CSS instantly. Remove whitespace and comments to reduce file size and improve page load speed. Free online CSS minifier.",
};

export default function Page() {
  return <CSSMinifier/>
}