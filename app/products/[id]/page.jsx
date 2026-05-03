import products from "@/data/products.json";
import { redirect } from "next/navigation";

export default function ProductDetails({ params }) {
  const user = true; // change later to real auth

  if (!user) {
    redirect("/login");
  }

  const product = products.find((p) => p.id == params.id);

  return (
    <div className="grid md:grid-cols-2 gap-6">

      <img src={product.image} className="rounded" />

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="my-3">{product.description}</p>
        <p className="text-orange-500 text-xl">${product.price}</p>
      </div>

    </div>
  );
}