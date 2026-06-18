export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: "mobile" | "laptop" | "headphones";

  image: string;
  gallery: string[];
  angles: string[];

  price: number;
  mrp: number;

  rating: number;
  reviewsCount: number;

  badges: string[];

  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    battery?: string;
    camera?: string;
    display?: string;
    connectivity?: string;
  };

  pros: string[];
  cons: string[];

  reviews: {
    id: string;
    title: string;
    user: string;
    rating: number;
    body: string;
    verified?: boolean;
    createdAt: string;
  }[];

  keywords: string[];

  variants: {
    ram: string[];
    storage: string[];
  };

  buyLinks: {
    amazon: string;
    flipkart: string;
    official: string;
  };

  popularity?: number;
};