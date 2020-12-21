const {ListItems} = require('../models');

const itemData = [
    {
        list_item_name: "Purse"
    },
    {
        list_item_name: "Target Gift Card"
    },
    {
        list_item_name: "Airpods"
    },
    {
        list_item_name: "Candles"
    }

];

const seedItems = () => ListItems.bulkCreate(listData);

//Exporting
module.exports = seedItems;