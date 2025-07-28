import { useEffect, useRef, useState } from "react";
import { SocialIcon } from "@/app/types";

const socialIcons: SocialIcon[] = [
  { name: "instagram", icon: "instagram" },
  { name: "twitter", icon: "twitter" },
  { name: "facebook", icon: "facebook" },
];

const collections: string[] = [
  "Emerald Wave",
  "Rose Dawn",
  "Midnight Series",
  "Essential Basics",
];

const support: string[] = [
  "Size Guide",
  "Care Instructions",
  "Returns & Exchanges",
  "Contact Us",
];

const company: string[] = ["About", "Sustainability", "Careers", "Press"];

export default function Footer() {
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
    <footer
      ref={ref}
      className={`bg-neutral-900 text-white transition-opacity transition-transform duration-700 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="max-w-8xl mx-auto px-8 py-16">
        {/* ... footer content */}
      </div>
    </footer>
  );
}
