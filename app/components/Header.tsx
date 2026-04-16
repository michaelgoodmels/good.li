"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Who", href: "/who" },
  { label: "Background", href: "/background" },
  { label: "Future", href: "/future" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 px-6 py-4"
      style={{
        background: "rgba(5, 15, 30, 0.82)",
        borderBottom: "1px solid rgba(120, 190, 230, 0.20)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <Link
        href="/"
        className="font-black tracking-wider"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: "1.6rem",
          color: "#a8d8f0",
          textDecoration: "none",
        }}
      >
        Familie Good
      </Link>

      <nav className="flex flex-wrap gap-2" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`vintage-btn-hero${pathname === item.href ? " active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

