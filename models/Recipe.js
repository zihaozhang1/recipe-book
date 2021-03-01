const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create recipeingredient model
class recipeIngredient extends Model {}

// Create fields and columns for Inventory model
recipeIngredient.init(
    {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ingredient_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        measure_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipeIngredient'
    }
);

module.exports = recipeIngredient;