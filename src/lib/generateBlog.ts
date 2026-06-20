export function generateBlog(slug: string, keyword: string) {
  return {
    slug,
    title: `Best Guide: ${keyword} (2026)`,
    content: `
We analyzed ${keyword} in detail.

This guide helps you understand:
- Performance
- Price vs value
- Best options available in India

We compared top products and ranked them based on real-world usage.

Final recommendation depends on your budget and usage needs.
    `,
    keywords: [keyword],
  };
}