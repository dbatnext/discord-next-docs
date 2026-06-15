import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Discord Next",
  description: "The hyper-modern, production-ready ecosystem for Discord.js.",
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'force-dark',
  
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // OpenGraph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Discord Next — The Next-Gen Discord Ecosystem' }],
    ['meta', { property: 'og:description', content: 'A hyper-modern, production-ready framework for Discord.js featuring file-based routing, native developer tools, HMR, and built-in safety nets.' }],
    ['meta', { property: 'og:image', content: 'https://dnext.vercel.app/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://dnext.vercel.app' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Discord Next — The Next-Gen Discord Ecosystem' }],
    ['meta', { name: 'twitter:description', content: 'A hyper-modern, production-ready framework for Discord.js featuring file-based routing, native developer tools, HMR, and built-in safety nets.' }],
    ['meta', { name: 'twitter:image', content: 'https://dnext.vercel.app/logo.png' }],
    // Theme Color (Discord embed sidebar)
    ['meta', { name: 'theme-color', content: '#5b69f6' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Discord Next',
    


    sidebar: {
      '/djs-next/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/djs-next/guide/getting-started' },
            { text: 'Why djs-next?', link: '/djs-next/guide/comparison' },
            { text: 'Examples', link: '/djs-next/guide/examples' },
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Client Configuration', link: '/djs-next/guide/client-setup' },
            { text: 'File-Based Routing', link: '/djs-next/guide/file-based-routing' },
            { text: 'Middleware', link: '/djs-next/guide/middleware' },
            { text: 'Database Integrations', link: '/djs-next/guide/database' },
          ]
        },
        {
          text: 'Ecosystem & Tools',
          items: [
            { text: 'Developer Tools (dnxt)', link: '/djs-next/guide/developer-tools' },
            { text: 'Utilities & Helpers', link: '/djs-next/guide/utilities' },
          ]
        },
        {
          text: 'API Reference',
          items: [
            { text: 'DJSNextClient', link: '/djs-next/api/client' },
            { text: 'PaginationBuilder', link: '/djs-next/api/pagination' },
            { text: 'Type Definitions', link: '/djs-next/api/types' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dbatnext/djs-next' },
      { icon: 'discord', link: 'https://discord.gg/XKzUqhVCaS' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Discord Next'
    },



    docFooter: {
      prev: '← Previous',
      next: 'Next →'
    },

    lastUpdated: {
      text: 'Last updated'
    }
  }
})
