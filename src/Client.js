/* Client Class */
"use strict";
var Discord = require("discord.js");
var Parser = require("./Parser");
var Register = require("./Register");

class Client extends Discord.Client {
	constructor(options, clientOptions) {
		super(clientOptions);
		
		/* Options */
		this.token = options.token;
		this.prefix = options.prefix || "/";
		this.selfbot = options.selfbot || false;
		this.commandPath = options.commandPath;
		this.eventPath = options.eventPath || "";
		
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