const router = require("express").Router();
const withAuth = require('../../utils/auth');
const { Exercise, Activity } = require("../../models");

// GET /api/exercise
router.get("/", (req, res) => {
    // Access our User model and run .findAll() method)
    Exercise.findAll({
            attributes: ['id', 'exerciseName', 'videoLink', 'category', 'u_Id'],
            order: [
                ['id', 'ASC']
            ]
        })
        .then((dbExerciseData) => res.json(dbExerciseData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/exercises/1
router.get("/:id", (req, res) => {
    Exercise.findOne({
            attributes: ['id', 'exerciseName', 'videoLink', 'category', 'u_Id'],
            where: {
                id: req.params.id,
            },
        })
        .then((dbExerciseData) => {
            if (!dbExerciseData) {
                res.status(404).json({ message: "No Exercise tied this id" });
                return;
            }
            res.json(dbExerciseData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post put delete

// PUT /api/exercises/1
router.put("/:id", withAuth, (req, res) => {

    Exercise.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbExerciseData) => {
            if (!dbExerciseData) {
                res.status(404).json({ message: "No exercise tied with this id" });
                return;
            }
            res.json(dbExerciseData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete("/:id", withAuth, (req, res) => {
    Exercise.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbExerciseData) => {
            if (!dbExerciseData) {
                res.status(404).json({ message: "No exercise tied with this id" });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
// POST /api/exercises
router.post("/", withAuth, (req, res) => {
    Exercise.create({
            exerciseName: req.body.exName,
            videoLink: '',
            category: req.body.exType,
            u_Id: req.session.u_Id

        })
        .then((dbExerciseData) => (dbExerciseData))
        .then((dbExerciseData) => {
            console.log(dbExerciseData);
            return Activity.create({
                ex_Time: req.body.exTime,
                ex_Reps: req.body.reps,
                ex_Sets: req.body.sets,
                ex_Id: dbExerciseData.id

            })
        }).then((dbExerciseData) => res.json(dbExerciseData))


    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });


});

module.exports = router;