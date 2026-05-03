import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-10 pb-10">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white p-10 shadow-lg">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Summer Mega Sale 🔥
          </h1>

          <p className="opacity-90">
            Up to 50% off on all summer essentials
          </p>

          <button className="btn-primary mt-6">
            Shop Now
          </button>
        </div>
      </section>

      {/* FLASH SALE */}
      <section className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Flash Sale</h2>
          <button className="btn-primary text-sm">
            Shop All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </section>

    </div>
  );
}