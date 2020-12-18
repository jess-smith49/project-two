const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Drink, User, Group, GroupUser } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Group.findAll({
        attributes: [
            'id',
            'group_name',
            'group_code'
        ],
        // include: [
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbGroupData => res.json(dbGroupData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', withAuth, (req, res) => {
    Group.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'group_name',
            'group_code',
            // [sequelize.literal('(SELECT id FROM user WHERE user.id = GroupUser.user_id)'), 'group_user'],
        ],
        // include: [
        //     {
        //         model: User, 
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbGroupData => {
        if (!dbGroupData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbGroupData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Group.create({
        group_name: req.body.group_name,
        group_code: req.body.group_code,
        user_id: req.session.user_id
    })
    .then(dbGroupData => {
        res.json(dbGroupData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
    Group.update({
        group_name: req.body.group_name,
        group_code: req.body.group_code
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbGroupData => {
        if (!dbGroupData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbGroupData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
    Group.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGroupData => {
        if (!dbGroupData) {
            res.status(404).json({ message: 'No post is found with this id.'});
            return;
        }
        res.json(dbGroupData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;