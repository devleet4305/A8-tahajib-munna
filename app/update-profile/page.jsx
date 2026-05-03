import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-10">

      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-orange-400 to-pink-500 text-white p-10 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Summer Sale 50% OFF 🔥
        </h1>
        <p className="opacity-90">
          Discover trending summer essentials
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-orange-500 rounded-full font-semibold">
          Shop Now
        </button>
      </section>

      {/* Popular Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Popular Products
        </h2>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Extra Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white shadow">
          <h3 className="font-semibold">🌞 Stay Hydrated</h3>
          <p className="text-sm text-gray-500">
            Drink water frequently during summer
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow">
          <h3 className="font-semibold">🧴 Skincare Tips</h3>
          <p className="text-sm text-gray-500">
            Use sunscreen to protect your skin
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow">
          <h3 className="font-semibold">🏖️ Beach Ready</h3>
          <p className="text-sm text-gray-500">
            Pack essentials before going out
          </p>
        </div>
      </section>

    </div>
  );
}