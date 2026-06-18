export type Category = "Mobiles" | "Laptops" | "Headphones" | "Wearables" | "Tablets";

export type Seller = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  delivery: string;
  stock: "In stock" | "Limited" | "Out of stock";
  affiliateUrl: string;
};

export type BuyLink = {
  seller: "Amazon" | "Flipkart" | "Official";
  url: string;
};

export type ProductVariant = {
  id: string;
  label: string;
  ram: string;
  rom: string;
  price: number;
  mrp: number;
};

export type Review = {
  id: string;
  user: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  createdAt: string;
};

export type Specs = {
  display: string;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  os: string;
  weight: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  image: string;
  gallery: string[];
  angles: string[];
  keywords: string[];
  variants: ProductVariant[];
  buyLinks: BuyLink[];
  price: number;
  mrp: number;
  rating: number;
  reviewsCount: number;
  popularity: number;
  launchedAt: string;
  badges: string[];
  stockStatus: "In stock" | "Limited" | "Out of stock";
  specs: Specs;
  pros: string[];
  cons: string[];
  sellers: Seller[];
  reviews: Review[];
};

export type CartLine = {
  productId: string;
  sellerId: string;
  quantity: number;
};
