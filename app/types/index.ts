export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  sizes?: string;
  category?: string;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SocialIcon {
  name: string;
  icon: string;
}

export interface Collection {
  color: string;
  name: string;
}

export interface StatItem {
  value: string;
  label: string;
}
