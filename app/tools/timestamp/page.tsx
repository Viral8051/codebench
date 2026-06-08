import type { Metadata } from "next";
import TimestampConverter from "./TimeStamp";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter — CodeBench",
  description: "Convert Unix timestamps to human-readable dates and vice versa. Live Unix clock, supports seconds and milliseconds. Free online timestamp converter.",
};

export default function Page() {
  return <TimestampConverter/>
}