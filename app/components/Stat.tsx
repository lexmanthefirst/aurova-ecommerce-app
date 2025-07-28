import { useEffect, useRef, useState } from "react";
import { StatItem } from "../types";

const stats: StatItem[] = [
  { value: "15K+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "5★", label: "Average Rating" },
];

export default function Stats() {
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
      className={`max-w-8xl mx-auto px-8 py-24 transition-opacity transition-transform duration-700 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="group">
            <div className="text-4xl font-serif font-medium mb-2 transition-transform duration-300 group-hover:scale-105">
              {stat.value}
            </div>
            <div className="text-sm opacity-60 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
