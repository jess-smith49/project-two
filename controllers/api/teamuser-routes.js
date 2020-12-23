const router = require('express').Router();
const sequelize = require('../../config/connection');
const { default: ShortUniqueId } = require('short-unique-id');
const { Drink, User, Team, TeamUser } = require('../../models');
const withAuth = require('../../utils/auth');


//FIND ALL TEAM USERS
router.get('/', (req, res) => {
    TeamUser.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'team_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            { 
                model: Team,
                attributes: ['id', 'team_name', 'team_code']
            }
        ]
    })
    .then(dbTeamData => res.json(dbTeamData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;