const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        recipe_name: {
            type: DataTypes.STRING
        },

        ingredients: {
            type: DataTypes.STRING,
            allowNull: false
        },

        instructions: {
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

        team_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'team',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        // timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
);

module.exports = Recipe;