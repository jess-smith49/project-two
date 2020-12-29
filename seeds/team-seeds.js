const {Team} = require('../models');

const teamData = [
    {
        team_name: 'Jones Family',
        team_code: 123
    }, 
    {
        team_name: 'The Parkers',
        team_code: 1111
    },
    {
        team_name: 'Allen Hall',
        team_code: 1212
    }
];

const seedTeams = () => Team.bulkCreate(teamData);
module.exports = seedTeams;