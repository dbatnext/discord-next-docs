# Real-World Examples

Complete, copy-paste examples to help you build production bots with DiscordJS Next.

## Economy Bot

A simple economy system with balance and daily reward commands.

### Directory Structure
```
src/
├── commands/
│   └── economy/
│       ├── balance.js
│       └── daily.js
├── events/
│   └── ready.js
└── tasks/
    └── resetDaily.js
```

### Balance Command
```javascript
// src/commands/economy/balance.js
/** @type {import('djs-next').FileCommand} */
module.exports = {
  description: 'Check your coin balance',
  aliases: ['bal'],
  guildOnly: true,

  execute: async (interaction, client) => {
    const user = await client.db.user.findUnique({
      where: { discordId: interaction.user.id }
    });
    const coins = user?.coins ?? 0;
    await interaction.reply(`Balance: **\${coins}** coins.`);
  },

  executeText: async (message, args, client) => {
    const user = await client.db.user.findUnique({
      where: { discordId: message.author.id }
    });
    const coins = user?.coins ?? 0;
    await message.reply(`Balance: **\${coins}** coins.`);
  }
};
```

### Daily Command
```javascript
// src/commands/economy/daily.js
/** @type {import('djs-next').FileCommand} */
module.exports = {
  description: 'Claim your daily reward',
  cooldown: 86400, // 24 hours
  guildOnly: true,

  execute: async (interaction, client) => {
    const reward = Math.floor(Math.random() * 500) + 100;
    await client.db.user.upsert({
      where: { discordId: interaction.user.id },
      update: { coins: { increment: reward } },
      create: { discordId: interaction.user.id, coins: reward }
    });
    await interaction.reply(`Reward claimed: **\${reward}** coins!`);
  }
};
```

## Moderation Bot

A clean moderation system using dynamic component routing for confirmation buttons.

### Ban Command with Confirmation
```javascript
// src/commands/mod/ban.js
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('djs-next');

/** @type {import('djs-next').FileCommand} */
module.exports = {
  description: 'Ban a user from the server',
  userPermissions: ['BanMembers'],
  guildOnly: true,

  execute: async (interaction, client) => {
    const target = interaction.options.getUser('user');
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`confirm_ban_${target.id}`)
        .setLabel('Confirm Ban')
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId('cancel_action')
        .setLabel('Cancel')
        .setStyle(ButtonStyle.Secondary)
    );
    await interaction.reply({ content: `Ban **${target.tag}**?`, components: [row] });
  }
};
```

### Dynamic Confirm Handler
```javascript
// src/components/confirm_ban_[userId].js
/** @type {import('djs-next').FileComponent} */
module.exports = {
  customId: 'confirm_ban_[userId]',
  execute: async (interaction, client, params) => {
    await interaction.guild.members.ban(params.userId);
    await interaction.update({ content: `[Success] User banned.`, components: [] });
  }
};
```

### Cancel Handler
```javascript
// src/components/cancel_action.js
/** @type {import('djs-next').FileComponent} */
module.exports = {
  customId: 'cancel_action',
  execute: async (interaction) => {
    await interaction.update({ content: '[Cancelled] Action cancelled.', components: [] });
  }
};
```

## Paginated Leaderboard

A leaderboard command using the built-in `PaginationBuilder`.

```javascript
// src/commands/leaderboard.js
const { PaginationBuilder, EmbedBuilder } = require('djs-next');

/** @type {import('djs-next').FileCommand} */
module.exports = {
  description: 'View the server leaderboard',
  guildOnly: true,

  execute: async (interaction, client) => {
    const users = await client.db.user.findMany({
      orderBy: { coins: 'desc' },
      take: 30
    });

    const pages = [];
    for (let i = 0; i < users.length; i += 10) {
      const chunk = users.slice(i, i + 10);
      const desc = chunk
        .map((u, idx) => `**${i + idx + 1}.** <@${u.discordId}> — ${u.coins} coins`)
        .join('\n');

      pages.push(
        new EmbedBuilder()
          .setTitle('Leaderboard')
          .setDescription(desc)
          .setColor(0x5b69f6)
      );
    }

    await new PaginationBuilder()
      .setPages(pages)
      .setTimeout(120000)
      .build(interaction);
  }
};
```

::: tip
All examples above assume you have injected a database via `db` in the client options. See [Database Integrations](/djs-next/guide/database) for setup.
:::
