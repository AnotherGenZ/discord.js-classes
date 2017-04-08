/* Parser Class */
"use strict";

class Parser {
	constructor(client) {
		Object.defineProperty(this, "client", { value: client });
	}
	
	/* Command Handling Method */
	handleCommands(message) {
		if (!message.content.startsWith(this.client.prefix)) return;
		if ((!this.client.selfbot && message.author.bot) || (this.client.selfbot && message.author.id !== this.client.user.id)) return;
		let commandName = message.content.indexOf(" ") != -1 ? message.content.substring(message.content.indexOf(this.client.prefix) + 1, message.content.indexOf(" ")) : message.content.substring(message.content.indexOf(this.client.prefix) + 1);
		let params = message.content.split(" ").slice(1);
		let cmd = this.client.register.commands.find("name", commandName);
		if (cmd.disabled) return;
		if (cmd.ownerOnly && message.author.id !== this.client.ownerID) return message.channel.send("This command is owner only.");
		if (cmd) cmd.run(message, params);
	}
	
	/* Event Handling Method */
	handleEvents() {
		this.client.register.events.forEach(e => {
			this.client.on(e.event, (params) => {
				e.run(params);
			});
		});
	}
}

module.exports = Parser;