import { images } from './images'

/**
 * Insights. Shaped like a typical headless-CMS response so this array can later
 * be replaced by a fetch (Sanity, Contentful, Strapi, WordPress REST…) without
 * changing the components.
 *
 * Entries marked `status: 'forthcoming'` are the planned first articles; they
 * render as upcoming perspectives, not links. When one is published, set
 * `status: 'published'`, `url` and `publishedAt`.
 */
export const insightCategories = [
  'The Business of Growth',
  'AI and the Digital Economy',
  'Strategic Communications',
  'Leadership and Influence',
  'African Markets and Opportunities',
]

export const insights = [
  {
    id: 'strategic-visibility',
    status: 'forthcoming',
    category: 'Strategic Communications',
    title: 'Why Strategic Visibility Is a Business Imperative',
    excerpt: 'Being seen is not the same as being understood. On visibility that builds credibility and opens doors.',
    image: images.insightVisibility,
  },
  {
    id: 'ai-is-changing-business',
    status: 'forthcoming',
    category: 'AI and the Digital Economy',
    title: 'AI Is Changing Business. Is Your Organisation Ready?',
    excerpt: 'Practical questions leadership teams should be asking about artificial intelligence today.',
    image: images.insightAi,
  },
  {
    id: 'reputation-economy',
    status: 'forthcoming',
    category: 'Leadership and Influence',
    title: 'The Reputation Economy: Why Credibility Matters',
    excerpt: 'Trust has become a commercial asset. How organisations earn it, protect it and put it to work.',
    image: images.insightReputation,
  },
  {
    id: 'beyond-marketing',
    status: 'forthcoming',
    category: 'Strategic Communications',
    title: 'Beyond Marketing: The New Role of Strategic Communications',
    excerpt: 'Why communications now belongs in the boardroom, shaping strategy as well as telling it.',
    image: images.insightComms,
  },
  {
    id: 'african-businesses-beyond-borders',
    status: 'forthcoming',
    category: 'African Markets and Opportunities',
    title: 'African Businesses and the Opportunity to Think Beyond Borders',
    excerpt: 'Regional and international growth for African-origin businesses, and what it takes to pursue it.',
    image: images.insightAfrica,
  },
]
