import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Update `site` to your GitHub Pages URL (e.g. 'https://yourname.github.io')
// If deploying to a project repository (https://yourname.github.io/repo-name),
// also set `base: '/repo-name'`.
export default defineConfig({
  site: process.env.SITE_URL || 'https://liuquangao.github.io',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
