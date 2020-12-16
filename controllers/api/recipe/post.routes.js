const router = require('express').Router();
const { Drink, User } = require('../../models');
const withAuth = require('../../utils.auth');

router.get('/', withAuth, (req, res) => {
    Drink.findAll({
        attributes: [
            'id',
            'drink_name',
            'ingredients',
            'instructions'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbDrinkData => res.json(dbDrinkData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', withAuth, (req, res) => {
    Drink.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'drink_name',
            'ingredients',
            'instructions'
        ],
        include: [
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbDrinkData => {
        if (!dbDrinkData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbDrinkData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Drink.create({
        drink_name: req.body.drink_name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })
    .then(dbDrinkData => {
        res.json(dbDrinkData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
    Drink.update({
        drink_name: req.body.drink_name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbDrinkData => {
        if (!dbDrinkData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbDrinkData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
    Drink.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDrinkData => {
        if (!dbDrinkData) {
            res.status(404).json({ message: 'No post is found with this id.'});
            return;
        }
        res.json(dbDrinkData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;