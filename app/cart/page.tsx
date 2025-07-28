"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function CartPage() {
  const { cart, cartItemCount, removeFromCart, updateQuantity, addToCart } =
    useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 5.99 : 0; // Flat rate shipping
  const total = subtotal + shipping;

  return (
    <>
      <Breadcrumbs />
      <section className="max-w-8xl mx-auto min-h-screen px-8 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl font-medium">
            Your Cart ({cartItemCount})
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="py-16 text-center">
            <h2 className="mb-4 text-2xl font-medium">Your cart is empty</h2>
            <Link
              href="/"
              className="inline-block rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-neutral-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-6 border-b border-neutral-200 pb-8 sm:flex-row"
                  >
                    <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-3xl bg-neutral-100">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={192}
                        height={192}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="mb-1 text-xl font-medium">
                            {item.name}
                          </h2>
                          <p className="mb-4 text-neutral-600">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-500 hover:text-neutral-900"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <label
                          htmlFor={`quantity-${item.id}`}
                          className="text-neutral-500"
                        >
                          Quantity:
                        </label>
                        <div className="flex items-center rounded-full border border-neutral-300">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 text-neutral-500 hover:text-neutral-900"
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 text-neutral-500 hover:text-neutral-900"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-8 rounded-3xl bg-neutral-50 p-8">
                <h2 className="mb-6 font-serif text-2xl font-medium">
                  Order Summary
                </h2>

                <div className="mb-8 space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="mt-4 flex justify-between border-t border-neutral-200 pt-4 text-lg font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="mb-4 w-full rounded-full bg-black py-4 font-medium text-white transition-colors hover:bg-neutral-800">
                  Proceed to Checkout
                </button>

                <Link
                  href="/"
                  className="block text-center text-neutral-600 hover:text-neutral-900 hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
