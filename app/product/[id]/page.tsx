"use client";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Star,
  ChevronDown,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist, cart } =
    useCart();

  const product = products.find((p) => p.id === parseInt(id as string));
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const inWishlist = isInWishlist(product?.id || 0);

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

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    if (!product) return;

    // Create a cart item with the selected size and quantity
    const cartItem = {
      ...product,
      size: selectedSize,
      quantity: quantity,
    };

    addToCart(cartItem);
    setAddedToCart(true);

    // Reset the added to cart message after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  const handleWishlistClick = () => {
    if (!product) return;

    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const sizes = product.sizes?.split(", ") || ["XS", "S", "M", "L", "XL"];

  return (
    <section className="max-w-8xl mx-auto px-8 py-16">
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-emerald-600 transition-colors hover:text-emerald-800"
        >
          <ArrowLeft size={16} />
          <span>Back to products</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Images */}
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-square overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl bg-neutral-100"
              >
                <Image
                  src={product.imageUrl}
                  alt={`${product.name} view ${i}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4 flex items-start justify-between">
            <div>
              <span className="text-sm uppercase tracking-wider text-neutral-500">
                {product.category}
              </span>
              <h1 className="mb-3 mt-1 font-serif text-4xl font-medium">
                {product.name}
              </h1>
            </div>

            <button
              type="button"
              title="wishlist button"
              onClick={() =>
                inWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              className={`rounded-full p-3 ${
                inWishlist
                  ? "bg-rose-50 text-rose-500"
                  : "bg-neutral-100 text-neutral-900"
              }`}
            >
              <Heart size={20} fill={inWishlist ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i <= 4 ? "currentColor" : "none"}
                  className={i <= 4 ? "text-black" : "text-neutral-300"}
                />
              ))}
            </div>
            <span className="text-sm text-neutral-500">(127 reviews)</span>
          </div>

          <p className="mb-8 font-serif text-2xl font-medium">
            ${product.price}
          </p>

          <p className="mb-8 leading-relaxed text-neutral-600">
            {product.description ||
              "Premium quality materials with meticulous craftsmanship. Designed for comfort and longevity."}
          </p>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium">Select Size</h3>
              <button
                onClick={() => setShowSizeGuide(!showSizeGuide)}
                className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-800"
              >
                Size Guide
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showSizeGuide ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {showSizeGuide && (
              <div className="mb-4 rounded-xl bg-neutral-50 p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="pb-2 text-left">Size</th>
                      <th className="pb-2 text-left">Chest</th>
                      <th className="pb-2 text-left">Waist</th>
                      <th className="pb-2 text-left">Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">XS</td>
                      <td className="py-2">32-34"</td>
                      <td className="py-2">26-28"</td>
                      <td className="py-2">34-36"</td>
                    </tr>
                    <tr>
                      <td className="py-2">S</td>
                      <td className="py-2">35-37"</td>
                      <td className="py-2">29-31"</td>
                      <td className="py-2">37-39"</td>
                    </tr>
                    <tr>
                      <td className="py-2">M</td>
                      <td className="py-2">38-40"</td>
                      <td className="py-2">32-34"</td>
                      <td className="py-2">40-42"</td>
                    </tr>
                    <tr>
                      <td className="py-2">L</td>
                      <td className="py-2">41-43"</td>
                      <td className="py-2">35-37"</td>
                      <td className="py-2">43-45"</td>
                    </tr>
                    <tr>
                      <td className="py-2">XL</td>
                      <td className="py-2">44-46"</td>
                      <td className="py-2">38-40"</td>
                      <td className="py-2">46-48"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <div className="grid grid-cols-5 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border py-3 transition-colors ${
                    selectedSize === size
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-neutral-300 hover:border-neutral-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="mb-4 font-medium">Quantity</h3>
            <div className="flex w-32 items-center rounded-full border border-neutral-300">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 text-neutral-500 hover:text-neutral-900"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 text-neutral-500 hover:text-neutral-900"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium transition-all ${
                addedToCart
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              {addedToCart ? (
                <>
                  <Check size={20} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={20} />
                  Add to Cart
                </>
              )}
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t border-neutral-200 pt-8">
            <h3 className="mb-4 font-serif text-lg font-medium">Details</h3>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Made from sustainable organic cotton</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ethically sourced materials</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Designed for comfort and durability</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Machine wash cold, tumble dry low</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <h2 className="mb-8 font-serif text-3xl font-medium">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="relative mb-4 overflow-hidden rounded-3xl bg-neutral-100">
                  <div className="aspect-[3/4]">
                    <Image
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.name}
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="mb-2 font-medium transition-colors group-hover:text-emerald-600">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-medium">
                      ${relatedProduct.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
