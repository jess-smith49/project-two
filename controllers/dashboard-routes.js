const router = require('express').Router();
const { Recipe, List, Drink, User, Team } = require('../models');
const withAuth = require('../utils/auth');

//get all groups
router.get('/groups', (req, res) => {
    res.render("team", {
    });
});
router.get('/lists', (req, res) => {
    res.render("list", {
    });
});
router.get('/drinks', (req, res) => {
    res.render("drinks", {
    });
});
router.get('/recipes', (req, res) => {
    res.render("recipes", {
    });
});
router.get('/', (req, res) => {
    res.render("dashboard", {
    });
});
//get all recipes
router.get('/recipes', (req, res) => {
    Recipe.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'recipe_name', 'ingredients', 'instructions'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbRecipeData => {
        const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
        res.render('dashboard', { recipes, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//get all drinks
router.get('/drinks', (req,res) => {
    Drink.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'drink_name', 'ingredients', 'instructions'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbDrinkData => {
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('dashboard', { drinks, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//get all lists
router.get('/lists', (req,res) => {
    List.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'list_name', 'list_items'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbListData => {
        const lists = dbListData.map(list => list.get({ plain: true }));
        res.render('dashboard', { lists, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//create recipe
router.get('/recipes/new', (req,res) => {
    res.render("create-recipe", {
    });
});
//edit recipe
router.get('/recipes/edit/:id', (req, res) => {
    Recipe.findByPk(req.params.id, {
        attributes: ['id', 'recipe_name', 'ingredients', 'instructions'],
        include: [
            {  
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbRecipeData => {
        const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
        res.render('dashboard', { recipes, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//create drink
router.get('/drinks/new', (req,res) => {
    res.render("create-drink", {
    });
});
//edit drink
router.get('/drinks/edit/:id', (req, res) => {
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
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('dashboard', { drinks, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//create list
router.get('/lists/new', (req,res) => {
    res.render("create-list", {
    });
});
//edit list
router.get('/lists/edit/:id', (req, res) => {
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
        const lists = dbListData.map(list => list.get({ plain: true }));
        res.render('dashboard', { lists, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});

module.exports = router;
