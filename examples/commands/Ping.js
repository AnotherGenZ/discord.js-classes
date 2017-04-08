"use strict";
const { Command } = require("../../index");

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