# DJSNextClient API

The main client class that powers the DiscordJS Next framework. Extends `discord.js` `Client`.

## Constructor

```typescript
new DJSNextClient<DB = any>(options: DJSNextClientOptions<DB>)
```

### Type Parameters

| Parameter | Description |
| --- | --- |
| `DB` | The type of your database client. Defaults to `any`. Used to type `client.db`. |

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `commands` | `Collection<string, FileCommand>` | A collection of all loaded commands, keyed by command name. |
| `aliases` | `Collection<string, string>` | A collection mapping alias names to their parent command names. |
| `events` | `Collection<string, Event>` | A collection of all loaded event handlers. |
| `components` | `Collection<string, FileComponent>` | A collection of all loaded component handlers. |
| `cooldowns` | `Collection<string, Collection<string, number>>` | In-memory cooldown tracker. |
| `db` | `DB` | Your injected database client instance. |
| `config` | `DJSNextConfig` | The extended configuration object. |

## Methods

### `client.start(token)`

Logs in to the Discord Gateway and initializes all handlers.

```typescript
client.start(token: string): Promise<void>
```

| Parameter | Type | Description |
| --- | --- | --- |
| `token` | `string` | Your Discord bot token. Usually `process.env.DISCORD_TOKEN`. |

---

### `client.enableHMR()`

Enables Hot Module Replacement. Watches your command, event, and component directories for file changes and automatically reloads them without restarting the bot.

```typescript
client.enableHMR(): void
```

---

### `client.enableDevTools(prefix)`

Enables the built-in developer tools suite accessible via text commands in Discord.

```typescript
client.enableDevTools(prefix: 'dnxt' | 'nxt'): void
```

| Parameter | Type | Description |
| --- | --- | --- |
| `prefix` | `'dnxt' \| 'nxt'` | The prefix used to trigger developer commands. |

---

### `client.t(key, locale, variables)`

Translates a localization key using the specified locale.

```typescript
client.t(key: string, locale: string, variables?: Record<string, string>): string
```

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | The translation key (e.g., `'GREETING'`). |
| `locale` | `string` | The locale code (e.g., `'en'`). |
| `variables` | `Record<string, string>` | Optional key-value pairs to interpolate into the string. |

**Returns:** The translated string with variables interpolated.
