import { useEffect, useRef, useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/types/index";

const products: Product[] = [
  {
    id: 1,
    name: "Emerald Crest Tee",
    imageUrl: "@/public/products/emerald-crest-tee.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 2,
    name: "Emerald Crest Tee",
    imageUrl: "@/public/products/blocks.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 500,
  },
  {
    id: 3,
    name: "Emerald Tee",
    imageUrl: "@/public/products/contrast.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 4,
    name: "Emerald Tee",
    imageUrl: "@/public/products/bw-scarf.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 5,
    name: "Emerald Tee",
    imageUrl: "@/public/products/shades.jpg",
    rating: 4,
    reviewCount: 127,
    sizes: "XS - XXL",
    price: 250,
  },
  {
    id: 6,
    name: "Emerald Tee",
    imageUrl: "@/public/products/space.jpg",
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
    <section
      ref={ref}
      className={`max-w-8xl mx-auto px-8 py-16 transition-opacity transition-transform duration-700 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
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
  );
}
