import type { Metadata } from "next";
import ColorConverter from "./ColorConverter";


export const metadata: Metadata = {
  title: "Color Converter HEX RGB HSL — CodeBench",
  description: "Convert colors between HEX, RGB and HSL instantly. Live color preview and one-click copy for every format. Free online color converter.",
};
export default function Page() {
  return <ColorConverter/>
}