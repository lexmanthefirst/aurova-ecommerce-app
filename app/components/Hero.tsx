import { useEffect, useRef, useState } from "react";

export default function Hero() {
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
      className={`relative min-h-screen flex items-center justify-center pt-20 transition-opacity transition-transform duration-700 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-neutral-50 to-rose-50"></div>
      <div className="relative max-w-8xl mx-auto px-8 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium border border-neutral-200/50">
            New Collection
          </span>
        </div>
        <h1 className="text-[12vw] lg:text-[10rem] xl:text-[12rem] leading-[0.8] font-serif font-medium tracking-tighter mb-8">
          <span className="block">Simplify</span>
        </h1>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-light leading-relaxed mb-12">
          <p className="opacity-80">
            Precision-crafted essentials engineered for all-day ease and
            effortless sophistication.
          </p>
          <p className="opacity-80">
            Minimal style that empowers your routine—nothing more, nothing less
            than perfection.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              Explore Collection
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
                data-lucide="arrow-right"
                className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border border-neutral-300 rounded-full font-medium hover:bg-white hover:shadow-lg transition-all duration-300">
            Watch Story
          </button>
        </div>
      </div>
    </section>
  );
}
