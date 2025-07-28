"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Product } from "@/app/types/index";

export interface CartItem extends Product {
  quantity: number;
  size?: string;
  key?: string; // Unique key for each cart item (combination of product ID and size)
}

interface CartContextType {
  cart: CartItem[];
  wishlist: Product[];
  cartItemCount: number;
  wishlistItemCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState(false);

  const imageUrlMap: Record<number, string> = {
    1: "/products/emeral-crest-tee.jpg",
    2: "/products/shades.jpg",
    3: "/products/bw-scarf.jpg",
    4: "/products/space.jpg",
    5: "/products/blocks.jpg",
    6: "/products/contrast.jpg",
  };

  useEffect(() => {
    setIsClient(true);
    // Load from localStorage
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedCart) {
      let cartItems = JSON.parse(savedCart);
      // Migrate old imageUrls to local ones
      cartItems = cartItems.map((item: any) => {
        if (imageUrlMap[item.id]) {
          return { ...item, imageUrl: imageUrlMap[item.id] };
        }
        return item;
      });
      setCart(cartItems);
    }
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isClient]);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlist.length;

  const addToCart = (product: Product & { size?: string; quantity?: number }) => {
    setCart((prev) => {
      // Create a unique key for this cart item (combination of product ID and size)
      const itemKey = `${product.id}-${product.size || 'one-size'}`;
      
      // Check if we already have this exact product with the same size in the cart
      const existingIndex = prev.findIndex(
        item => `${item.id}-${item.size || 'one-size'}` === itemKey
      );

      if (existingIndex >= 0) {
        // If item exists, update its quantity
        return prev.map((item, idx) => 
          idx === existingIndex 
            ? { 
                ...item, 
                quantity: item.quantity + (product.quantity || 1) 
              } 
            : item
        );
      }
      
      // Add new item to cart
      return [
        ...prev, 
        { 
          ...product, 
          quantity: product.quantity || 1,
          key: itemKey
        }
      ];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        cartItemCount,
        wishlistItemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
