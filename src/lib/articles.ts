import { getCollection } from 'astro:content';

// Shared by the index and route generation. Omitted draft flags stay private.
export async function getPublishedArticles() {
  const now = Date.now();
  const articles = await getCollection('articles', ({ data }) =>
    data.draft === false &&
    (!data.publicationDate || data.publicationDate.getTime() <= now)
  );
  return articles.filter(article => article.body?.trim()).sort((a, b) =>
    (b.data.publicationDate?.getTime() ?? 0) - (a.data.publicationDate?.getTime() ?? 0)
    || a.data.title.localeCompare(b.data.title)
  );
}
