const router = require('express').Router();
const { Recipe, List, User, Drink, Team, TeamUser } = require('../../models');


//GET ALL USERS
router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET USER BY ID
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Recipe,
                attributes: ['id', 'recipe_name', 'ingredients', 'instructions'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: List,
                attributes: ['id', 'list_name', 'list_items'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: Drink,
                attributes: ['id', 'drink_name', 'ingredients', 'instructions'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: Team,
                attributes: ['id', 'team_name', 'team_code'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ],
     })
     .then(dbUserData => {
         if (!dbUserData) {
             res.status(404).json({ message: 'No user found with this id.' });
             return;
         }
         res.json(dbUserData);
     })
     .catch(err => {
         console.log(err);
         res.status(500).json(err);
     })
})

//CREATE NEW USER
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
        });
    });
});

//FIND ONE USER
router.post('/login', (req, res) => {
    console.log(req.body, "===============");
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that username found.'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in.'});
        });
    });
});

//LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

//UPDATE USER BY ID
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with that id.' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DESTROY USER BY ID
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports= router;

