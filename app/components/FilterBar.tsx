import { Collection } from "@/app/types/index";
import { useEffect, useRef, useState } from "react";

export default function FilterBar() {
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

  const categories: string[] = [
    "Essential Tees",
    "Luxury Knitwear",
    "Outerwear",
    "Tailoring",
  ];
  const collections: Collection[] = [
    { color: "bg-emerald-500", name: "Emerald Wave" },
    { color: "bg-rose-500", name: "Rose Dawn" },
    { color: "bg-neutral-800", name: "Midnight" },
  ];

  return (
    <section
      ref={ref}
      className={`bg-neutral-50/90 backdrop-blur-xl border-y border-neutral-200/50 transition-opacity transition-transform duration-700 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="max-w-8xl mr-auto ml-auto pt-6 pr-8 pb-6 pl-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <h2 className="text-lg font-serif font-medium">
              Filter &amp; Discover
            </h2>
            <span className="text-sm opacity-60">124 products</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <button
                data-dropdown-toggle="cat-dd"
                className="group flex items-center gap-2 px-5 py-3 bg-white border border-neutral-200 rounded-full text-sm font-medium hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span>Category</span>
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
                  data-lucide="chevron-down"
                  className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                id="cat-dd"
                className="hidden absolute z-20 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-200 p-2"
              >
                {categories.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <button
                data-dropdown-toggle="col-dd"
                className="group flex items-center gap-2 px-5 py-3 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-medium hover:bg-emerald-100 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                  Emerald
                </span>
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
                  data-lucide="chevron-down"
                  className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                id="col-dd"
                className="hidden absolute z-20 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-200 p-2"
              >
                {collections.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-100 text-sm transition-colors"
                  >
                    <span
                      className={`w-3 h-3 ${item.color} rounded-full`}
                    ></span>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search essentials..."
                className="w-64 border border-neutral-200 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 transition-all duration-300"
              />
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
                data-lucide="search"
                className="lucide lucide-search w-4 h-4 absolute right-4 top-3.5 text-neutral-400"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
