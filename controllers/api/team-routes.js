const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Drink, User, Team, TeamUser } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Team.findAll({
        attributes: [
            'id',
            'team_name',
            'team_code'
        ],
        // include: [
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbTeamData => res.json(dbTeamData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', withAuth, (req, res) => {
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
        // include: [
        //     {
        //         model: User, 
        //         attributes: ['username']
        //     }
        // ]
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

router.post('/', withAuth, (req, res) => {
    Team.create({
        team_name: req.body.team_name,
        team_code: req.body.team_code,
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
router.put('/:id', withAuth, (req, res) => {
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
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbTeamData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
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