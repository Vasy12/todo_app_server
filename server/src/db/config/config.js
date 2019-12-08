"use strict";

module.exports = {
	development: {
		username: "postgres",
		password: "postgres",
		database: "todo-dev",
		host: "db-dev",
		dialect: "postgres"
	},
	test: {
		username: "postgres",
		password: "postgres",
		database: "todo-test",
		host: "db-test",
		dialect: "postgres"
	},
	production: {
		username: "postgres",
		password: "postgres",
		database: "todo",
		host: "db",
		dialect: "postgres"
	}
};