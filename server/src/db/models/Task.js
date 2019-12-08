"use strict";
const patterns = require("../../constants/patterns");

module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define("Task", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		isDone: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false,
		},
		value: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: patterns.TASK_VALUE,
				notEmpty: true,
			}
		}
	},{
		tableName: "Task",
		timestamps: true,
	});
	return Task;
};