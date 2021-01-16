const router = require('express').Router();
const { Recipe, List, Drink, User } = require('../models');

//get posts from recipes
router.get('/', (req, res) => {
    res.render("homepage", {
    });
});
router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: [
            'id',
            'recipe_name',
            'ingredients',
            'instructions'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
    .then(dbRecipeData => {
        const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
        res.render('dashboard', {
            recipes,
            loggedIn: req.session.loggedIn 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//get posts from drinks
router.get('/', (req, res) => {
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
            },
        ]
    })
    .then(dbDrinkData => {
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('dashboard', {
            drinks,
            loggedIn: req.session.loggedIn 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// //get posts from gift list
router.get('/', (req, res) => {
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
    .then(dbListData => {
        const lists = dbListData.map(list => list.get({ plain: true }));
        res.render('dashboard', {
            lists,
            loggedIn: req.session.loggedIn 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/login', (req, res) => {
    res.render('login', {
    });

}); 
router.get('/sign-up', (req, res) => {
  res.render('sign-up', {
  });
});
router.get('/group-code', (req, res) => {
    // sign in and then create code
    res.render('group-code', {
    });
})

module.exports = router;