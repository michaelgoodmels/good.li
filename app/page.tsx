import Image from "next/image";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const polaroids: { seed: string; caption: string; rotation: string }[] = [
  { seed: "alpine-meadow-1",  caption: "Sommer 2023",   rotation: "-4deg"  },
  { seed: "mountain-lake-2",  caption: "Wandertag",     rotation:  "3deg"  },
  { seed: "forest-path-3",    caption: "Bergluft",      rotation: "-1.5deg"},
  { seed: "family-hike-4",    caption: "Gemeinsam",     rotation:  "4.5deg"},
  { seed: "sunset-peak-5",    caption: "Erinnerungen",  rotation: "-2.5deg"},
];

const navItems: { label: string; href: string }[] = [
  { label: "Home",       href: "/"           },
  { label: "Who",        href: "/who"        },
  { label: "Background", href: "/background" },
  { label: "Future",     href: "/future"     },
  { label: "Contact",    href: "/contact"    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden">

        {/* Mountain panorama — replace src with your Michele Agostinelli photo */}
        <Image
          src="https://picsum.photos/seed/mountain-panorama-alps/1600/900"
          alt="Bergpanorama"
          fill
          className="object-cover object-center"
          priority
          /* Warm up whatever landscape comes through: lift warmth, add drama */
          style={{ filter: "sepia(12%) saturate(135%) brightness(0.86) contrast(1.14)" }}
        />

        {/*
         * Agostinelli-style golden-hour atmosphere:
         * Layer 1 — warm amber wash across the sky/upper portion
         * Layer 2 — edge vignette to push focus inward
         */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(168deg, rgba(190,118,16,0.22) 0%, rgba(130,60,8,0.38) 48%, rgba(12,6,2,0.74) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, transparent 38%, rgba(8,4,1,0.52) 100%)",
          }}
        />

        {/* Centred title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="stone-title fade-in text-center text-5xl font-black md:text-7xl lg:text-8xl">
            Familie Good
          </h1>

          {/* Subtitle tagline */}
          <p
            className="fade-in-delay mt-6 text-center text-lg font-light italic tracking-widest"
            style={{
              color: "#d4c5a9",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Unsere Geschichte
          </p>
        </div>

        {/* Subtle scroll hint */}
        <div
          className="fade-in-delay-2 absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest"
          style={{ color: "#c8a47e", fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          ↓
        </div>
      </section>

      {/* ── Main content area ── */}
      <div style={{ background: "var(--vintage-cream)" }}>

        {/* ── Polaroid Gallery ── */}
        <section className="fade-in-delay px-6 py-20">

          <h2
            className="mb-12 text-center text-2xl font-bold italic"
            style={{
              color: "var(--vintage-brown)",
              fontFamily: "var(--font-playfair), Georgia, serif",
              letterSpacing: "0.05em",
            }}
          >
            Momente
          </h2>

          {/* Scattered polaroid layout */}
          <div className="flex flex-wrap items-start justify-center gap-10">
            {polaroids.map((photo) => (
              <div
                key={photo.seed}
                className="polaroid"
                style={{ transform: `rotate(${photo.rotation})` }}
              >
                {/* Slight sepia filter for the vintage look */}
                <Image
                  src={`https://picsum.photos/seed/${photo.seed}/300/300`}
                  alt={photo.caption}
                  width={200}
                  height={200}
                  className="block"
                  style={{ filter: "sepia(42%) saturate(70%) brightness(0.96) contrast(1.06)" }}
                />
                <p className="polaroid-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Navigation ── */}
        <nav
          className="fade-in-delay-2 flex flex-wrap items-center justify-center gap-4 px-6 pb-20"
          aria-label="Hauptnavigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`vintage-btn${item.href === "/" ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── Footer ── */}
        <footer
          className="py-8 text-center text-sm"
          style={{
            color: "var(--vintage-muted)",
            borderTop: "1px solid var(--vintage-tan)",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontStyle: "italic",
          }}
        >
          © {new Date().getFullYear()} Familie Good
        </footer>

      </div>
    </main>
  );
}
