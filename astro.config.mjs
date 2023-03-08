import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig(
	{
		site: 'https://brunscii.github.io/astro-blog-site',
		// base: '/astro-blog-site/',
		integrations: [mdx(), sitemap()],
		markdown : {
			syntaxHighlight: 'shiki'
		}
	}
);
