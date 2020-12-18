//Requirements
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create Group Model
class Team extends Model {}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        team_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        team_code: {
            type: DataTypes.INTEGER
            //uniqueID//shortID
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'team'
    }
);

module.exports = Team;