const router = require('express').Router();

const drinkRoutes = require('./drink-routes');
const recipeRoutes = require('./recipe-routes');
const listRoutes = require('./list-routes');
const userRoutes = require('./user-routes');
const teamRoutes = require('./team-routes');
const teamUserRoutes = require('./teamuser-routes');

router.use('/lists', listRoutes);
router.use('/recipes', recipeRoutes);
router.use('/drinks', drinkRoutes);
router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/teamusers', teamUserRoutes)

module.exports = router;

