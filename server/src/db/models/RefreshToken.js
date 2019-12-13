"use strict";


module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define("RefreshToken", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        tokenString: {
            type: DataTypes.STRING,
            allowNull: false
        },

        files: {
            type: DataTypes.ARRAY( DataTypes.STRING ),
            allowNull: true,
        },


    },{
        tableName: "RefreshToken",
        timestamps: true,
    });

    RefreshToken.associate = function(models){
        RefreshToken.belongsTo(models.User, {foreignKey: "userId", sourceKey: "id", as: "user"})
    };

    return RefreshToken;
};