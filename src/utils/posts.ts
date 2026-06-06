import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

/**
 * Fetch blog posts sorted newest-first. Draft posts are included during
 * development (`astro dev`) but excluded from production builds.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog', ({ data }) =>
		import.meta.env.PROD ? data.draft !== true : true,
	);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
