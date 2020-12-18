const {Category} = require('../models');
//Require
const seedCategories = require('./user-seeds');

//Data
const categoryData = [
    {
        category_name: 'House'
    },
    {
        category_name: 'Decoration'
    },
    {
        category_name: 'Lawn'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

//Export Category
module.exports = seedCategories;