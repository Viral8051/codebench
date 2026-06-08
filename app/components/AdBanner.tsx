export default function AdBanner({ slot }: { slot: "top" | "side" }) {
  const isTop = slot === "top";
  return (
    <div style={{
      border: "1px dashed var(--border-hover)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text3)",
      fontSize: "11px",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      ...(isTop ? { height: "72px", width: "100%", marginBottom: "24px" } : { width: "160px", minHeight: "560px", flexDirection: "column", gap: "6px" })
    }}>
      <span>AdSense</span>
      <span style={{ color: "var(--text3)" }}>{isTop ? "728×90" : "160×600"}</span>
    </div>
  );
}
