"use strict";


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,

        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        profilePicture: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    },{
        tableName: "User",
        timestamps: true,
    });

    User.associate = function(models){
        User.hasMany(models.Task, {foreignKey: "userId", sourceKey: "id", as: "tasks"})
    };
    User.associate = function(models){
        User.hasMany(models.RefreshToken, {foreignKey: "userId", sourceKey: "id", as: "refreshTokens"})
    };

    return User;
};