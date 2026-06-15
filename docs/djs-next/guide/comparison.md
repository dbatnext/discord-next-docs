<script setup>
import CheckIcon from '../../.vitepress/theme/CheckIcon.vue'
import XIcon from '../../.vitepress/theme/XIcon.vue'
</script>

# Why DiscordJS Next?

A honest comparison between DiscordJS Next and other popular Discord.js frameworks.

## Feature Comparison

| Feature | DiscordJS Next | Vanilla Discord.js | Sapphire.js | DiscordX |
| --- | --- | --- | --- | --- |
| File-Based Routing | <CheckIcon /> | <XIcon /> | <CheckIcon /> | <XIcon /> |
| Hot Module Replacement | <CheckIcon /> | <XIcon /> | <XIcon /> | <XIcon /> |
| Built-in Developer Tools | <CheckIcon /> | <XIcon /> | <XIcon /> | <XIcon /> |
| Dynamic Component Routing | <CheckIcon /> | <XIcon /> | <XIcon /> | <XIcon /> |
| Hybrid Commands (Slash + Text) | <CheckIcon /> | <XIcon /> | <CheckIcon /> | <CheckIcon /> |
| Auto dotenv Loading | <CheckIcon /> | <XIcon /> | <XIcon /> | <XIcon /> |
| Database Injection (Typed) | <CheckIcon /> | <XIcon /> | <XIcon /> | <XIcon /> |
| Built-in Pagination | <CheckIcon /> | <XIcon /> | <XIcon /> | <XIcon /> |
| Persistent Cooldowns | <CheckIcon /> | <XIcon /> | <CheckIcon /> | <XIcon /> |
| Background Tasks | <CheckIcon /> | <XIcon /> | <CheckIcon /> | <XIcon /> |
| Localization (i18n) | <CheckIcon /> | <XIcon /> | <CheckIcon /> | <XIcon /> |
| Zero Config Setup | <CheckIcon /> | <XIcon /> | <XIcon /> | <XIcon /> |
| TypeScript Support | <CheckIcon /> | <CheckIcon /> | <CheckIcon /> | <CheckIcon /> |

## When to Use djs-next

**Choose DiscordJS Next if you want:**
- The fastest possible setup (one `npm install`, zero config)
- Live development with HMR (no restarts)
- A powerful developer suite inside Discord
- File-based routing inspired by Next.js
- Type-safe database injection without global augmentation

## Lines of Code Comparison

Setting up a basic bot with 5 commands, events, and error handling:

| Framework | Lines of Boilerplate |
| --- | --- |
| Vanilla Discord.js | ~150 lines |
| Sapphire.js | ~80 lines |
| DiscordX | ~60 lines |
| **DiscordJS Next** | **~10 lines** |

::: info
This comparison is based on v1.0.0 of DiscordJS Next and the latest stable versions of each framework as of June 2026.
:::
