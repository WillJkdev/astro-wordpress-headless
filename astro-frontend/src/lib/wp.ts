const domain = import.meta.env.WP_DOMAIN;
const apiURL = `${domain}/wp-json/wp/v2`;

interface Post {
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
      media_details?: {
        width?: number;
        height?: number;
        sizes?: Record<string, any>;
      };
    }>;
    author?: Array<{ name: string }>;
  };
  date: string;
  modified: string;
  slug: string;
}

export const getPages = async (slug: string) => {
  const res = await fetch(`${apiURL}/pages?slug=${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch pages");
  }
  const [data] = await res.json();
  const {
    title: { rendered: title },
    content: { rendered: content },
  } = data;
  // console.log(data);
  return { title, content };
};

export const getPost = async (slug: string) => {
  const res = await fetch(`${apiURL}/posts?slug=${slug}&_embed`);
  if (!res.ok) {
    throw new Error("Failed to fetch pages");
  }
  const [data] = await res.json();
  const {
    title: { rendered: title },
    content: { rendered: content },
    _embedded,
    modified,
    date,
  } = data;

  const image =
    _embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "/placeholder.jpg";

  const author = _embedded?.author?.[0]?.name ?? "Desconocido";
  return { title, content, image, date, modified, author };
};

export const getAllPostsSlugs = async () => {
  const res = await fetch(`${apiURL}/posts?per_page=100`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const result = await res.json();
  if (!result) {
    throw new Error("No posts found");
  }
  const slugs = result.map((post: Post) => post.slug);
  return slugs;
};

export const getLatestPosts = async ({
  perPage = 10,
}: { perPage?: number } = {}) => {
  const res = await fetch(`${apiURL}/posts?per_page=${perPage}&_embed`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const result = await res.json();
  if (!result) {
    throw new Error("No posts found");
  }
  const posts = result.map((post: Post) => {
    const {
      title: { rendered: title },
      excerpt: { rendered: excerpt },
      content: { rendered: content },
      _embedded,
      modified,
      date,
      slug,
    } = post;
    const image =
      _embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "/placeholder.jpg";

    const author = _embedded?.author?.[0]?.name ?? "Desconocido";
    return { title, excerpt, content, image, author, date, modified, slug };
  });

  return posts;
};
