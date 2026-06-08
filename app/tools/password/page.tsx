import type { Metadata } from "next";
import PasswordGenerator from "./PassGenerator";

export const metadata: Metadata = {
  title: "Secure Password Generator — CodeBench",
  description: "Generate strong, random passwords instantly. Customize length, uppercase, numbers and symbols. Free secure password generator — no login, no tracking.",
};

export default function Page() {
  return <PasswordGenerator/>
}