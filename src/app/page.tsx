// src/app/product/page.tsx
export default function ProductList() {
  const items = [
    { slug: "bench", name: "Stainless Bench", image: "/products/bench.png", price: "₩189,000" },
    { slug: "shelf", name: "Stainless Shelf", image: "/products/shelf.png", price: "₩249,000" },
    { slug: "sofa-table", name: "Stainless Sofa Table", image: "/products/sofa-table.png", price: "₩189,000" },
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
      <p className="mt-2 text-zinc-500">Minimal objects, essential living.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <a
            key={p.slug}
            href={`/product/${p.slug}`}
            className="group rounded-[28px] border border-zinc-200 bg-white overflow-hidden hover:shadow-sm transition"
          >
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-500">OBV</p>
                  <h2 className="mt-1 text-lg font-medium">{p.name}</h2>
                </div>
                <p className="text-sm tabular-nums">{p.price}</p>
              </div>
              <p className="mt-3 text-sm text-zinc-500">View details →</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}