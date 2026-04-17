import Image from "next/image";
import { destinations } from "@/app/lib/gallery-data";

export default function GalleryPage() {
  return (
    <main>
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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1
            className="mb-2 text-center text-5xl font-black"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              color: "#5bb8e8",
              letterSpacing: "0.07em",
            }}
          >
            Galerie
          </h1>
          <p
            className="mb-16 text-center text-base italic tracking-widest"
            style={{ color: "#7ecae0", fontFamily: "var(--font-righteous), sans-serif" }}
          >
            Unsere schönsten Erinnerungen
          </p>

          {destinations.map((dest) => (
            <section key={dest.label} className="fade-in-delay mb-20">
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

