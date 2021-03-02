const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create recipeIngredient model
class recipeIngredient extends Model {}

// Create fields and columns for recipeIngredient model
recipeIngredient.init(
    {
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipe',
                key: 'id'
            }
        },
        ingredient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ingredient',
                key: 'id'
            }
        },
        measure_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'measure',
                key: 'id'
            }
        },
        measure: {
            type: DataTypes.STRING,
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