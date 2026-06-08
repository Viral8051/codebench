import type { Metadata } from "next";
import GradientGenerator from "./GradientGenerator";

export const metadata: Metadata = {
  title: "CSS Gradient Generator — CodeBench",
  description: "Build beautiful linear and radial CSS gradients visually. Adjust colors, angle and stops, then copy the CSS instantly. Free online gradient generator.",
};

export default function Page() {
  return <GradientGenerator/>
}