const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Drink, User, Groups, GroupUser } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Groups.findAll({
        attributes: [
            'id',
            'groups_name',
            'groups_code'
        ],
        // include: [
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbGroupsData => res.json(dbGroupsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', withAuth, (req, res) => {
    Groups.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'groups_name',
            'groups_code',
            // [sequelize.literal('(SELECT id FROM user WHERE user.id = GroupUser.user_id)'), 'group_user'],
        ],
        // include: [
        //     {
        //         model: User, 
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbGroupsData => {
        if (!dbGroupsData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbGroupsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Groups.create({
        groups_name: req.body.groups_name,
        groups_code: req.body.groups_code,
        user_id: req.session.user_id
    })
    .then(dbGroupsData => {
        res.json(dbGroupsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
    Groups.update({
        groups_name: req.body.groups_name,
        groups_code: req.body.groups_code
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbGroupsData => {
        if (!dbGroupsData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbGroupsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
    Groups.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGroupsData => {
        if (!dbGroupsData) {
            res.status(404).json({ message: 'No post is found with this id.'});
            return;
        }
        res.json(dbGroupsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;