"use strict";
const { Event } = require("../../index");

module.exports = class Ready extends Event {
  constructor(client) {
    super(client, "ready");
  }

  async run() {
    delete this.client.user.email;
    await console.log(`Logged in as ${this.client.user.username}`);
  }
}