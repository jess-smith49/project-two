const router = require('express').Router();
const { List, User } = require('../../models');

router.get('/', (req, res) => {
    List.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
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
    .then(dbListData => {
        const lists = dbListData.map(list => list.get({ plain: true }));
        res.render('mylist', { lists, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
    List.create({
        list_name: req.body.listName,
        list_items: req.body.listItems,
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
//edit list
router.get('/edit/:id', (req, res) => {
    List.findByPk(req.params.id, {
        attributes: ['id', 'list_name', 'list_items'],
        include: [
            {  
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbListData => {
        const lists = dbListData.get({ plain: true });
        res.render('edit-list', { lists, loggedIn: true });
        
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
router.put('/:id', (req, res) => {
    List.update({
        list_name: req.body.listName,
        list_items: req.body.listItems
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
router.delete('/:id', (req, res) => {
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