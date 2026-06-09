"use client";

export default function AdBanner({ slot }: { slot: "top" | "side" }) {
  const isTop = slot === "top";

  return (
    <div
      style={{
        width: isTop ? "100%" : "160px",
        minHeight: isTop ? "90px" : "600px",
        marginBottom: isTop ? "24px" : "0",
      }}
    />
  );
}