const {Category} = require('../models');
//Require
const seedCategories = require('./user-seeds');

//Data
const categoryData = [
    {
        category_name: 'Drinks'
    },
    {
        category_name: 'Recipes'
    },
    {
        category_name: 'List'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

//Export Category
module.exports = seedCategories;