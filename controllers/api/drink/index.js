const router = require('express').Router();

const postRoutes = require('./post-routes');

router.use('/drinks', postRoutes);

module.exports = router;

