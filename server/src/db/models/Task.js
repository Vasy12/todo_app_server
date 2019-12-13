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
		deadline: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		files: {
			type: DataTypes.ARRAY( DataTypes.STRING ),
			allowNull: true,
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


	Task.associate = function(models){
		Task.belongsTo(models.User, {foreignKey: "userId", sourceKey: "id", as: "user"})
	};

	return Task;
};