---
prev:
  text: 'Developer Tools'
  link: '/djs-next/guide/developer-tools'
next:
  text: 'API Reference'
  link: '/djs-next/api/client'
---

# Utilities & Helpers

DiscordJS Next ships with built-in utility classes to solve common Discord bot patterns without external dependencies.

## PaginationBuilder

Instead of writing complex component collectors to paginate leaderboards or help menus, use the native `PaginationBuilder`.

```javascript
const { PaginationBuilder, EmbedBuilder } = require('djs-next');

const paginator = new PaginationBuilder()
  .addPage(new EmbedBuilder().setDescription('Page 1'))
  .addPage(new EmbedBuilder().setDescription('Page 2'))
  .addPage(new EmbedBuilder().setDescription('Page 3'))
  .setTimeout(60000); // Buttons expire after 60s

// Handles deferred states, editing, and button collectors automatically!
await paginator.build(interaction);
```

### PaginationBuilder Methods

| Method | Parameters | Description |
| --- | --- | --- |
| `.addPage()` | `EmbedBuilder` | Adds a single embed page to the pagination. |
| `.setPages()` | `EmbedBuilder[]` | Sets all pages at once from an array. |
| `.setTimeout()` | `number` | Sets the timeout in ms before buttons expire. Default: `60000`. |
| `.build()` | `Interaction` | Sends the paginated embed and starts the collector. |

## Localization (i18n)

If you configure `locales: ['en', 'es']` in your config, the framework looks for translation files in `src/locales/`.

### Setup

Create a JSON file for each locale:

`src/locales/en.json`:
```json
{
  "GREETING": "Hello {user}!",
  "FAREWELL": "Goodbye {user}, see you soon!"
}
```

`src/locales/es.json`:
```json
{
  "GREETING": "¡Hola {user}!",
  "FAREWELL": "¡Adiós {user}, hasta pronto!"
}
```

### Usage in Commands

```javascript
execute: async (interaction, client) => {
  const msg = client.t('GREETING', 'en', { user: interaction.user.username });
  await interaction.reply(msg); // "Hello Alex!"
}
```

| Method | Parameters | Description |
| --- | --- | --- |
| `client.t()` | `key`, `locale`, `variables` | Translates a key using the specified locale and interpolates variables. |
