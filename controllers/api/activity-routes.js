const router = require("express").Router();
const withAuth = require('../../utils/auth');
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

// POST /api/Activities
router.post("/", withAuth, (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    Activity.create({
            ex_Time: req.body.ex_Time,
            ex_Reps: req.body.ex_Reps,
            ex_Sets: req.body.ex_Sets,
            ex_Id: req.body.ex_Id,
            u_Id: req.body.u_Id
        })
        .then((dbActivityData) => res.json(dbActivityData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// PUT /api/activities/1
router.put("/:id", withAuth, (req, res) => {

    Activity.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbActivityData) => {
            if (!dbActivityData[0]) {
                res.status(404).json({ message: "No activity found with this id" });
                return;
            }
            res.json(dbActivityData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/activities/1
router.delete("/:id", withAuth, (req, res) => {
    Activity.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbActivityData) => {
            if (!dbActivityData) {
                res.status(404).json({ message: "No user found with this id" });
                return;
            }
            res.json(dbActivityData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});




module.exports = router;