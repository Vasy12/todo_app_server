const Sequelize = require("sequelize");

class Task extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER,
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
                        is: /(?!^\s*$)^.*$/,
                        notEmpty: true,
                    }
                },
            },
            {
                sequelize,
            }
        );
    }
}


module.exports = Task;