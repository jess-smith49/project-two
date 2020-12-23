const router = require('express').Router();
const sequelize = require('../../config/connection');
const { default: ShortUniqueId } = require('short-unique-id');
const { Drink, User, Team, TeamUser } = require('../../models');
const withAuth = require('../../utils/auth');

//GET ALL TEAMS
router.get('/', (req, res) => {
    Team.findAll({
        attributes: [
            'id',
            'team_name',
            'team_code'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbTeamData => res.json(dbTeamData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET TEAM BY ID
router.get('/:id', (req, res) => {
    Team.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'team_name',
            'team_code',
            // [sequelize.literal('(SELECT id FROM user WHERE user.id = TeamUser.user_id)'), 'team_user'],
        ],
        include: [
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbTeamData => {
        if (!dbTeamData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbTeamData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//CREATE TEAM CODE
router.post('/', (req, res) => {
    const uid = new ShortUniqueId();
    teamCode = uid.randomUUID(6);

    Team.create({
        team_name: req.body.team_name,
        team_code: teamCode,
        user_id: req.session.user_id
    })
    .then(dbTeamData => {
        res.json(dbTeamData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//ADD A MEMBER TO A TEAM
router.post('/addMember/:teamCode', (req, res) => {
    Team.findOne({
        where: {
            team_code: req.params.teamCode
        }
    })
    .then(dbTeamUserData => {
        TeamUser.create(
            {
                user_id: req.session.user_id,
                team_id: dbTeamUserData.dataValues.id
            }
        )
    })
    .then(dbTeamUserData =>{
        res.json(dbTeamUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })   
});


//UPDATE TEAM BY ID
router.put('/:id', (req, res) => {
    Team.update({
        team_name: req.body.team_name,
        team_code: req.body.team_code
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbTeamData => {
        if (!dbTeamData) {
            res.status(404).json({ message: 'No team found with this id.' });
            return;
        }
        res.json(dbTeamData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//DELETE TEAM
router.delete('/:id', (req, res) => {
    Team.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbTeamData => {
        if (!dbTeamData) {
            res.status(404).json({ message: 'No post is found with this id.'});
            return;
        }
        res.json(dbTeamData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;