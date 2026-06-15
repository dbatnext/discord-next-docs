---
layout: home

hero:
  name: "Discord Next"
  text: "The Next-Gen Discord Ecosystem."
  tagline: "Discord Bots at Next."
  image:
    src: /dnext.png
    alt: Discord Next logo
  actions:
    - theme: brand
      text: Explore →
      link: /djs-next/

    - theme: alt
      text: Join Discord Server
      link: https://discord.gg/XKzUqhVCaS

features:
  - icon: '<svg class="lucide lucide-javascript" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="4"/><path d="M10.5 8v6a2 2 0 0 1-4 0"/><path d="M17.5 9.5a1.5 1.5 0 0 0-1.5-1.5h-1A1.5 1.5 0 0 0 13.5 9.5v1A1.5 1.5 0 0 0 15 12h1A1.5 1.5 0 0 1 17.5 13.5v1A1.5 1.5 0 0 1 16 16h-1A1.5 1.5 0 0 1 13.5 14.5"/></svg>'
    title: DiscordJS Next Framework
    details: The ultimate file-based framework for Discord.js. Auto-load commands, events, and components with zero configuration.
    link: /djs-next/
    linkText: Learn more

  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-zap"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>'
    title: Lightning Fast Setup
    details: One command to install. One line to import. Your .env is auto-loaded and discord.js is bundled. Just write code.
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-refresh-cw"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />  <path d="M21 3v5h-5" />  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />  <path d="M8 16H3v5" /></svg>'
    title: Hot Module Replacement
    details: Save a file and watch your bot update live. No restarts, no dropped connections, no downtime.
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-wrench"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /></svg>'
    title: Developer Tools Suite
    details: Evaluate code, restart your bot, run shell commands, and debug memory — all from inside Discord.
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-database"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <ellipse cx="12" cy="5" rx="9" ry="3" />  <path d="M3 5V19A9 3 0 0 0 21 19V5" />  <path d="M3 12A9 3 0 0 0 21 12" /></svg>'
    title: Database Agnostic
    details: Inject Prisma, Mongoose, or Supabase with full TypeScript generics. Your ORM, your way.
  - icon: '<!-- @license lucide-static v1.18.0 - ISC --><svg  class="lucide lucide-globe"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />  <path d="M2 12h20" /></svg>'
    title: Fully Typed Ecosystem
    details: Written in strict TypeScript with beautiful type definitions exported for every class, interface, and method.
---

<script setup>
import HideNav from './.vitepress/theme/HideNav.vue'
import RootHome from './.vitepress/theme/RootHome.vue'
import HeroGradients from './.vitepress/theme/HeroGradients.vue'
</script>

<HeroGradients />
<RootHome />
<HideNav />
