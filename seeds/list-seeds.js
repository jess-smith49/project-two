//Require
const {List} = require('../models');

//Data
const listData = [
    {
        list_name: 'Jess',
        list_items: 'Airpods, Baking Sheets, Sunglasses, Purse',
        // user_id: 1,
        // group_id: 1
    },
    {
        list_name: 'Maya',
        list_items: 'Laptop, Bed Sheets, Lamp',
        // user_id: 2,
        // group_id: 2
    },
    {
        list_name: 'Joanna',
        list_items: 'Target Gift Card, Bath and Body Candle, Shoes',
        // user_id: 3,
        // group_id: 3
    }
];

const seedLists = () => List.bulkCreate(listData);

//Exporting
module.exports = seedLists;