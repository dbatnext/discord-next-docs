---
prev:
  text: 'Middleware'
  link: '/djs-next/guide/middleware'
next:
  text: 'Developer Tools'
  link: '/djs-next/guide/developer-tools'
---

# Database Integrations

Because DiscordJS Next uses a generic `<DB>` parameter for its client, you do not need to globally augment Discord.js typings to attach your database. Just pass your initialized database into the Client Options.

## TypeScript (Prisma)

```typescript
import { DJSNextClient } from 'djs-next';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const client = new DJSNextClient<PrismaClient>({
  intents: [...],
  db: db 
});

// Inside any command file:
export default {
  execute: async (interaction, client) => {
    // client.db is strictly typed as PrismaClient!
    const user = await client.db.user.findFirst(...);
  }
}
```

## MongoDB Atlas (Mongoose)

```javascript
const mongoose = require('mongoose');
const { DJSNextClient, GatewayIntentBits } = require('djs-next');

mongoose.connect(process.env.MONGO_URI);

const client = new DJSNextClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  db: mongoose
});

client.start(process.env.TOKEN);
```

```javascript
// src/commands/profile.js
const UserSchema = require('../models/User.js');

/** @type {import('djs-next').FileCommand} */
module.exports = {
  description: 'View your profile',
  execute: async (interaction, client) => {
    const user = await UserSchema.findOne({ discordId: interaction.user.id });
    await interaction.reply(`You have ${user.coins} coins!`);
  }
};
```

## Supabase (PostgreSQL)

```javascript
const { createClient } = require('@supabase/supabase-js');
const { DJSNextClient, GatewayIntentBits } = require('djs-next');

const supabase = createClient('https://xyz.supabase.co', process.env.SUPABASE_KEY);

const client = new DJSNextClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  db: supabase
});

client.start(process.env.TOKEN);
```

## Persistent Cooldowns

You can also offload cooldown tracking to your database or Redis for persistence across restarts:

```javascript
const client = new DJSNextClient({
  config: {
    cooldownAdapter: {
      get: async (cmdId, userId) => {
        return await redis.get(`cooldown:${cmdId}:${userId}`);
      },
      set: async (cmdId, userId, expiration) => {
        await redis.set(`cooldown:${cmdId}:${userId}`, Date.now(), 'EX', expiration);
      }
    }
  }
});
```
