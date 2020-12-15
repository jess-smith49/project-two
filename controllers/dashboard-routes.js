const router = require('express').Router();
const { Post } = require('.');
const {} = require('../models');
const withAuth = require('../utils/auth');

//get all posts by user recipes, drinks, and gift list
router.get('/recipes', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id']
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
router.get('/drinks', withAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
router.get('/lists', withAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        atrributes: []
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
router.get('/recipes/new', withAuth, (req,res) => {
    res.render("create-recipe", {
    });
});
router.get('/recipes/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: []
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
router.get('/drinks/new', withAuth, (req,res) => {
    res.render("create-drink", {
    });
});
router.get('/drinks/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: []
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});
router.get('/lists/new', withAuth, (req,res) => {
    res.render("create-list", {
    });
});
router.get('/lists/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: []
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.render(500).json(err);
    });
});


module.exports = router;
