const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Create Ingredient model
class Ingredient extends Model {}

// Create fields and columns for Inventory model
Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ingredient_name: {
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