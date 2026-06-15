---
prev: false
next:
  text: 'Why djs-next?'
  link: '/djs-next/guide/comparison'
---

# Getting Started

Welcome to the official documentation for **DiscordJS Next**, the hyper-modern, production-ready framework for Discord.js.

Designed with Next.js-inspired file-based routing, native developer tools, and Hot Module Replacement (HMR), DiscordJS Next is built to scale from small hobby bots to massive enterprise applications seamlessly.

## Why DiscordJS Next?

Vanilla Discord.js bots require massive switch statements, complicated command loaders, and constant process restarts. DiscordJS Next solves this by introducing:

- **File-System Routing:** Drop a file in a folder, and it becomes a command, event, or component automatically.
- **HMR (Hot Module Replacement):** Save a file and watch your bot update live without dropping the Discord Gateway.
- **Hybrid Commands:** Write once, run anywhere. Commands automatically support Slash Commands, Prefix Commands, and Mention commands simultaneously.
- **Built-in DX Tools:** Evaluate code or restart the bot directly from Discord using the `dnxt` module.

## Installation

The fastest way to start is to use our interactive CLI to bootstrap your project.

::: code-group

```bash [npm]
npx djs-next init
```

```bash [pnpm]
pnpm dlx djs-next init
```

```bash [yarn]
yarn dlx djs-next init
```

```bash [bun]
bunx djs-next init
```

:::

This will automatically generate your `index.js`, `.env` file, and the entire `src/` directory structure.

### Manual Setup

If you prefer building from scratch:

::: code-group

```bash [npm]
npm install djs-next
```

```bash [pnpm]
pnpm add djs-next
```

```bash [yarn]
yarn add djs-next
```

```bash [bun]
bun add djs-next
```

:::

Create an `index.js`:

```javascript
const { GatewayIntentBits, DJSNextClient } = require('djs-next');

const client = new DJSNextClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  developers: ['YOUR_DISCORD_ID'],
});

client.start(process.env.DISCORD_TOKEN);
```

That's it! Your `.env` file is automatically loaded by the framework.

## Next Steps

- Learn how to configure the [Client](/djs-next/guide/client-setup) with all available options.
- Understand [File-Based Routing](/djs-next/guide/file-based-routing) and how commands, events, and components work.
- Explore the powerful [Developer Tools](/djs-next/guide/developer-tools) you can use live from Discord.
