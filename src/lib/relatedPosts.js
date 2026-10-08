// src/lib/relatedPosts.js
//
// Topical related-post map for the blog, in ONE place. Imported by BOTH:
//   • functions/blogs/[slug].js  — the edge/SSR "Related reading" list a non-JS
//     crawler sees (injected into #root, discarded by React on mount)
//   • src/pages/BlogContent.jsx  — the React "Related reading" list that PERSISTS
//     in the rendered DOM (what Google's JS-rendering pass and real users see)
//
// Sharing one map is the point of Basil's internal-linking spec (Task 3): the
// crawler HTML and the hydrated DOM must link to the same posts. Editing the map
// here updates both layers at once — no verbatim copy to keep in sync.

export const RELATED = {
  "speakeasy-nyc": ["meatpacking-district-restaurants", "chelsea-market-restaurants", "best-tacos-nyc"],
  "chelsea-market-restaurants": ["meatpacking-district-restaurants", "best-tacos-nyc", "speakeasy-nyc"],
  "meatpacking-district-restaurants": ["chelsea-market-restaurants", "speakeasy-nyc", "best-tacos-nyc"],
  "best-tacos-nyc": ["chelsea-market-restaurants", "meatpacking-district-restaurants", "speakeasy-nyc"],
};

export const TITLES = {
  "speakeasy-nyc": "Speakeasies in NYC",
  "chelsea-market-restaurants": "Chelsea Market Restaurants",
  "meatpacking-district-restaurants": "Meatpacking District Restaurants",
  "best-tacos-nyc": "The Best Tacos in NYC",
};

/** Related posts for a slug as [{ slug, title }] — the shape both renderers want.
 *  Unknown slug → []. */
export function relatedFor(slug) {
  return (RELATED[slug] || []).map((s) => ({ slug: s, title: TITLES[s] || s }));
}
