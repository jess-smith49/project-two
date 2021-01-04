const router = require('express').Router();
const { Drink, User } = require('../../models');

router.get('/', (req, res) => {
    Drink.findAll({
            where: {
                user_id: req.session.user_id
            },
        attributes: [
            'id',
            'drink_name',
            'ingredients',
            'instructions',
            'createdAt'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbDrinkData => {
        const drinks = dbDrinkData.map(recipe => recipe.get({ plain: true }));
        res.render('mydrinks', { drinks, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
    Drink.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'drink_name',
            'ingredients',
            'instructions',
            'createdAt'
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
//edit drink
router.get('/edit/:id', (req, res) => {
    Drink.findByPk(req.params.id, {
        attributes: ['id', 'drink_name', 'ingredients', 'instructions'],
        include: [
            {  
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbDrinkData => {
        const drinks = dbDrinkData.get({ plain: true });
        res.render('edit-drink', { drinks, loggedIn: true });
        
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
router.post('/', (req, res) => {
    Drink.create({
        drink_name: req.body.drinkName,
        ingredients: req.body.drinkInstructions,
        instructions: req.body.drinkIngredients,
        user_id: req.session.user_id
    })
    .then(dbDrinkData => {
        res.json(dbDrinkData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', (req, res) => {
    Drink.update({
        drink_name: req.body.drinkName,
        ingredients: req.body.drinkIngr,
        instructions: req.body.drinkIns
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
router.delete('/:id', (req, res) => {
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