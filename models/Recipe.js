const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Create Recipe model
class Recipe extends Model {}

// Create fields and columns for Inventory model
Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_instructions: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Recipe'
    }
);

module.exports = Recipe;