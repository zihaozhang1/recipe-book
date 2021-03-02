const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Create Measure model
class Measure extends Model {}

// Create fields and columns for Inventory model
Measure.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        measure_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Measure'
    }
);

module.exports = Measure;