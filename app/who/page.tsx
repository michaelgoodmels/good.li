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
    photo: "/images/who/michael.jpg",
    rotation: "-3deg",
    caption: "Michael ʼ79",
    description:
      "Michael ist ein visionärer Pionier und Macher zugleich. Wenn er ein Ziel vor Augen hat, peilt er es an und zieht es durch — kein Weg zu weit, kein Ziel zu hoch. Das, was er sich in den Kopf setzt, bekommt er, koste es was es wolle. Dies macht er für seine Familie, die er über alles liebt, jedoch auch für sich selbst. Seine Freizeit verbringt Michael gerne in der Natur mit seinen liebsten Menschen um sich herum. Zu Fuss, mit dem Bike oder auf den Skiern im Winter fühlt er sich in der frischen Luft wohl und holt sich so neue Energie, um im Alltag Lösungen für knifflige Probleme in der digitalen Welt zu erarbeiten. Und wenn er den Abend auf der Terrasse neben einem Feuer mit einem feinen Tropfen Wein aus seinem Lieblingsland Italien ausklingen kann, kann es vorkommen, dass er unter dem Sternenhimmel von St. Martin einschläft — und seine Träume auch in diesen verbleiben.",
  },
  {
    name: "Nadine",
    photo: "/images/who/nadine.jpg",
    rotation: "2.5deg",
    caption: "Nadine ʼ82",
    description:
      "Nadine ist die unermüdliche Kraft im Hintergrund. Ihre strukturierte Art sieht es vor, dass alles seinen Platz hat und nichts dem Zufall überlassen wird. Ihre Kochkünste sind himmlisch, und sie kann damit alle Familienmitglieder (inkl. Juna) auf die Sekunde an den Tisch beordern. Nadine ist gerne in der Natur, am liebsten jedoch an den Stellen, an denen das Meer strandet. Die Liebe zum Wein hat sie mit Michael gemeinsam, und so hilft sie jeweils, die Flaschen zu leeren — aber erst wenn alles im und um das Haus erledigt ist und alle bedient worden sind. Sie träumt von einer Residenz in Italien, von der sie mit ihrer Vespa alles erledigen kann, was nötig ist.",
  },
  {
    name: "Janis",
    photo: "/images/who/janis.png",
    rotation: "-2deg",
    caption: "Janis ʼ11",
    description:
      "Janis hat eine sehr fröhliche und aufgestellte Art und kann lachen wie kein anderer — es muss aber stimmig sein und die Gesellschaft muss passen. Seine hilfsbereite und herzensgute Art bekommen die Menschen zu spüren, die ihm gleichgesinnt und ihm gegenüber loyal sind. Janis würde sein letztes Hemd hingeben, falls es jemand benötigt. Momentan ist dieses jedoch nicht verfügbar, da er mit seinem Töffli unterwegs ist — und an diesem jede Minute, die er bekommt, schraubt.",
  },
  {
    name: "Sina",
    photo: "/images/who/sina.jpg",
    rotation: "3.5deg",
    caption: "Sina ʼ13",
    description:
      "Sina ist unser modebewusstes Wesen im Haus. Sie ist immer gestylt, trägt die Kleider bewusst und riecht extrem gut. Sehr gut organisiert und auch talentiert meistert Sina ihr Leben. Turnen ist ihre Leidenschaft — ohne Bewegung geht es ihr nicht gut. Ob mit den Skiern oder dem Snowboard die Pisten brettern: es muss einfach Tempo haben und Spass bereiten.",
  },
  {
    name: "Juna",
    photo: "/images/who/juna.jpg",
    rotation: "-1.5deg",
    caption: "Juna ʼ21",
    description:
      "Juna, unsere Hündin, ist die Schönste von uns und hat auch am meisten Energie. Juna ist stets besorgt um uns und hält die Familie zusammen. Ohne sie wäre das Leben nur halb so …",
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
