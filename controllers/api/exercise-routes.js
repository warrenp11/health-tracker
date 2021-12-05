const router = require("express").Router();
const withAuth = require('../../utils/auth');
const { Exercise } = require("../../models");

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
            exerciseName: req.body.exerciseName,
            videoLink: req.body.videoLink,
            category: req.body.category,
            u_Id: req.body.u_Id

        })
        .then((dbExerciseData) => res.json(dbExerciseData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;