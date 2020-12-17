const router = require('express').Router();

const drinkRoutes = require('./drink-routes');
const recipeRoutes = require('./recipe-routes');
const listRoutes = require('./list-routes');

router.use('/lists', listRoutes);
router.use('/recipes', recipeRoutes);
router.use('/drinks', drinkRoutes);

module.exports = router;

