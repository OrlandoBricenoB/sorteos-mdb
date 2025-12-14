process.env.TZ = 'UTC';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Habilitar SSR
  adapter: cloudflare({
    mode: 'directory', // Modo de deployment para Cloudflare Pages
  }),
  integrations: [tailwind()],
});
