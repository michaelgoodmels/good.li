import Link from "next/link";

const navItems = [
  { label: "Home",       href: "/"           },
  { label: "Who",        href: "/who"        },
  { label: "Background", href: "/background" },
  { label: "Future",     href: "/future"     },
  { label: "Contact",    href: "/contact"    },
];

export default function FuturePage() {
  return (
    <main>

      {/* ── Header ── */}
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
              className={`vintage-btn-hero${item.href === "/future" ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ── World Map Background ── */}
      <div
        className="relative min-h-screen"
        style={{
          background: "linear-gradient(160deg, #03101e 0%, #041826 50%, #060e1c 100%)",
        }}
      >
        {/* World map SVG background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/world-map.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
          }}
        />

        {/* Vignette overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(3,16,30,0.65) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 py-20">

          <h1
            className="mb-2 text-center text-5xl font-black"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              color: "#a8d8f0",
              letterSpacing: "0.07em",
              textShadow: "0 2px 12px rgba(0,0,0,0.6), 0 0 40px rgba(91,184,232,0.15)",
            }}
          >
            Zukunft
          </h1>
          <p
            className="mb-16 text-center text-base italic tracking-widest"
            style={{
              color: "#7ecae0",
              fontFamily: "var(--font-righteous), sans-serif",
            }}
          >
            Wohin es uns führt
          </p>

        </div>

        {/* ── Footer ── */}
        <footer
          className="relative z-20 py-8 text-center text-sm"
          style={{
            color: "#7ecae0",
            borderTop: "1px solid rgba(126,202,224,0.25)",
            fontFamily: "var(--font-righteous), sans-serif",
            fontStyle: "italic",
          }}
        >
          © {new Date().getFullYear()} Familie Good
        </footer>
      </div>

    </main>
  );
}