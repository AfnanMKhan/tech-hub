export type BlogPost = {
  slug: string;
  title: string;
  content: string;
  keywords: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-laptops-under-50000",
    title: "Best Laptops Under ₹50,000 in 2026",
    content:
      "We analyzed top laptops under ₹50,000 based on performance, battery life, and value. These are the best options for students and professionals.",
    keywords: ["laptops", "budget laptops", "under 50000"],
  },
  {
    slug: "gaming-vs-normal-laptop",
    title: "Gaming Laptop vs Normal Laptop: Which Should You Buy?",
    content:
      "Gaming laptops offer high GPU power, while normal laptops focus on battery and portability. This guide helps you choose the right one.",
    keywords: ["gaming laptop", "laptop comparison", "best laptop"],
  },
  {
    slug: "best-budget-phones-2026",
    title: "Best Budget Phones in 2026 (India)",
    content:
      "Here are the top budget smartphones in 2026 based on camera, performance, and value for money.",
    keywords: ["budget phones", "cheap smartphones", "best phones"],
  },
];