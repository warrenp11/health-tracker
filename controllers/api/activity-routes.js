const router = require("express").Router();
const { Activity } = require("../../models");

// GET /api/activity
router.get("/", (req, res) => {
    // Access our Acitivity model and run .findAll() method)
    Activity.findAll({
            attributes: ['id', 'ex_Time', 'ex_Reps', 'ex_Sets', 'ex_Id', 'u_Id'],
            order: [
                ['id', 'ASC']
            ]
        })
        .then((dbActivityData) => res.json(dbActivityData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// find activity by id

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Activity.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: User,
                attributes: ['id']
            }
        })
        .then(dbActivityData => {
            if (!dbActivityData) {
                res.status(404).json({ message: 'No activties found' });
                return;
            }
            res.json(dbActivityData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// POST /api/users
router.post("/", (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    Activity.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// PUT /api/activities/1
router.put("/:id", (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Activity.update(req.body, {
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

// DELETE /api/activities/1
router.delete("/:id", (req, res) => {
    Activity.destroy({
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