"use strict";
const { Command } = require("../../index");

exports.command = class Ping extends Command {
  constructor(client) {
    super(client, "ready");
  }

  async run() {
    delete this.client.user.email;
    await console.log(`Logged in as ${this.client.user.username}`);
  }
}