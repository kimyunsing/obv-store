const products: Record<string, { name: string; price: string; img: string; desc: string }> = {
  "sofa-table": {
    name: "Stainless Steel Sofa Table",
    price: "₩189,000",
    img: "/products/sofa-table.png",
    desc: "A single folded plane in brushed stainless steel. Built for calm spaces.",
  },
  bench: {
    name: "Stainless Steel Bench",
    price: "₩249,000",
    img: "/products/bench.png",
    desc: "A clean bench for entryways and studios. Strong, quiet, minimal.",
  },
  shelf: {
    name: "Stainless Steel Shelf",
    price: "₩219,000",
    img: "/products/shelf.png",
    desc: "A minimal shelf with clear geometry. Made to hold, designed to disappear.",
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products[params.slug];

  if (!p) {
    return (
      <main className="container" style={{ padding: "60px 0" }}>
        <a className="small" href="/">← Back</a>
        <h1 style={{ marginTop: 14 }}>Not found</h1>
        <p className="small">This product does not exist yet.</p>
      </main>
    );
  }

  return (
    <main>
      <div className="nav">
        <div className="container" style={{ padding: "18px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontWeight: 800, letterSpacing: "-0.06em", fontSize: 22 }}>OBV</a>
          <a className="small" href="/">← Back</a>
        </div>
      </div>

      <section className="container" style={{ padding: "40px 0 64px" }}>
        <div className="small" style={{ letterSpacing: ".18em", textTransform: "uppercase" }}>Product</div>
        <h1 style={{ margin: "10px 0 10px", fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.05, letterSpacing: "-0.05em", fontWeight: 780 }}>
          {p.name}
        </h1>
        <p className="small" style={{ maxWidth: 720 }}>{p.desc}</p>

        <div className="card" style={{ marginTop: 18 }}>
          <div style={{ aspectRatio: "16/11", background: "var(--card)" }}>
            <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>

        <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.price}</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href={`mailto:hello@obv-studio.com?subject=Order%20${encodeURIComponent(p.name)}`}>Order</a>
            <a className="btn btn-ghost" href={`mailto:hello@obv-studio.com?subject=Question%20about%20${encodeURIComponent(p.name)}`}>Ask</a>
          </div>
        </div>
      </section>
    </main>
  );
}