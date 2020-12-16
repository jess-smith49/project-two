const router = require('express').Router();
const { post } = require('.');
const {} = require('../models');
const withAuth = require('../utils/auth');

//get all posts
//get posts from recipes
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        attributes: [

        ]
    })
})
//get posts from drinks
//get posts from gift list

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
  res.render('sign-up');
});

module.exports = router;