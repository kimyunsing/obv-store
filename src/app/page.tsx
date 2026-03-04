// src/app/page.tsx
import Link from "next/link";

const products = [
  {
    slug: "sofa-table",
    name: "Stainless Steel Sofa Table",
    price: "₩189,000",
    image: "/products/sofa-table.png",
    tag: "Featured",
  },
  {
    slug: "bench",
    name: "Stainless Steel Bench",
    price: "₩249,000",
    image: "/products/bench.png",
    tag: "New",
  },
  {
    slug: "shelf",
    name: "Stainless Steel Shelf",
    price: "₩329,000",
    image: "/products/shelf.png",
    tag: "Edition",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-[0.18em] text-sm">
            OBV
          </Link>

          <nav className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#products" className="hover:text-zinc-950">
              Products
            </a>
            <a href="#story" className="hover:text-zinc-950">
              Story
            </a>
            <a href="mailto:hello@obv-studio.com" className="hover:text-zinc-950">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="pt-14 md:pt-20 pb-10 md:pb-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs tracking-[0.22em] text-zinc-500">OBVIOUS, BUT BETTER</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.03em]">
              Obvious objects.
              <br />
              Essential living.
            </h1>
            <p className="mt-5 text-zinc-600 max-w-md leading-relaxed">
              Brushed stainless steel. Clean geometry. Quiet presence.
              No decoration—only form, material, function.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#products"
                className="px-5 py-3 rounded-full bg-zinc-950 text-white text-sm hover:opacity-90"
              >
                Explore products
              </a>
              <Link
                href="/product/sofa-table"
                className="px-5 py-3 rounded-full border border-zinc-200 text-sm hover:border-zinc-300"
              >
                View featured
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-xs text-zinc-500">
              <div className="rounded-2xl border border-zinc-100 p-3">
                <div className="text-zinc-950 font-medium">Finish</div>
                <div className="mt-1">Hairline / Brushed</div>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-3">
                <div className="text-zinc-950 font-medium">Build</div>
                <div className="mt-1">Folded steel</div>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-3">
                <div className="text-zinc-950 font-medium">Mood</div>
                <div className="mt-1">Quiet luxury</div>
              </div>
            </div>
          </div>

          {/* Hero image (use your sofa-table png) */}
          <div className="md:pt-2">
            <div className="rounded-[28px] overflow-hidden border border-zinc-100 bg-zinc-50 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="aspect-[4/3]">
                <img
                  src="/products/sofa-table.png"
                  alt="OBV Stainless Steel Sofa Table"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-12 md:py-16 border-t border-zinc-100">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em]">
                Products
              </h2>
              <p className="mt-2 text-zinc-600 text-sm">
                Minimal by default. Precise in detail.
              </p>
            </div>
            <div className="text-sm text-zinc-500">3 items</div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="group rounded-[24px] border border-zinc-100 overflow-hidden hover:border-zinc-200 transition"
              >
                <div className="bg-zinc-50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-sm tabular-nums text-zinc-950">{p.price}</div>
                  </div>
                  <div className="mt-2 text-xs text-zinc-500">{p.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Story */}
        <section id="story" className="py-12 md:py-16 border-t border-zinc-100">
          <h3 className="text-xl font-semibold">Story</h3>
          <p className="mt-3 text-zinc-600 leading-relaxed max-w-2xl">
            OBV begins with what’s obvious: clarity, restraint, and clean construction.
            We design objects that disappear into your life—until you need them.
          </p>
        </section>

        <footer className="py-10 border-t border-zinc-100 text-sm text-zinc-500">
          <div className="flex items-center justify-between">
            <div>© {new Date().getFullYear()} OBV</div>
            <a className="hover:text-zinc-950" href="mailto:hello@obv-studio.com">
              hello@obv-studio.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}