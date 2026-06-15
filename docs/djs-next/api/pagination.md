# PaginationBuilder API

A utility class for creating interactive paginated embeds with navigation buttons.

## Constructor

```typescript
new PaginationBuilder()
```

Creates a new PaginationBuilder instance with no pages.

## Methods

### `.addPage(embed)`

Adds a single embed page to the pagination.

```typescript
paginator.addPage(embed: EmbedBuilder): PaginationBuilder
```

| Parameter | Type | Description |
| --- | --- | --- |
| `embed` | `EmbedBuilder` | A Discord.js EmbedBuilder instance representing one page. |

**Returns:** `this` — for method chaining.

---

### `.setPages(embeds)`

Sets all pages at once, replacing any existing pages.

```typescript
paginator.setPages(embeds: EmbedBuilder[]): PaginationBuilder
```

| Parameter | Type | Description |
| --- | --- | --- |
| `embeds` | `EmbedBuilder[]` | An array of EmbedBuilder instances. |

**Returns:** `this` — for method chaining.

---

### `.setTimeout(ms)`

Sets how long the navigation buttons remain active before expiring.

```typescript
paginator.setTimeout(ms: number): PaginationBuilder
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `ms` | `number` | `60000` | Timeout in milliseconds. |

**Returns:** `this` — for method chaining.

---

### `.build(interaction)`

Sends the paginated embed to the channel and starts the button collector.

```typescript
paginator.build(interaction: ChatInputCommandInteraction): Promise<void>
```

| Parameter | Type | Description |
| --- | --- | --- |
| `interaction` | `ChatInputCommandInteraction` | The interaction to reply to. |

## Full Example

```javascript
const { PaginationBuilder, EmbedBuilder } = require('djs-next');

module.exports = {
  description: 'View the leaderboard',
  execute: async (interaction, client) => {
    const users = await client.db.user.findMany({ orderBy: { xp: 'desc' }, take: 30 });
    
    // Split into chunks of 10 per page
    const pages = [];
    for (let i = 0; i < users.length; i += 10) {
      const chunk = users.slice(i, i + 10);
      const description = chunk.map((u, idx) => `**${i + idx + 1}.** <@${u.discordId}> — ${u.xp} XP`).join('\n');
      pages.push(new EmbedBuilder().setTitle('🏆 Leaderboard').setDescription(description));
    }

    const paginator = new PaginationBuilder()
      .setPages(pages)
      .setTimeout(120000);

    await paginator.build(interaction);
  }
};
```
