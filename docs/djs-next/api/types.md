# Type Definitions

Complete TypeScript type reference for DiscordJS Next.

## DJSNextClientOptions\<DB\>

```typescript
interface DJSNextClientOptions<DB = any> extends ClientOptions {
  developers?: string[];
  clientId?: string;
  enableSlashCommands?: boolean;
  enableTextCommands?: boolean;
  enableMentionPrefix?: boolean;
  enableNoPrefix?: boolean;
  prefixes?: string[];
  commandsDir?: string;
  eventsDir?: string;
  componentsDir?: string;
  tasksDir?: string;
  middleware?: (ctx: Interaction | Message, client: DJSNextClient<DB>) => boolean | Promise<boolean>;
  db?: DB;
  config?: DJSNextConfig;
}
```

## FileCommand

```typescript
interface FileCommand {
  description: string;
  aliases?: string[];
  cooldown?: number;
  developerOnly?: boolean;
  guildOnly?: boolean;
  userPermissions?: PermissionResolvable[];
  execute?: (interaction: ChatInputCommandInteraction, client: DJSNextClient) => Promise<void>;
  executeText?: (message: Message, args: string[], client: DJSNextClient) => Promise<void>;
}
```

## FileComponent

```typescript
interface FileComponent {
  customId: string;
  execute: (interaction: MessageComponentInteraction, client: DJSNextClient, params: Record<string, string>) => Promise<void>;
}
```

## FileTask

```typescript
interface FileTask {
  interval: number;
  execute: (client: DJSNextClient) => Promise<void>;
}
```

## Event\<K\>

```typescript
interface Event<K extends keyof ClientEvents = keyof ClientEvents> {
  name: K;
  once?: boolean;
  execute: (...args: ClientEvents[K]) => Promise<void> | void;
}
```

## DJSNextConfig

```typescript
interface DJSNextConfig {
  devGuildId?: string;
  errorLogChannelId?: string;
  locales?: string[];
  defaultLocale?: string;
  responses?: {
    developerOnly?: string;
    guildOnly?: string;
    cooldown?: string;
    missingPerms?: string;
    errorBoundary?: string;
  };
  cooldownAdapter?: CooldownAdapter;
}
```

## CooldownAdapter

```typescript
interface CooldownAdapter {
  get: (commandId: string, userId: string) => Promise<number | null>;
  set: (commandId: string, userId: string, expiration: number) => Promise<void>;
}
```
