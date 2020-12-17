const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model {}

Drink.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        drink_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        instructions: {
            type: DataTypes.STRING,
            allowNull: false
        },

        ingredients: {
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

        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'group',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'drink'
    }
);

module.exports = Drink;