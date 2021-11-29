const router = require("express").Router();
const { Activity } = require("../../models");

// GET /api/exercise
router.get("/", (req, res) => {
    // Access our User model and run .findAll() method)
    Activity.findAll({
            attributes: ['id', 'ex_Time', 'ex_Reps', 'ex_Sets', 'ex_Id', 'u_Id']
        })
        .then((dbActivityData) => res.json(dbActivityData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;