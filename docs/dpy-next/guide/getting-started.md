# Getting Started with dpy-next

`dpy-next` is the ultimate framework wrapper for `discord.py`. It brings modern web-development paradigms (like file-based routing and Hot Module Replacement) directly into your Discord bot.

## Installation

You can install `dpy-next` using pip:

```bash
pip install dpy-next
```

## Creating a new project

The absolute easiest way to start is by using our built-in scaffolding tool. Simply open your terminal in an empty folder and run:

```bash
create-dpy-next
```

This will automatically generate a production-ready repository structure:
- `main.py`
- `.env`
- `src/commands/`
- `src/events/`
- `src/tasks/`

## Manual Setup

If you prefer to integrate it into an existing bot, simply import and use the `DPyNextClient`:

```python
import os
import discord
from dotenv import load_dotenv
from dpy_next import DPyNextClient

load_dotenv()

client = DPyNextClient(
    intents=discord.Intents.default(),
    command_prefix="!"
)

# Enable HMR so changes reload instantly without restarting
client.enable_hmr()

if __name__ == "__main__":
    client.run(os.getenv("DISCORD_TOKEN"))
```

### Routing

Once `DPyNextClient` runs, it will automatically look for a `src/` directory in your current working folder. 
Any `.py` file you place in `src/` will automatically be loaded as a native `discord.py` Extension/Cog!
