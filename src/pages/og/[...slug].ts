import { OGImageRoute } from 'astro-og-canvas';
import { getPublishedPosts } from '../../utils/posts';

const posts = await getPublishedPosts();

// Map each post slug to the data used to render its social-share image.
// OGImageRoute appends `.png` to each key, so the output lands at /og/<slug>.png.
const pages = Object.fromEntries(
	posts.map((post) => [post.id, { title: post.data.title }]),
);

export const { getStaticPaths, GET } = await OGImageRoute({
	param: 'slug',
	pages,
	// Generous padding keeps the title inside the "safe area" so platforms that
	// crop the sides of OG images (e.g. some chat apps) don't clip the text.
	getImageOptions: (_path, page: { title: string }) => ({
		title: page.title,
		bgGradient: [[13, 16, 23]],
		border: { color: [142, 162, 255], width: 12, side: 'inline-start' },
		padding: 150,
		font: {
			title: { color: [255, 255, 255], size: 64, weight: 'Bold' },
		},
	}),
});
