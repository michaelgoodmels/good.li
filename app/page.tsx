import Image from "next/image";
import Link from "next/link";

// Force dynamic rendering so Math.random() runs on every request
export const dynamic = "force-dynamic";

// ─── Data ─────────────────────────────────────────────────────────────────────

const destinations = [
  {
    label: "Fort Lauderdale",
    year: "2007",
    prefix: "/images/fort-lauderdale/fl",
    count: 10,
    // photo 7 (index 6) rotated further left
    rotations: ["-4deg", "3deg", "-1.5deg", "4.5deg", "-2.5deg", "3.5deg", "-9deg", "1.5deg", "-4.5deg", "2deg"],
  },
  {
    label: "California & Mexico",
    year: "2009",
    prefix: "/images/california-mexico/ca",
    count: 10,
    rotations: ["-4deg", "3deg", "-1.5deg", "4.5deg", "-2.5deg", "3.5deg", "-3deg", "1.5deg", "-4.5deg", "2deg"],
  },
  {
    label: "Miami",
    year: "2011",
    prefix: "/images/miami/mi",
    count: 10,
    // photo 4 (index 3) rotated right, photo 5 (index 4) rotated left
    rotations: ["-4deg", "3deg", "-1.5deg", "10deg", "-9deg", "3.5deg", "-3deg", "1.5deg", "-4.5deg", "2deg"],
  },
  {
    label: "Malediven",
    year: "2007",
    prefix: "/images/maledives/mal",
    count: 10,
    rotations: ["-4deg", "3deg", "-1.5deg", "4.5deg", "-2.5deg", "3.5deg", "-3deg", "1.5deg", "-4.5deg", "2deg"],
  },
];

// Pool of all 40 gallery photos — one is picked at random for the hero
const ALL_PHOTOS = destinations.flatMap(({ prefix, count }) =>
  Array.from({ length: count }, (_, i) => `${prefix}-${String(i + 1).padStart(2, "0")}.jpg`)
);

const navItems = [
  { label: "Home",       href: "/"           },
  { label: "Who",        href: "/who"        },
  { label: "Background", href: "/background" },
  { label: "Future",     href: "/future"     },
  { label: "Contact",    href: "/contact"    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  // New random hero photo on every page load
  const heroPhoto = ALL_PHOTOS[Math.floor(Math.random() * ALL_PHOTOS.length)];

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden">

        <Image
          src={heroPhoto}
          alt="Familienfoto"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(168deg, rgba(0,20,40,0.30) 0%, rgba(0,10,25,0.55) 100%)",
          }}
        />

        {/* Title + subtitle + nav — all centred in the hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">

          <h1 className="stone-title fade-in text-center text-5xl font-black md:text-7xl lg:text-8xl">
            Familie Good
          </h1>

          <p
            className="fade-in-delay text-center text-lg font-light italic tracking-widest"
            style={{ color: "#a8d8f0", fontFamily: "var(--font-righteous), sans-serif" }}
          >
            Unsere Geschichte
          </p>

          {/* Navigation below the title */}
          <nav
            className="fade-in-delay-2 flex flex-wrap items-center justify-center gap-3 px-4"
            aria-label="Hauptnavigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`vintage-btn-hero${item.href === "/" ? " active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>

        <div
          className="fade-in-delay-2 absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest"
          style={{ color: "#a8d8f0", fontFamily: "var(--font-righteous), sans-serif" }}
        >
          ↓
        </div>
      </section>

      {/* ── Main content ── */}
      <div
        style={{
          background: "var(--vintage-cream)",
          backgroundImage: "url('/images/sketch-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >

        {destinations.map((dest) => (
          <section key={dest.label} className="fade-in-delay px-6 py-16">

            <h2
              className="mb-10 text-center text-3xl font-bold"
              style={{
                color: "#5bb8e8",
                fontFamily: "var(--font-righteous), sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              {dest.label}
              <span
                className="ml-3 text-base font-normal italic"
                style={{ color: "#7ecae0" }}
              >
                {dest.year}
              </span>
            </h2>

            <div className="flex flex-wrap items-start justify-center gap-10">
              {Array.from({ length: dest.count }, (_, i) => {
                const num = String(i + 1).padStart(2, "0");
                const src = `${dest.prefix}-${num}.jpg`;
                return (
                  <div
                    key={src}
                    className="polaroid"
                    style={{ transform: `rotate(${dest.rotations[i]})` }}
                  >
                    <span className="polaroid-photo">
                      <Image
                        src={src}
                        alt={`${dest.label} ${dest.year} – Foto ${num}`}
                        width={280}
                        height={280}
                      />
                    </span>
                    <div className="polaroid-footer">
                      <p className="polaroid-caption">
                        {dest.label} ʼ{dest.year.slice(2)}
                      </p>
                      <span className="polaroid-number">Polaroid {num}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* ── Footer ── */}
        <footer
          className="py-8 text-center text-sm"
          style={{
            color: "#7ecae0",
            borderTop: "1px solid #7ecae0",
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
