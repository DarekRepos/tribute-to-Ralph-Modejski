import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://DarekRepos.github.io',
  base: '/tribute-to-Ralph-Modejski',
  integrations: [icon()]
});