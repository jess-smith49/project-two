const seedCategory = require('./category-seeds');
const seedDrink = require('./drink-seeds');
const seedList = require('./list-seeds');
const seedRecipe = require('./recipe-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('=====');
    await seedCategory();
    console.log('=====');
    await seedDrink();
    console.log('=====');
    await seedList();
    console.log('=====');
    await seedRecipe();
    console.log('=====');
    await seedUser();
    console.log('=====');

    process.exit(0);
};

seedAll();