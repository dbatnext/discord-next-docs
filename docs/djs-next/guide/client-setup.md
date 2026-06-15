---
prev:
  text: 'Examples'
  link: '/djs-next/guide/examples'
next:
  text: 'File-Based Routing'
  link: '/djs-next/guide/file-based-routing'
---

# Client Configuration

The `DJSNextClient` extends the native Discord.js `Client`, meaning you have full access to everything you normally would, plus framework-specific configurations.

## Full Configuration Reference

You can configure the client directly in the constructor:

```javascript
const { GatewayIntentBits, DJSNextClient } = require('djs-next');

const client = new DJSNextClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  developers: ['123456789'],
  clientId: '987654321',
  
  // Toggles
  enableSlashCommands: true,
  enableTextCommands: true,
  enableMentionPrefix: true, 
  enableNoPrefix: false, 
  prefixes: ['!', '?'],
  
  // Custom Directories
  commandsDir: 'src/commands',
  eventsDir: 'src/events',
  componentsDir: 'src/components',
  tasksDir: 'src/tasks',
  
  // Global Middleware
  middleware: (interactionOrMessage, client) => { return true; },

  // Database Injection
  db: new PrismaClient(),

  // Extended Config
  config: {
    devGuildId: 'YOUR_DEV_SERVER_ID',
    errorLogChannelId: 'CHANNEL_ID',
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    
    responses: {
      developerOnly: '[Restricted] Developers only.',
      guildOnly: '[Restricted] Server only.',
      cooldown: '[Cooldown] Wait {time}.',
      missingPerms: '[Restricted] Missing perms.',
      errorBoundary: '[Error] Error occurred.',
    },
    
    cooldownAdapter: {
      get: async (cmdId, userId) => { /* Fetch from Redis */ },
      set: async (cmdId, userId, expiration) => { /* Save to Redis */ }
    }
  }
});
```

## Option Breakdown

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `developers` | `string[]` | `[]` | Array of Discord User IDs that can access `dnxt` developer tools. |
| `clientId` | `string` | — | Your bot's Application ID. Used for registering Slash Commands. |
| `enableSlashCommands` | `boolean` | `true` | Whether the framework should register and respond to Slash Commands. |
| `enableTextCommands` | `boolean` | `true` | Whether the framework should respond to prefix-based text commands. |
| `enableMentionPrefix` | `boolean` | `false` | Whether mentioning the bot (`@Bot ping`) triggers text commands. |
| `enableNoPrefix` | `boolean` | `false` | Whether commands can be triggered without any prefix at all. |
| `prefixes` | `string[]` | `['!']` | Array of string prefixes to listen for (e.g., `['!', '?']`). |
| `commandsDir` | `string` | `'src/commands'` | Path to the commands directory. |
| `eventsDir` | `string` | `'src/events'` | Path to the events directory. |
| `componentsDir` | `string` | `'src/components'` | Path to the components directory. |
| `tasksDir` | `string` | `'src/tasks'` | Path to the tasks directory. |
| `middleware` | `Function` | — | A global function that runs before every command. Return `false` to block. |
| `db` | `any` | — | Your database client instance (Prisma, Mongoose, Supabase, etc.). |
| `config` | `object` | — | Extended configuration object (see below). |

## The `config` Object

| Option | Type | Description |
| --- | --- | --- |
| `devGuildId` | `string` | Restricts `dnxt` commands and deploys slash commands only to this server. |
| `errorLogChannelId` | `string` | Channel ID where framework errors are logged. |
| `locales` | `string[]` | Array of locale codes for i18n support. |
| `defaultLocale` | `string` | The default locale to use when no match is found. |
| `responses` | `object` | Customizable fallback response messages. |
| `cooldownAdapter` | `object` | Persistent cooldown adapter with `get` and `set` methods (e.g., Redis). |

## Enabling Features

After constructing the client, you can enable optional features:

```javascript
// Enable Hot-Module Reloading for development
client.enableHMR();

// Enable the Developer Tools suite
client.enableDevTools('dnxt');

// Boot the bot
client.start(process.env.DISCORD_TOKEN);
```
