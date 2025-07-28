"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/app/data/products";

export default function Header() {
  const { cartItemCount, wishlistItemCount } = useCart();
  const navItems = ["Collections", "Essentials", "Archive"];
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <header
      className="fixed top-0 z-40 w-full border-b border-neutral-200/50 bg-neutral-50/80 backdrop-blur-xl"
      data-reveal
      style={{ opacity: 0, transform: "translateY(-20px)" }}
    >
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="font-serif text-2xl font-medium tracking-tight"
          >
            Aurova
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="group relative">
                <span className="transition-colors duration-300 hover:text-neutral-600">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex items-center gap-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(e.target.value.length > 0);
              }}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              placeholder="Search products..."
              className="w-64 rounded-full border border-neutral-200 px-4 py-2 transition-all duration-300 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
            {showDropdown && filtered.length > 0 && (
              <div className="absolute z-50 mt-2 w-64 rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="block rounded-xl px-4 py-2 text-sm transition-colors hover:bg-neutral-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button className="hidden text-sm font-medium transition-colors hover:text-neutral-600 md:block">
            Search
          </button>
          <Link href="/wishlist" className="group relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="heart"
              className="lucide lucide-heart h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            {wishlistItemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                {wishlistItemCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="group relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="shopping-bag"
              className="lucide lucide-shopping-bag h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M16 10a4 4 0 0 1-8 0"></path>
              <path d="M3.103 6.034h17.794"></path>
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
