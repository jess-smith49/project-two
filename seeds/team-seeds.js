const {Team} = require('../models');

const teamData = [
    {
        team_name: 'Family',
        team_code: 123
    }, 
    {
        team_name: 'Kids',
        team_code: 1111
    },
    {
        team_name: 'Friends',
        team_code: 1212
    }
];

const seedTeams = () => Team.bulkCreate(teamData);
module.exports = seedTeams;