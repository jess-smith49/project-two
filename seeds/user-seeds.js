const sequelize = require('../config/connection');
//Require
const sequelize = require('../config/connection');
const {User} = require('../models');

//Data
const userData = [
    {
        username: 'jessTest',
        email: 'jessTest@gmail.com',
        password: 'test1234'
    },
    {
        username: 'mayaTest',
        email: 'mayaTest@gmail.com',
        password: 'test5678'
    }, 
    {
        username: 'jonTest',
        email: 'jonTest@gmail.com',
        password: 'test0000'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individulHooks: true});

//Export Users
module.exports = seedUsers;