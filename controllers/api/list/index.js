const router = require('express').Router();

const postRoutes = require('./post-routes');

router.use('/lists', postRoutes);

module.exports = router;