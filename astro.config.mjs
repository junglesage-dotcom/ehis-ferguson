// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: isDev ? undefined : cloudflare({
    imageService: 'compile',
  }),
});