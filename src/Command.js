"use strict";

class Command {
	constructor(client, options) {
		Object.defineProperty(this, "client", { value: client });
		this.name = options.name;
		this.usage = options.usage || "";
		this.group = options.group || "";
		if (!this.name) throw new Error(`A command is missing a name.`);
	}
	
	run(message, params) {
		throw new Error(`The command "${this.name}" does not override the run method.`);
	}
}

module.exports = Command;