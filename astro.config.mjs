import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://brunscii.github.io/astro-blog-site',
  base: '/astro-blog-site',
  publicDir: '/astro-blog-site/',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'shiki'
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});