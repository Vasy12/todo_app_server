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
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'User',
					key: "id",
				},
				onDelete: 'CASCADE',
				allowNull: false,
			},
			isDone: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			deadline: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			files: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: true,
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
