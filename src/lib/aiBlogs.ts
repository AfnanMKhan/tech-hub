export async function generateAIBlog(
  keyword: string,
  productsHtml: string
) {
  const lower = keyword.toLowerCase();

  const links = `
    <h3>Related Guides</h3>
    <ul>
      <li><a href="/blog/best-phone-under-20000">Best Phones Under 20000</a></li>
      <li><a href="/blog/best-gaming-phone-under-30000">Best Gaming Phones</a></li>
      <li><a href="/blog/iphone-15-review">iPhone 15 Review</a></li>
      <li><a href="/blog/samsung-s24-review">Samsung S24 Review</a></li>
    </ul>
  `;

  let intro = "";
  let sections = "";

  if (lower.includes("vs")) {
    intro = `<p>We compare ${keyword} in detail.</p>`;
    sections = `<h2>Comparison Breakdown</h2><p>Performance, camera, battery, price.</p>`;
  } else if (lower.includes("under") || lower.includes("budget")) {
    intro = `<p>Best value options for ${keyword}.</p>`;
    sections = `<h2>Budget Picks</h2><p>Top affordable choices listed below.</p>`;
  } else if (lower.includes("review")) {
    intro = `<p>Full review of ${keyword}.</p>`;
    sections = `<h2>Performance Review</h2><p>Real-world usage analysis.</p>`;
  } else {
    intro = `<p>Buying guide for ${keyword}.</p>`;
    sections = `<h2>What to Consider</h2><p>Key factors explained below.</p>`;
  }

  return `
    <h1>${keyword}</h1>

    ${intro}

    <h2>Top Products</h2>
    ${productsHtml}

    ${sections}

    ${links}

    <h2>Final Verdict</h2>
    <p>Choose based on your budget and needs.</p>
  `;
}