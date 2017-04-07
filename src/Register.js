/* Register Class */
"use strict";
var Discord = require("discord.js");
var path = require("path");
var fs = require("fs");

class Register {
	constructor(client, commandPath, eventPath) {
		Object.defineProperty(this, "client", { value: client });
		
		/* Core Collections */
		this.commands = new Discord.Collection();
		this.events = new Discord.Collection();
		
		/* Core Paths */
		this.commandPath = commandPath;
		this.eventPath = eventPath || "";
	}
	
	/* Command Registration Method */
	registerCommands() {
		var commandFolder = fs.readdirSync(this.commandPath);
		commandFolder.forEach(c => {
			var Command = require(path.join(this.commandPath, c)).command;
			var cmd = new Command(this.client);
			this.commands.set(cmd.name, cmd);
		});
		return this;
	}
	
	/* Event Registration Method */
	registerEvents() {
		var eventGroup = fs.readdirSync(this.eventPath);
		eventGroup.forEach(e => {
			var Event = require(path.join(this.eventPath, e)).event;
			var event = new Event(this.client);
			this.events.set(event.event, event);
		});
		this.client.parser.handleEvents();
	}
}

module.exports = Register;