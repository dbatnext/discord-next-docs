---
prev:
  text: 'File-Based Routing'
  link: '/djs-next/guide/file-based-routing'
next:
  text: 'Database Integrations'
  link: '/djs-next/guide/database'
---

# Middleware & Preconditions

Middleware allows you to intercept and control the execution flow of every command in your bot.

## Global Middleware

You can define a global middleware function in the `DJSNextClient` configuration. This function runs *before* any command is executed.

```javascript
const client = new DJSNextClient({
  middleware: async (interactionOrMessage, client) => {
    // Example: Blacklist check
    const userId = interactionOrMessage.author?.id || interactionOrMessage.user?.id;
    const isBlacklisted = await client.db.blacklist.findOne({ id: userId });
    
    if (isBlacklisted) {
      return false; // Blocks the command execution
    }
    return true; // Continues execution
  }
});
```

### How It Works

1. User triggers a command (slash or text).
2. The framework checks built-in preconditions (`cooldown`, `developerOnly`, `guildOnly`, `userPermissions`).
3. Your global `middleware` function is called.
4. If `middleware` returns `true`, the command's `execute` or `executeText` handler runs.
5. If `middleware` returns `false`, execution is silently blocked.

## Built-in Preconditions

These are automatically enforced by the framework before your middleware even runs:

| Precondition | Property | Behavior |
| --- | --- | --- |
| **Cooldown** | `cooldown: 5` | Blocks re-execution for 5 seconds. Responds with `config.responses.cooldown`. |
| **Developer Only** | `developerOnly: true` | Only users in the `developers` array can execute. |
| **Guild Only** | `guildOnly: true` | Blocks execution in DMs. |
| **Permissions** | `userPermissions: ['ManageMessages']` | Checks the user has the required Discord permissions. |

## Use Cases

### Analytics Tracking
```javascript
middleware: async (ctx, client) => {
  const userId = ctx.author?.id || ctx.user?.id;
  await client.db.analytics.create({ userId, command: ctx.commandName, timestamp: Date.now() });
  return true; // Always allow, just log
}
```

### Maintenance Mode
```javascript
middleware: async (ctx, client) => {
  if (client.maintenanceMode) {
    const reply = ctx.reply || ctx.followUp;
    await reply('[Maintenance] The bot is currently under maintenance. Please try again later.');
    return false;
  }
  return true;
}
```
