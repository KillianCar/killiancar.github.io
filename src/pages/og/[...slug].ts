import { OGImageRoute } from 'astro-og-canvas';
import { getPublishedPosts } from '../../utils/posts';

const posts = await getPublishedPosts();

// Map each post slug to the data used to render its social-share image.
// OGImageRoute appends `.png` to each key, so the output lands at /og/<slug>.png.
const pages = Object.fromEntries(
	posts.map((post) => [
		post.id,
		{ title: post.data.title, description: post.data.description },
	]),
);

export const { getStaticPaths, GET } = await OGImageRoute({
	param: 'slug',
	pages,
	getImageOptions: (_path, page: { title: string; description: string }) => ({
		title: page.title,
		description: page.description,
		bgGradient: [[13, 16, 23]],
		border: { color: [142, 162, 255], width: 12, side: 'inline-start' },
		padding: 80,
		font: {
			title: { color: [255, 255, 255], size: 64, weight: 'Bold' },
			description: { color: [200, 207, 224], size: 32 },
		},
	}),
});
