"use client";
import { useEffect, useRef, useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/types/index";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Header from "@/app/components/Header";

const products: Product[] = [
  {
    id: 1,
    name: "Emerald Crest Tee",
    imageUrl: "/products/emeral-crest-tee.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 2,
    name: "Shades",
    imageUrl: "/products/shades.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 500,
  },
  {
    id: 3,
    name: "BW Scarf",
    imageUrl: "/products/bw-scarf.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 4,
    name: "Space",
    imageUrl: "/products/space.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 5,
    name: "Blocks",
    imageUrl: "/products/blocks.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 6,
    name: "Contrast",
    imageUrl: "/products/contrast.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setRevealed(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section
        ref={ref}
        className={`max-w-8xl mx-auto px-8 py-16 transition-opacity transition-transform duration-700 ${
          revealed ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Collection Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-40">
              {/* ... collection info content */}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
