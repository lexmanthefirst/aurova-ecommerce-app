import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { CartProvider } from "@/app/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurova • Simplify",
  description: "Precision-crafted essentials engineered for all-day ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden bg-neutral-50 text-neutral-900 antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
