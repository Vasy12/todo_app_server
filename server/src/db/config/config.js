"use strict";

module.exports = {
	development: {
		username: "root",
		password: "user",
		database: "todo-dev",
		host: "db-dev",
		dialect: "postgres"
	},
	test: {
		username: process.env.TODO_DB_USER,
		password: process.env.TODO_DB_PASSWORD,
		database: process.env.TODO_DB_PASSWORD,
		host: process.env.TODO_DB_HOST,
		dialect: "postgres"
	},
	production: {
		username: process.env.TODO_DB_USER,
		password: process.env.TODO_DB_PASSWORD,
		database: process.env.TODO_DB_PASSWORD,
		host: process.env.TODO_DB_HOST,
		dialect: "postgres"
	}
};