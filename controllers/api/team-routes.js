const router = require('express').Router();
const sequelize = require('../../config/connection');
const { default: ShortUniqueId } = require('short-unique-id');
const { User, Team, TeamUser } = require('../../models');

//gets all group members of user's group
router.get('/', (req, res) => {
    TeamUser.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
            'team_id'
        ],
        include: [
            {
                model: Team, 
                attributes: [
                    'id', 'team_name', 'team_code'
                ],
                include: [ 
                    {
                    model: User,
                    attributes: ['username']
                    }
                ]
            },
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
router.get('/:id', (req, res) => {
    Team.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'team_name',
            'team_code',
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
//add team member to a team
router.post('/addMember/:team_code', (req, res) => {
    Team.findOne({
        where: {
            team_code: req.body.teamCode
        }
    })
    .then(dbTeamUserData => {
    if(!dbTeamUserData){
        res.status(400).json({message: 'No group found with this ID'})
        return;
    }
    console.log("data", dbTeamUserData)
    console.log("id", req.session)

        TeamUser.create(
            {
                user_id: req.session.user_id,
                team_id: dbTeamUserData.dataValues.id
            }
        )
    .then(dbTeamUserData =>{
        console.log(dbTeamUserData)
            const group = dbTeamUserData.get({ plain: true });
            // res.render('dashboard', { group, loggedIn: true });
            res.json(group)
            console.log("group", group)
        // res.json(dbTeamUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })   
})
});
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