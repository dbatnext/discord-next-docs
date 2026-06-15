---
layout: home

hero:
  name: "DiscordJS Next"
  text: "Discord Bots at Next."
  tagline: "File-based routing, native developer tools, Hot Module Replacement, and built-in safety nets — all in one install."
  image:
    src: /logo.png
    alt: djs-next logo
  actions:
    - theme: brand
      text: Get Started →
      link: /djs-next/guide/getting-started
    - theme: alt
      text: API Reference
      link: /djs-next/api/client

features:
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-folder"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>'
    title: File-Based Routing
    details: Auto-loads commands, events, components, and tasks natively. Supports dynamic routes like ban_user_[id].js.
    link: /djs-next/guide/file-based-routing
    linkText: Learn more
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-wrench"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /></svg>'
    title: Native Developer Tools
    details: A built-in developer suite inside Discord. Evaluate JS live, restart the bot, or check heap usage instantly.
    link: /djs-next/guide/developer-tools
    linkText: View commands
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-refresh-cw"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />  <path d="M21 3v5h-5" />  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />  <path d="M8 16H3v5" /></svg>'
    title: Hot Module Replacement
    details: Live-reload your commands, events, and logic on save without ever dropping your Discord Gateway connection.
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-database"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <ellipse cx="12" cy="5" rx="9" ry="3" />  <path d="M3 5V19A9 3 0 0 0 21 19V5" />  <path d="M3 12A9 3 0 0 0 21 12" /></svg>'
    title: Database Injection
    details: Connect Prisma, Mongoose, or Supabase with full TypeScript generics directly into the framework core.
    link: /djs-next/guide/database
    linkText: See examples
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-clock"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <path d="M12 6v6l4 2" /></svg>'
    title: Persistent Cooldowns
    details: Plug in a custom cache adapter like Redis for global persistent cooldown tracking across restarts.
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-file-text"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />  <path d="M14 2v5a1 1 0 0 0 1 1h5" />  <path d="M10 9H8" />  <path d="M16 13H8" />  <path d="M16 17H8" /></svg>'
    title: Built-in Pagination
    details: Ship beautiful interactive paginated embeds out-of-the-box using the native PaginationBuilder utility.
    link: /djs-next/api/pagination
    linkText: API docs
---

<script setup>
import CodeShowcase from '../.vitepress/theme/CodeShowcase.vue'
import InstallBox from '../.vitepress/theme/InstallBox.vue'
import FileTreeVisualizer from '../.vitepress/theme/FileTreeVisualizer.vue'
import HideNav from '../.vitepress/theme/HideNav.vue'
</script>

<HideNav />
<InstallBox />
<FileTreeVisualizer />
<CodeShowcase />
