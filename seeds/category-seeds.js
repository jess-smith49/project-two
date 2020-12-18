const {Category} = require('../models');

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