export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo (click to top) */}
          <a
            href="#top"
            className="text-3xl md:text-4xl font-semibold tracking-[-0.08em] hover:opacity-70 transition"
            aria-label="OBV Home"
          >
            OBV
          </a>

          {/* Simple nav */}
          <nav className="text-sm text-zinc-500 flex gap-6">
            <a href="#product" className="hover:text-black transition">Product</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Top anchor */}
      <div id="top" />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em]">
          Obvious objects.
          <br />
          Essential living.
        </h1>

        <p className="mt-6 text-zinc-500 text-lg leading-relaxed max-w-2xl">
          A stainless steel table designed with absolute clarity.
          No decoration. No excess.
          Only form, material, and function.
        </p>

        <div className="mt-10 flex items-center gap-3">
          {/* Buy scroll */}
          <a
            href="#product"
            className="px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition"
          >
            Buy
          </a>

          {/* Contact scroll */}
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-200 rounded-full text-sm tracking-wide hover:bg-zinc-50 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Product
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
              Stainless Steel Sofa Table
            </h2>
          </div>
          <p className="text-sm text-zinc-500 tabular-nums">₩189,000</p>
        </div>

        {/* Card (clickable) */}
        <a
          href="/product"
          className="block rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition"
          aria-label="Open product page"
        >
          <div className="aspect-[16/10] bg-zinc-100 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Product Image</span>
          </div>
          <div className="p-6">
            <p className="text-zinc-500 text-sm">
              One bend. One surface. Zero noise.
            </p>
            <p className="mt-2 text-sm text-black underline underline-offset-4">
              View details
            </p>
          </div>
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-28 max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          Contact
        </p>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
          Talk to OBV
        </h3>

        <div className="mt-6 rounded-[20px] border border-zinc-200 p-6 max-w-xl">
          <p className="text-zinc-500 text-sm">
            For orders and collaborations, email us:
          </p>
          <a
            className="mt-3 inline-block text-black underline underline-offset-4"
            href="mailto:hello@obv-studio.com"
          >
            hello@obv-studio.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto text-sm text-zinc-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} OBV</span>
          <a href="#top" className="hover:text-black transition">Back to top</a>
        </div>
      </footer>
    </main>
  );
}