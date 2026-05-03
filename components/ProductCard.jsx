import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          className="h-44 w-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        <h2 className="text-sm font-medium line-clamp-2">
          {product.name}
        </h2>

        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-bold text-lg">
            ${product.price}
          </span>

          <span className="text-xs text-gray-500">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Button */}
        <Link href={`/products/${product.id}`}>
          <button className="w-full btn-primary text-sm mt-2">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
}