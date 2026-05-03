import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <div>
      <h1 className="text-2xl mb-4">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}