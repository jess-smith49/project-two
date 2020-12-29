const router = require('express').Router();
const { Recipe, List, Drink, User, Team, TeamUser } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render("dashboard", {
    });
});
//get all recipes
router.get('/recipes', (req, res) => {
    TeamUser.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
            'team_id'
        ],
        include: [
            {
                model: Team,
                attributes: ['id', 'team_name', 'team_code'],
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                        include: [
                            {
                            model: Recipe,
                            attributes: ['recipe_name', 'ingredients', 'instructions']
                            }
                        ]
                    }
                ],
            },
        ]
    })
    .then(dbRecipeData => {
        const food = dbRecipeData.map(recipe => recipe.get({ plain: true }));
        res.render('recipes', { food, loggedIn: true });
        // res.json(food)
        console.log("===========", req.session, food)
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//get all drinks
router.get('/drinks', (req, res) => {
    TeamUser.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
            'team_id'
        ],
        include: [
            {
                model: Team,
                attributes: ['id', 'team_name', 'team_code'],
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                        include: [
                            {
                            model: Drink,
                            attributes: ['drink_name', 'ingredients', 'instructions']
                            }
                        ]
                    }
                ],
            },
        ]
    })
    .then(dbDrinkData => {
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('drinks', { drinks, loggedIn: true });
        // res.json(drinks)
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//get all lists
router.get('/lists', (req, res) => {
    TeamUser.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
            'team_id'
        ],
        include: [
            {
                model: Team,
                attributes: ['id', 'team_name', 'team_code'],
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                        include: [
                            {
                            model: List,
                            attributes: ['list_name', 'list_items']
                            }
                        ]
                    }
                ],
            },
        ]
    })
    .then(dbListData => {
        const wish = dbListData.map(list => list.get({ plain: true }));
        res.render('list', { wish, loggedIn: true });
        // res.json(lists)
        console.log(lists, "===========")
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
//gets group memebrs of group that user is in
router.get('/groups', (req, res) => {
    TeamUser.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
            'team_id'
        ],
        include: [
            {
                model: Team,
                attributes: ['id', 'team_name', 'team_code'],
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                        include: [
                            {
                            model: List,
                            attributes: ['list_name', 'list_items']
                            }
                        ]
                    }
                ],
            },
            {
                model: User,
                attributes: ['username'],
                include: [
                    { 
                        model: List,
                        attributes: ['list_name', 'list_items']
                    }
                ]
            }
        ]
    })
    .then(dbTeamData => {
        const teams = dbTeamData.map(team => team.get({ plain: true }));
        res.render('team', { teams, loggedIn: true });
        console.log(teams, " ===============")
        console.log(req.session.user_id, " =============")
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
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
