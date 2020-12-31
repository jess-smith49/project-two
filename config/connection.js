
const Sequelize = require('sequelize');

require('dotenv').config();

// const sequelize = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize('christmas_db', 'root', 'Bluebayou1!', {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });


const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize('christmas_db', 'root', 'Bluebayou1!', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
    
module.exports = sequelize;