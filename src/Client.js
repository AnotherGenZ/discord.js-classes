/* Client Class */
"use strict";
const Discord = require("discord.js");
const Parser = require("./Parser");
const Register = require("./Register");

class Client extends Discord.Client {
	constructor(options, clientOptions) {
		super(clientOptions);

		if (!options.token) throw new Error("No token was provided.");
		if (!options.commandPath) throw new Error("No command path was provided.");
		if (!options.eventPath) throw new Error("No event path was provided.");
		if (!options.ownerID) throw new Error("No owner id was provided.");
		
		/* Options */
		this.token = options.token;
		this.prefix = options.prefix || "/";
		this.selfbot = options.selfbot || false;
		this.commandPath = options.commandPath;
		this.eventPath = options.eventPath;
		this.ownerID = options.ownerID;
		
		/* Core */
		this.register = new Register(this, this.commandPath, this.eventPath);
		this.parser = new Parser(this);
		this.register
			.registerCommands()
			.registerEvents();
		this.on("message", (message) => this.parser.handleCommands(message));
	}
	
	/* Main Method */
	start() {
		this.login(this.token);
	}
}

module.exports = Client;