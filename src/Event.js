"use strict";

class Event {
	constructor(client, event) {
		this.event = event;
		Object.defineProperty(this, "client", { value: client });
	}
	
	run(params) {
		throw new Error(`The event "${this.event}" does not override the run method.`);
	}
}

module.exports = Event;