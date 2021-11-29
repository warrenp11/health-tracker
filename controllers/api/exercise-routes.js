const router = require("express").Router();
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


module.exports = router;