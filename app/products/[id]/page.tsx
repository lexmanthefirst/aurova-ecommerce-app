"use client";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products"; // Your product data
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } =
    useCart();
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return (
      <section className="max-w-8xl mx-auto px-8 py-24 text-center">
        <h2 className="font-serif text-2xl font-medium">Product not found</h2>
        <Link
          href="/"
          className="mt-4 inline-block text-emerald-600 hover:underline"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  const inWishlist = isInWishlist(product.id);

  return (
    <>
      <Breadcrumbs />
      <section className="max-w-8xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="mb-6">
              <Link
                href="/"
                className="text-sm text-emerald-600 hover:underline"
              >
                &larr; Back to products
              </Link>
            </div>

            <h1 className="mb-4 font-serif text-4xl font-medium">
              {product.name}
            </h1>

            <div className="mb-4 flex items-center gap-1">
              {/* Star rating component */}
            </div>

            <p className="mb-6 font-serif text-2xl font-medium">
              ${product.price}
            </p>

            <p className="mb-8 text-neutral-600">
              {product.description ||
                "Premium quality materials with meticulous craftsmanship."}
            </p>

            <div className="mb-8">
              <h3 className="mb-2 font-medium">Details</h3>
              <ul className="space-y-1 text-neutral-600">
                <li>• Sustainable organic cotton</li>
                <li>• Ethically sourced materials</li>
                <li>• Designed for comfort and durability</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => addToCart(product)}
                className="rounded-full bg-black px-8 py-4 font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Add to Cart
              </button>
              <button
                onClick={() =>
                  inWishlist
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                className={`flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-medium transition-colors ${
                  inWishlist
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-neutral-300 hover:bg-neutral-50"
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
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
