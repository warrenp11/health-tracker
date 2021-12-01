const sequelize = require("../config/connection");
const { User, Exercise, Activity } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
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
      // console.log(dbUserData[0]);
      res.render("dashboard", dbUserData[1].get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
