const seedCategories = require('./category-seeds');
const seedDrinks = require('./drink-seeds');
const seedLists = require('./list-seeds');
const seedRecipes = require('./recipe-seeds');
const seedUsers = require('./user-seeds');
const seedTeams = require('./team-seeds');
const seedTeamUsers = require('./teamuser-seeds');
const seedItems = require('./list-item-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('=====');
    await seedUsers();
    console.log('=====');
    await seedTeams();
    console.log('=====');
    await seedTeamUsers();
    console.log('=====');
    await seedCategories();
    console.log('=====');
    await seedDrinks();
    console.log('=====');
    await seedLists();
    console.log('=====');
    await seedRecipes();
    console.log('=====');
    await seedItems();
    console.log('=====')


    process.exit(0);
};

seedAll();