"use strict";

class Command {
	constructor(client, options) {
		Object.defineProperty(this, "client", { value: client });
		this.name = options.name;
		this.usage = options.usage || "";
		this.group = options.group || "";
		this.ownerOnly = options.ownerOnly || false;
		this.disabled = options.disabled || false;
		if (!this.name) throw new Error(`Constructor ${this.constructor.name} is missing a command name.`);
	}
	
	async run(message, params) {
		throw new Error(`The command "${this.name}" does not override the run method.`);
	}
}

module.exports = Command;