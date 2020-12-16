const router = require('express').Router();

const postRoutes = require('./post-routes');

router.use('/recipes', postRoutes);

module.exports = router;