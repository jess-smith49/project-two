const {Groups} = require('../models');

const groupsData = [
    {
        groups_name: 'Family',
        groups_code: 123
    }, 
    {
        groups_name: 'Kids',
        groups_code: 1111
    },
    {
        groups_name: 'Friends',
        groups_code: 1212
    }
];

const seedGroups = () => Groups.bulkCreate(groupsData);
module.exports = seedGroups;