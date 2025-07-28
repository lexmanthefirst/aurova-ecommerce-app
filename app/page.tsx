"use client";

import { useEffect } from "react";
import Head from "next/head";
import CustomCursor from "@/app/components/CursorFollower";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HeroImage from "@/app/components/HeroImage";
import Stats from "@/app/components/Stat";
import FilterBar from "@/app/components/FilterBar";
import Products from "@/app/products";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { initDropdowns } from "@/app/lib/dropdown";
import { initScrollAnimations } from "@/app/lib/scroll";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }

    initDropdowns();
    initScrollAnimations();
  }, []);

  return (
    <div className="overflow-x-hidden bg-neutral-50 text-neutral-900 antialiased">
      <Head>
        <title>Simplify • Aurova</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <CustomCursor />
      <Header />
      <Breadcrumbs />
      <Hero />
      <HeroImage />
      <Stats />
      <FilterBar />

      {/* Updated Products Section */}
      <section
        className="max-w-8xl mx-auto px-8 py-16"
        data-reveal
        style={{ opacity: 1, transform: "translateY(0px)" }}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-medium">
                EmeraldWave Collection
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Lush tones meet feather-light textures in our most anticipated
                seasonal collection.
              </p>
            </div>

            {/* View All Products Button */}
            <div className="mt-16 flex justify-center">
              <Link
                href="/products"
                className="group flex items-center gap-2 rounded-full bg-black px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-neutral-800"
              >
                <span>View All Products</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
