// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://killianc.com',
	base: '/',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			fallbacks: ['system-ui', 'sans-serif'],
			weights: [400, 500, 600, 700],
			styles: ['normal'],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			fallbacks: ['ui-monospace', 'monospace'],
			weights: [400, 500],
			styles: ['normal'],
		},
	],
});
