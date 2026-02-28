export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.08em]">
            OBV
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] mb-6">
          Obvious objects.
          <br />
          Essential living.
        </h2>

        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
          A stainless steel table designed with absolute clarity.
          No decoration. No excess.
          Only form, material, and function.
        </p>

        <button className="mt-10 px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition">
          Buy
        </button>
      </section>

      {/* Product Section */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <div className="rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="aspect-[4/3] bg-zinc-100 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">
              Product Image
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}