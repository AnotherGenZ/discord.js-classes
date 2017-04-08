/* Register Class */
"use strict";
const Discord = require("discord.js");
const path = require("path");
const fs = require("fs");

class Register {
	constructor(client, commandPath, eventPath) {
		Object.defineProperty(this, "client", { value: client });
		
		/* Core Collections */
		this.commands = new Discord.Collection();
		this.events = new Discord.Collection();
		
		/* Core Paths */
		this.commandPath = commandPath;
		this.eventPath = eventPath;
	}
	
	/* Command Registration Method */
	registerCommands() {
		let commandFolder = fs.readdirSync(this.commandPath);
		commandFolder.forEach(c => {
			let Command = require(path.join(this.commandPath, c));
			let cmd = new Command(this.client);
			this.commands.set(cmd.name, cmd);
		});
		return this;
	}
	
	/* Event Registration Method */
	registerEvents() {
		let eventGroup = fs.readdirSync(this.eventPath);
		eventGroup.forEach(e => {
			let Event = require(path.join(this.eventPath, e));
			let event = new Event(this.client);
			this.events.set(event.event, event);
		});
		this.client.parser.handleEvents();
	}
}

module.exports = Register;