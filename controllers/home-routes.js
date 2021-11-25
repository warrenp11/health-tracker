const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    id: 1,
    exercise_name: "Basketball",
    exercise_category: "Cardio",
    time: 30,
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: "Shaq"
    }
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
