import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/types";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } =
    useCart();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group">
      <div className="relative mb-4 overflow-hidden rounded-3xl bg-neutral-100">
        <div className="aspect-[3/4]">
          <Link href={`/product/${product.id}`}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <button
          onClick={() =>
            inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
          }
          className={`absolute right-4 top-4 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            inWishlist
              ? "bg-white/90 text-red-500"
              : "bg-white/90 text-neutral-900 opacity-0 group-hover:opacity-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={inWishlist ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </button>
        <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => addToCart(product)}
            className="w-full rounded-full bg-white/95 px-4 py-3 font-medium text-black backdrop-blur-sm transition-colors hover:bg-white"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="px-2">
        <Link href={`/product/${product.id}`}>
          <h3 className="mb-2 font-medium transition-colors hover:text-emerald-600">
            {product.name}
          </h3>
        </Link>
        <div className="mb-3 flex items-center gap-1">{/* Star rating */}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">
            {product.sizes || "XS - XXL"}
          </span>
          <span className="font-serif text-lg font-medium">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
