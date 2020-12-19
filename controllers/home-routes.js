const router = require('express').Router();
const { Recipe, List, Drink } = require('../models');
const withAuth = require('../utils/auth');


//get posts from recipes
router.get('/', withAuth, (req, res) => {
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
        res.render('homepage', {
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
            },
        ]
    })
    .then(dbDrinkData => {
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('homepage', {
            drinks,
            loggedIn: req.session.loggedIn 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//get posts from gift list
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
    .then(dbListData => {
        const lists = dbListData.map(list => list.get({ plain: true }));
        res.render('homepage', {
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
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
}); 

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('main');
});

module.exports = router;