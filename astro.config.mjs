import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.christopherjcarlin.com',
  base: '/astro-blog-site/',
  publicDir: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'shiki'
  },
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  })
});