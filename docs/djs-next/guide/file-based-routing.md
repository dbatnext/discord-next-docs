---
prev:
  text: 'Client Configuration'
  link: '/djs-next/guide/client-setup'
next:
  text: 'Middleware'
  link: '/djs-next/guide/middleware'
---

# File-Based Routing

The framework automatically recursively scans the defined directories. Simply drop a file in the correct folder and it becomes a working command, event, component, or task.

## Commands

Commands support deep nesting, allowing you to create organized Slash Command groups:

- `src/commands/ping.js` → `/ping`
- `src/commands/economy/balance.js` → `/economy balance`
- `src/commands/settings/user/view.js` → `/settings user view`

```javascript
/** @type {import('djs-next').FileCommand} */
module.exports = {
  description: 'Replies with Pong!',
  aliases: ['p'],
  cooldown: 5,
  developerOnly: false,
  guildOnly: true,
  userPermissions: ['ManageMessages'],
  
  // Triggered on Slash Command
  execute: async (interaction, client) => {
    await interaction.reply('Pong!');
  },
  
  // Triggered on Prefix Command
  executeText: async (message, args, client) => {
    await message.reply('Pong!');
  }
};
```

### Command Properties

| Property | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description shown in Slash Command menus. |
| `aliases` | `string[]` | Alternative names for text commands. |
| `cooldown` | `number` | Cooldown in seconds between uses. |
| `developerOnly` | `boolean` | Restricts the command to users in the `developers` array. |
| `guildOnly` | `boolean` | Prevents the command from being used in DMs. |
| `userPermissions` | `string[]` | Required Discord permissions for the user. |
| `execute` | `Function` | The handler for Slash Command interactions. |
| `executeText` | `Function` | The handler for prefix-based text commands. |

## Events

Events map directly to Discord.js `ClientEvents`. They are loaded from your `eventsDir`.

```javascript
// src/events/ready.js
/** @type {import('djs-next').Event<'ready'>} */
module.exports = {
  name: 'ready',
  once: true,
  execute: async (client) => {
    console.log(`Logged in as ${client.user.tag}`);
  }
};
```

| Property | Type | Description |
| --- | --- | --- |
| `name` | `string` | The Discord.js event name (e.g., `'ready'`, `'messageCreate'`). |
| `once` | `boolean` | If `true`, the event listener fires only once. |
| `execute` | `Function` | The handler function. Receives the event arguments. |

## Components (Dynamic Routing)

A massive feature of DiscordJS Next is **Dynamic Component Routing**. If you have a button with `customId: 'ban_user_123'`, you don't need a massive switch statement. Just use bracket notation:

```javascript
// src/components/ban_user_[id].js
/** @type {import('djs-next').FileComponent} */
module.exports = {
  customId: 'ban_user_[id]',
  execute: async (interaction, client, params) => {
    const targetId = params.id; // '123'
    await interaction.reply(`Banning user ${targetId}...`);
  }
};
```

The `[id]` segment tells the router to extract that dynamic portion from the `customId` and pass it as a parameter. This works for buttons, select menus, and modals.

## Tasks

Tasks are background `setInterval` functions that run automatically when the bot starts.

```javascript
// src/tasks/databaseCleanup.js
/** @type {import('djs-next').FileTask} */
module.exports = {
  interval: 60000 * 60, // Run every 1 hour
  execute: async (client) => {
    console.log('Cleaning up database...');
  }
};
```

| Property | Type | Description |
| --- | --- | --- |
| `interval` | `number` | The interval in milliseconds between each execution. |
| `execute` | `Function` | The handler that runs on each interval tick. |
