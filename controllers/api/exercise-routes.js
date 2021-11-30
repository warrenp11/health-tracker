const router = require("express").Router();
const { Exercise } = require("../../models");

// GET /api/exercise
router.get("/", (req, res) => {
    // Access our User model and run .findAll() method)
    Exercise.findAll({
            attributes: ['id', 'exerciseName', 'videoLink', 'category'],
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
            attributes: ['id', 'exerciseName', 'videoLink', 'category'],
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


module.exports = router;

module.exports = router;