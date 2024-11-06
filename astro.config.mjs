// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  site: 'https://ing-santi-garcia.github.io',
  base: 'ing-santi-garcia',
  integrations: [tailwind()]
});