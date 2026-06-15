---
prev:
  text: 'Database Integrations'
  link: '/djs-next/guide/database'
next:
  text: 'Utilities & Helpers'
  link: '/djs-next/guide/utilities'
---

# Developer Tools (`dnxt`)

DiscordJS Next comes with a hyper-advanced, native developer suite. By providing your Discord User ID in the `developers` array and calling `client.enableDevTools('dnxt')`, you can execute backend logic live directly from Discord.

::: warning Security
If `config.devGuildId` is provided, these commands will **only** work in that specific server. Always set this in production to prevent accidental execution in public servers.
:::

## Enabling Developer Tools

```javascript
const client = new DJSNextClient({
  developers: ['YOUR_USER_ID'],
  config: {
    devGuildId: 'YOUR_DEV_SERVER_ID'
  }
});

client.enableDevTools('dnxt');
client.start(process.env.DISCORD_TOKEN);
```

## Command Reference

| Command | Action |
| --- | --- |
| `dnxt` | Displays the Developer Dashboard (RAM, Node Host, Uptime). |
| `dnxt js <code>` | Live evaluates Javascript with async resolution. |
| `dnxt sh <cmd>` | Executes raw shell terminal code on your host machine. |
| `dnxt git <cmd>` | Executes git workflows quickly (e.g., `dnxt git pull`). |
| `dnxt in <channelId> <text>` | Injects a message as the bot into a specific channel. |
| `dnxt reload <target>` | Hot-swaps the internal cache (e.g., `dnxt reload commands`, `dnxt reload all`). |
| `dnxt debug <cmd>` | Executes JS while tracking the Node.js V8 Heap Memory Delta. |
| `dnxt sync` | Manually forces Discord Slash Command synchronization. |
| `dnxt restart` | Safely spawns a new background process and shuts down the current one. |
| `dnxt shutdown` | Fully disconnects the client and kills the Node process. |

## Examples

### Evaluating Code Live
```
dnxt js client.guilds.cache.size
```
This will reply with the number of servers your bot is in.

### Reloading Commands
```
dnxt reload commands
```
Instantly hot-swaps all command files without restarting the process.

### Running Shell Commands
```
dnxt sh npm run build
```
Executes the build script directly from Discord and returns the output.
