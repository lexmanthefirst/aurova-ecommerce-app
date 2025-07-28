"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, isInWishlist } = useCart();

  return (
    <>
      <Breadcrumbs />
      <section className="max-w-8xl mx-auto min-h-screen px-8 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl font-medium">
            Your Wishlist ({wishlist.length})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="py-16 text-center">
            <h2 className="mb-4 text-2xl font-medium">
              Your wishlist is empty
            </h2>
            <p className="mx-auto mb-6 max-w-md text-neutral-600">
              Save items you love by clicking the heart icon on any product
            </p>
            <Link
              href="/"
              className="inline-block rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-neutral-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((product) => (
              <div key={product.id} className="group">
                <div className="relative mb-4 overflow-hidden rounded-3xl bg-neutral-100">
                  <div className="aspect-[3/4]">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={600}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute right-4 top-4 rounded-full bg-white/90 p-3 backdrop-blur-sm transition-all hover:scale-110"
                    title="Remove from wishlist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    title="Add to cart"
                  >
                    <span className="flex w-full items-center justify-center gap-2 rounded-full bg-white/95 px-4 py-3 font-medium text-black backdrop-blur-sm transition-colors hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Add to Cart
                    </span>
                  </button>
                </div>
                <div className="px-2">
                  <h3 className="mb-2 font-medium">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-medium">
                      ${product.price}
                    </span>
                    <button
                      onClick={() =>
                        isInWishlist(product.id) &&
                        removeFromWishlist(product.id)
                      }
                      className="p-2 text-neutral-500 hover:text-neutral-900"
                      title={
                        isInWishlist(product.id)
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={
                          isInWishlist(product.id) ? "currentColor" : "none"
                        }
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
