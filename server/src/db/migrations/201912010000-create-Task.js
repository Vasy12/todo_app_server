"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Task",{
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			isDone: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,

			},
			value: {
				type: Sequelize.STRING,
				allowNull: false,

			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});

	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Task");
	}
};