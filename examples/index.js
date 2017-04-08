"use strict";

const { Client } = require("../index");
const path = require("path");
new Client({
	token: "<token>",
	prefix: ".",
	selfbot: false,
	commandPath: path.join(__dirname, "commands"),
	eventPath: path.join(__dirname, "events"),
}).start();