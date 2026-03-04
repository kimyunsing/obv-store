// src/app/product/[slug]/page.tsx
export default function ProductDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const products: Record<string, { name: string; image: string; price: string; desc: string }> = {
    "bench": {
      name: "Stainless Bench",
      image: "/products/bench.png",
      price: "₩189,000",
      desc: "Minimal stainless bench for calm spaces."
    },
    "shelf": {
      name: "Stainless Shelf",
      image: "/products/shelf.png",
      price: "₩249,000",
      desc: "A clean shelf with quiet structure."
    },
    "sofa-table": {
      name: "Stainless Sofa Table",
      image: "/products/sofa-table.png",
      price: "₩189,000",
      desc: "A single folded plane in brushed stainless steel."
    },
  }

  const item = products[slug]

  if (!item) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Not found</h1>
        <p className="mt-3 text-zinc-500">No product for: <span className="font-mono">{slug}</span></p>
        <a className="mt-8 inline-block rounded-full border px-4 py-2 text-sm" href="/product">
          Back to products
        </a>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <a className="text-sm text-zinc-500 hover:text-zinc-900" href="/product">← Back</a>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="rounded-[28px] overflow-hidden bg-zinc-100">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{item.name}</h1>
          <p className="mt-4 text-zinc-500 leading-relaxed">{item.desc}</p>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-lg tabular-nums">{item.price}</p>
            <a
              className="px-6 py-3 bg-black text-white rounded-full text-sm"
              href={`mailto:hello@obv-studio.com?subject=Order%20-%20${encodeURIComponent(item.name)}`}
            >
              Order via Email
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}