import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home",       href: "/"           },
  { label: "Who",        href: "/who"        },
  { label: "Background", href: "/background" },
  { label: "Future",     href: "/future"     },
  { label: "Contact",    href: "/contact"    },
];

const members = [
  {
    name: "Michael",
    photo: "https://picsum.photos/seed/michael/280/280",
    rotation: "-3deg",
    caption: "Michael ʼ74",
    description:
      "Beschreibung folgt …",
  },
  {
    name: "Nadine",
    photo: "https://picsum.photos/seed/nadine/280/280",
    rotation: "2.5deg",
    caption: "Nadine ʼ78",
    description:
      "Beschreibung folgt …",
  },
  {
    name: "Janis",
    photo: "https://picsum.photos/seed/janis/280/280",
    rotation: "-2deg",
    caption: "Janis ʼ05",
    description:
      "Beschreibung folgt …",
  },
  {
    name: "Sina",
    photo: "https://picsum.photos/seed/sina/280/280",
    rotation: "3.5deg",
    caption: "Sina ʼ07",
    description:
      "Beschreibung folgt …",
  },
  {
    name: "Juna",
    photo: "https://picsum.photos/seed/juna/280/280",
    rotation: "-1.5deg",
    caption: "Juna ʼ10",
    description:
      "Beschreibung folgt …",
  },
];

export default function WhoPage() {
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
              className={`vintage-btn-hero${item.href === "/who" ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ── Content ── */}
      <div
        style={{
          background: "var(--vintage-cream)",
          backgroundImage: "url('/images/sketch-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-16">

          <h1
            className="mb-2 text-center text-5xl font-black"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              color: "#5bb8e8",
              letterSpacing: "0.07em",
            }}
          >
            Familie Good
          </h1>
          <p
            className="mb-16 text-center text-base italic tracking-widest"
            style={{ color: "#7ecae0", fontFamily: "var(--font-righteous), sans-serif" }}
          >
            Wer wir sind
          </p>

          <div className="flex flex-col gap-16">
            {members.map((member, idx) => (
              <article
                key={member.name}
                className={`flex flex-col items-center gap-8 md:flex-row${
                  idx % 2 === 1 ? " md:flex-row-reverse" : ""
                }`}
              >
                {/* Polaroid */}
                <div
                  className="polaroid shrink-0"
                  style={{ transform: `rotate(${member.rotation})` }}
                >
                  <span className="polaroid-photo">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={280}
                      height={280}
                    />
                  </span>
                  <div className="polaroid-footer">
                    <p className="polaroid-caption">{member.caption}</p>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h2
                    className="mb-3 text-3xl font-bold"
                    style={{
                      fontFamily: "var(--font-righteous), sans-serif",
                      color: "#5bb8e8",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {member.name}
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: "var(--vintage-dark)",
                      fontFamily: "var(--font-geist-sans), sans-serif",
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

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
