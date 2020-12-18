const {Group} = require('../models');

const groupData = [
    {
        group_name: 'Family',
        group_code: '123'
    }, 
    {
        group_name: 'Kids',
        group_code: '1111'
    },
    {
        group_name: 'Friends',
        group_code: '1212'
    }
];

const seedGroups = () => Group.bulkCreate(groupData);
module.exports = seedGroups;