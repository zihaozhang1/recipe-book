const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Create Ingredient model
class Ingredient extends Model {}

// Create fields and columns for Ingredient model
Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Ingredient_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Ingredient'
    }
);

module.exports = Ingredient;