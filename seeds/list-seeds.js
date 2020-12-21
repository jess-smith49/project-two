//Require
const {List} = require('../models');

//Data
const listData = [
    {
        list_name: 'Jess',
        list_items: 1,
        user_id: 1,
        team_id: 1
    },
    {
        list_name: 'Maya',
        list_items: 2,
        user_id: 2,
        team_id: 2
    },
    {
        list_name: 'Joanna',
        list_items: 3,
        user_id: 3,
        team_id: 3
    }
];

const seedLists = () => List.bulkCreate(listData);

//Exporting
module.exports = seedLists;