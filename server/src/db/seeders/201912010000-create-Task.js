"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Task", [
			{

			},
			{

			}
		],)
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Task");
    }
};