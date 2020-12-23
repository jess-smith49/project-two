//Requirements
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create Category Model
class Category extends Model {}

//Initialize Category
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        // timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

//Exporting Category Model
module.exports = Category