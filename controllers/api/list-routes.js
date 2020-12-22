const router = require('express').Router();
const { List, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    List.findAll({
        attributes: [
            'id',
            'list_name',
            'list_items'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
    .then(dbListData => res.json(dbListData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', withAuth, (req, res) => {
    List.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'list_name',
            'list_items'
        ],
        include: [
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbListData => {
        if (!dbListData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbListData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    List.create({
        list_name: req.body.list_name,
        list_items: req.body.list_items,
        user_id: req.session.user_id
    })
    .then(dbListData => {
        res.json(dbListData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
    List.update({
        list_name: req.body.list_name,
        list_items: req.body.list_items
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbListData => {
        if (!dbListData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbListData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
    List.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbListData => {
        if (!dbListData) {
            res.status(404).json({ message: 'No post is found with this id.'});
            return;
        }
        res.json(dbListData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;