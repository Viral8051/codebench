"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact Us" },
  { href: "/", label: "Tools" },
  // { href: "/cv", label: "CV" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav style={{
      background: "var(--bg2)",
      borderBottom: "1px solid var(--border)",
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "56px",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.5px" }}>
          code<span style={{ color: "var(--accent)" }}>Bench</span>
        </span>
      </Link>
      <div style={{ display: "flex", gap: "4px" }}>
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} style={{
            padding: "6px 14px",
            borderRadius: "8px",
            fontSize: "13px",
            textDecoration: "none",
            fontWeight: pathname === l.href ? 500 : 400,
            color: pathname === l.href ? "var(--accent)" : "var(--text2)",
            background: pathname === l.href ? "rgba(0,200,150,0.08)" : "transparent",
            transition: "all 0.15s",
          }}>{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}
