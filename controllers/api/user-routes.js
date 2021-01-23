const router = require('express').Router();
const { Recipe, List, User, Drink, Team, TeamUser } = require('../../models');
const { default: ShortUniqueId } = require('short-unique-id');

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
// router.get('/dashboard2', (req, res) => {
//     res.render('dashboard', data)
// })
// creates new user and assigns group code
// need to create dashboard to get team code to display
// post route cannot send data and post, need get data to post actual data
router.post('/', (req, res) => {
    const uid = new ShortUniqueId();
    teamCode = uid.randomUUID(6);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    .then(dbUserData => {
        req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;
        })
        // data = dbUserData.get({ plain: true });
        console.log("user", dbUserData)
        Team.create({
            team_name: req.body.team_name,
            team_code: teamCode,
            user_id: dbUserData.id
        })
        .then(dbTeamData => {
            console.log("team", dbTeamData)
            const codes = dbTeamData.get({ plain: true });
            // res.render('dashboard', { codes, loggedIn: true });
            res.json(codes)
            console.log(codes)
            console.log(req.session)
        })
        .catch(err => {
            console.log("error", err);
            res.status(500).json(err);
        });
    });
    // }):
});
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
            // if (!dbUserData) {
            //     res.status(400).json({ message: 'No user with that username found.'});
            //     return;
            // }
            // const validPassword = dbUserData.checkPassword(req.body.password);
            // if (!validPassword) {
            //     res.status(400).json({ message: 'Incorrect password!'});
            //     return;
            // }
        console.log(dbUserData)
        const data = dbUserData.get({ plain: true });
        res.render('dashboard', { data, loggedIn: true });
        // res.json({ codes, loggedIn: true })
        console.log(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
        // req.session.save(() => {
        //     req.session.user_id = dbUserData.id;
        //     req.session.username = dbUserData.username;
        //     req.session.email = dbUserData.email;
        //     req.session.loggedIn = true;
        //     console.log(req.session)
            // Team.findOne({
            //     where: {
            //         team_code: req.body.teamCode
            //         // user_id: req.session.user_id
            //     }
            // })
            // .then(dbTeamUserData => {
            //     console.log("==========", dbTeamUserData)
            //     if(!dbTeamUserData){
            //         res.status(400).json({message: 'No group found with this ID'})
            //         return;
            //     }
            //         TeamUser.create(
            //             {
            //                 user_id: req.session.user_id,
            //                 team_id: dbTeamUserData.dataValues.id
            //             }
            //         )
            //     })
            //     .then(dbTeamUserData =>{
            //         console.log(dbTeamUserData)
            //             const group = dbTeamUserData.get({ plain: true });
            //             res.render('dashboard', { group, loggedIn: true });
            //             // res.json({ codes, loggedIn: true })
            //             console.log(group)
            //         // res.json(dbTeamUserData);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //         res.status(500).json(err);
            //     })   
            // });
    //         // .then(dbTeamData => {
    //         //     console.log(dbTeamData)
    //         //     const group= dbTeamData.get({ plain: true });
    //         //     res.render('dashboard', { group, loggedIn: true });
    //         //     // res.json({ codes, loggedIn: true })
    //         //     console.log("group =======", group)
    //         // })
    //         // .catch(err => {
    //         //     console.log(err);
    //         //     res.status(500).json(err);
    //         // });
    //     });
    // });

            // res.json({ user: dbUserData, message: 'You are now logged in.'});
        // });
    // });
// });
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

