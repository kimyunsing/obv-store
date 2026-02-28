export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6">
      <div className="max-w-4xl mx-auto pt-24 pb-24">
        <a href="/" className="text-sm text-zinc-500 hover:text-black transition">
          ← Back
        </a>

        <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
          Stainless Steel Sofa Table
        </h1>

        <p className="mt-4 text-zinc-500 leading-relaxed max-w-2xl">
          A single folded plane in brushed stainless steel. Built for calm spaces.
          Designed to disappear — until you need it.
        </p>

        <div className="mt-10 rounded-[28px] overflow-hidden bg-zinc-100 aspect-[16/10] flex items-center justify-center">
          <span className="text-zinc-400 text-sm">Product Image</span>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-lg tabular-nums">₩189,000</p>
          <a
            href="mailto:hello@obv-studio.com?subject=Order%20OBV%20Sofa%20Table"
            className="px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition"
          >
            Order via Email
          </a>
        </div>

        <div className="mt-10 border-t border-zinc-100 pt-8 grid gap-3 text-sm text-zinc-500">
          <div><span className="text-black">Material</span> — Stainless steel (brushed)</div>
          <div><span className="text-black">Finish</span> — Satin / Hairline</div>
          <div><span className="text-black">Lead time</span> — 2–3 weeks</div>
        </div>
      </div>
    </main>
  );
}