import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";


import tunnel from 'astro-tunnel';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), tunnel()],
  server:
  {
    host: true,
    open: true
  },
  markdown: {
    shikiConfig: {
      // Use a single theme:
      theme: 'github-light', // Or 'github-dark', 'github-light', 'nord', etc.

      // Or use dual themes for light/dark mode:
      // themes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
    },
  },
});