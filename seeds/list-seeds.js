//Require
const List = require('../models');

//Data
const listData = [
    {
        list_name: 'Jess',
        list_item: 'Airpods, Baking Sheets, Sunglasses, Purse'
    },
    {
        list_name: 'Maya',
        list_item: 'Laptop, Bed Sheets, Lamp'
    },
    {
        list_name: 'Johanna',
        list_item: 'Target Gift Card, Bath and Body Candle, Shoes'
    }
];

const seedList = () => List.bulkCreate(listData);

//Exporting
module.exports = seedList;