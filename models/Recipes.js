const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Recipes model
class Recipes extends Model {}

// Create fields and columns for Recipes model
Recipes.init(
    {
        recipe_id: {
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
            allowNull: false
        },
        recipe_ingredients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipes'
    }
);

module.exports = Recipes;