const router = require("express").Router();
const { User } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
            attributes: { exclude: ["password"] },
            order: [
                ['id', 'ASC']
            ]
        })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
router.get("/:id", (req, res) => {
    User.findOne({
            attributes: { exclude: ["password"] },
            where: {
                id: req.params.id,
            },
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with this id" });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post("/", (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            age: req.body.age,
            gender: req.body.gender,
            height: req.body.height,
            weight: req.body.weight
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.u_Id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;
                res.json(dbUserData);
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Login Route
router.post("/login", (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((dbUserData) => {
        if (!dbUserData) {
            res.status(400).json({ message: "No user with that email address!" });
            return;
        }
        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            // declare session variables
            req.session.u_Id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

// logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.render('login');
        });
    } else {
        res.render('login');
    }
});

// PUT /api/users/1
router.put("/:id", (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id,
        },
    })
    .then((dbUserData) => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;