//Requirements
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create List Model
class List extends Model {}

//Initialize List 
List.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        list_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        list_items: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'list'
    }
);

module.exports = List;


