const {TeamUser} = require('../models');

const teamUserData = [
    {
        user_id: 1,
        team_id: 1
    }, 
    {
        user_id: 2,
        team_id: 2
    },
    {
        user_id: 3,
        team_id: 3
    }
];

const seedTeamUsers = () => TeamUser.bulkCreate(teamUserData);

module.exports = seedTeamUsers;