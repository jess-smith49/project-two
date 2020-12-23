const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

//GET ALL RECIPES
router.get('/', (req, res) => {
    Recipe.findAll({
        where: {
            user_id: req.session.user_id
        },
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
            }
        ]
    })
    .then(dbRecipeData => {
        const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
        res.render('myrecipes', { recipes, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET RECIPE BY ID
router.get('/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        },
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
            }
        ]
    })
    .then(dbRecipeData => {
        if (!dbRecipeData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbRecipeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//CREATE RECIPE
router.post('/', (req, res) => {
    Recipe.create({
        recipe_name: req.body.recipe_name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        user_id: req.session.user_id
    })
    .then(dbRecipeData => {
        res.json(dbRecipeData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//UPDATE RECIPE BY ID
router.put('/:id', (req, res) => {
    Recipe.update({
        recipe_name: req.body.recipe_name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbRecipeData => {
        if (!dbRecipeData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbRecipeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DELETE RECIPE BY ID
router.delete('/:id', (req, res) => {
    Recipe.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbRecipeData => {
        if (!dbRecipeData) {
            res.status(404).json({ message: 'No post is found with this id.'});
            return;
        }
        res.json(dbRecipeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;