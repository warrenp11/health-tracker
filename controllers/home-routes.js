const sequelize = require("../config/connection");
const { User, Exercise, Activity } = require("../models");
const router = require("express").Router();

router.get("/dashboard", (req, res) => {
  console.log(req.session)
  User.findOne({
    include: [{model: Exercise , include: [{model: Activity }]}],
    where:{
      id: req.session.u_Id
  }})
    .then((dbActivityData) => {
      const dbUser= dbActivityData.get({plain:true})
     
      console.log("user: ",dbUser)
      
      //console.log("*********" + dbActivityData);
      let activityPageData = {
        user: dbUser,
      }
      console.log(activityPageData);
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

router.get("/workout", (req, res) => {
  res.render("workout");
});

module.exports = router;