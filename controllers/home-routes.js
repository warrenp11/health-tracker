const sequelize = require("../config/connection");
const { User, Exercise, Activity } = require("../models");
const router = require("express").Router();

router.get("/dashboard", (req, res) => {
    User.findAll({
            attributes: [
                "id",
                "username",
                "email",
                "height",
                "weight",
                "age",
                "gender",
            ],
        })
        .then((dbUserData) => {
            console.log(dbUserData);
            let userPageData = {

                username: dbUserData.username,
                email: dbUserData.email,
                height: dbUserData.height,
                weight: dbUserData.weight,
                age: dbUserData.age,
                gender: dbUserData.gender

            }

            res.render("dashboard", userPageData);
        })
        .then(Activity.findAll({
            where: { u_Id: req.session.u_Id }

        }))
        .then((dbActivityData) => {
            console.log("*********" + dbActivityData);
            let activityPageData = {
                    // exercise: dbActivityData.exercise,
                    // category: dbActivityData.category,
                    ex_Time: dbActivityData.ex_Time,
                    ex_Reps: dbActivityData.ex_Reps,
                    ex_Sets: dbActivityData.ex_Sets

                }
                // console.log(dbUserData[0]);
            res.render("dashboard", activityPageData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/", (req, res) => {
    res.render("login");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

module.exports = router;