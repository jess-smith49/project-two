//Requirements
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create List Model
class ListItem extends Model {}

List.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        list_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'team',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'List'
    }
);

module.exports = ListItem