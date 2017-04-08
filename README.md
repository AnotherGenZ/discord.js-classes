# discord.js-classes

## Installation & Setup
1. Run `npm i --save discord.js-classes`
2. Follow the example bot file in the [examples](https://github.com/memework/discord.js-classes/tree/master/examples) directory

### Creating Commands - Simple Ping Command
> This ping command uses async/await - Node 7+ is required!
```js
const { Command } = require("discord.js-classes");

exports.command = class Ping extends Command {
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