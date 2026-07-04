// Empty at launch — this is the exact shape a future CMS (Sanity/Supabase)
// will need to match, so News & Updates page just maps over this array
// and shows an empty state until entries exist.

export type NewsPost = {
  id: string;
  title: string;
  date: string; // ISO format
  excerpt: string;
  image?: string;
  slug: string;
};

export const news: NewsPost[] = [];
