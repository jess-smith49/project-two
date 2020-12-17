const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils.auth');

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
            }
        ]
    })
    .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', withAuth, (req, res) => {
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

router.post('/', withAuth, (req, res) => {
    Recipe.create({
        recipe_name: req.body.recipe_name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })
    .then(dbRecipeData => {
        res.json(dbRecipeData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
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
router.delete('/:id', withAuth, (req, res) => {
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