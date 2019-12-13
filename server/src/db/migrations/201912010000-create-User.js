"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("User",{
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            firstName: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,

            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            profilePicture: {
              type: Sequelize.STRING,
              defaultValue: null,
              allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                validate:{
                    isEmail: true,
                }
            },
            password: {
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
        return queryInterface.dropTable("User");
    }
};