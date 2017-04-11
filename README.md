# discord.js-classes

## Installation & Setup
1. Run `npm install discord.js-classes --save`

An example client setup looks like this:
``js
const { Client } = require("discord.js-classes")
const path = require("path");
new Client({
	token: "<token>",
	prefix: ".",
	selfbot: false,
	commandPath: path.join(__dirname, "commands"),
	eventPath: path.join(__dirname, "events"),
}).start();
```
### Client Options
- ownerID - UserID (string)
- token - Bot token (string)
- commandPath - Path to load commands from (string, i.e: path.join(__dirname, "eventpath"))
- eventPath - Path to load events from (string, i.e: path.join(__dirname, "commandpath"))
- prefix - Command prefix (string)
- selfbot - Whether the client should be a selfbot or not (boolean)

### Command Options
- name - Name of the command (string)
- usage - Command usage (string)
- group - Command group (string)
- ownerOnly - Whether the command is usable only by the owner or not (boolean)
- disabled - Whether the command is active (boolean)

### Creating Commands - Simple Ping Command
> This ping command uses async/await - Node 7+ is required!
```js
const { Command }  = require("discord.js-classes");

module.exports = class Ping extends Command {
  constructor(client) {
    super(client, {
      name: "ping"
    });
  }

  async run(message, params) {
    const msg = await message.channel.send("Ping?");
    msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}\`ms`);
  }
}
```
