export default function BackgroundPage() {
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
            Hintergrund
          </h1>
          <p
            className="mb-16 text-center text-base italic tracking-widest"
            style={{ color: "#7ecae0", fontFamily: "var(--font-righteous), sans-serif" }}
          >
            Unsere Geschichte
          </p>
          <p className="text-center text-lg">
            Diese Seite ist noch in Arbeit.
          </p>
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
