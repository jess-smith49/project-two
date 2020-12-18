//Requirements
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create Group Model
class Groups extends Model {}

Groups.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        groups_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        groups_code: {
            type: DataTypes.INTEGER
            //uniqueID//shortID
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'groups'
    }
);

module.exports = Groups;