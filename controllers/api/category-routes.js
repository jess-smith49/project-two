const router = require('express').Router();
const { Category, Recipe, List, User, Drink } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ],
        // include: [
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', withAuth, (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'category_name'
        ],
        // include: [
        //     {
        //         model: Recipe,
        //         attributes: ['id', 'recipe_name', 'ingredients', 'instructions'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: List,
        //         attributes: ['id', 'list_name', 'list_items'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: Drink,
        //         attributes: ['id', 'drink_name', 'ingredients', 'instructions'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     }
        // ]
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Category.create({
        category_name: req.body.category_name
    })
    .then(dbCategoryData => {
        res.json(dbCategoryData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
    Category.update({
        category_name: req.body.category_name,
        group_id: req.body.group_id
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No post is found with this id.'});
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;