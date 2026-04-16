import Image from "next/image";

export default function ContactPage() {
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
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1
            className="mb-2 text-center text-5xl font-black"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              color: "#5bb8e8",
              letterSpacing: "0.07em",
            }}
          >
            Kontakt
          </h1>
          <p
            className="mb-16 text-center text-base italic tracking-widest"
            style={{ color: "#7ecae0", fontFamily: "var(--font-righteous), sans-serif" }}
          >
            Schreib uns
          </p>

          <div className="flex flex-col items-center gap-8 md:flex-row">
            {/* Polaroid */}
            <div
              className="polaroid shrink-0"
              style={{ transform: "rotate(-3deg)" }}
            >
              <span className="polaroid-photo">
                <Image
                  src="/images/who/michael.jpg"
                  alt="Michael Good"
                  width={280}
                  height={280}
                />
              </span>
              <div className="polaroid-footer">
                <p className="polaroid-caption">Michael ʼ79</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex-1 text-center md:text-left">
              <h2
                className="mb-4 text-3xl font-bold"
                style={{
                  fontFamily: "var(--font-righteous), sans-serif",
                  color: "#5bb8e8",
                  letterSpacing: "0.04em",
                }}
              >
                Webpagemaster
              </h2>
              <div
                className="text-base leading-relaxed"
                style={{
                  color: "var(--vintage-dark)",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                <p className="mb-2"><strong>Michael Good</strong></p>
                <p className="mb-2">Mühlesteinweg 2</p>
                <p className="mb-2">8887 Mels</p>
                <p className="mb-4">Schweiz</p>
                <p className="mb-2"><strong>Mobil:</strong> 079 578 74 14</p>
                <p><strong>E-Mail:</strong> <a href="mailto:webmaster@good.li" className="text-blue-600 hover:underline">webmaster@good.li</a></p>
              </div>
            </div>
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
