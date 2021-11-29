const sequelize = require("../config/connection");
const { Exercise, User, Activity } = require("../models");

let exercisedata = [{
        exerciseName: "abs",
        videoLink: "https://www.youtube.com/watch?v=AnYl6Nk9GOA",
        category: "Strength",
        u_Id: 1
    },
    {
        exerciseName: "yoga",
        videoLink: "https://www.youtube.com/watch?v=6hZIzMpHl-c",
        category: "Yoga",
        u_Id: 2
    },
    {
        exerciseName: "cardio",
        videoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        category: "Strength",
        u_Id: 3
    },
    {
        exerciseName: "Pilates",
        videoLink: "hhttps://www.youtube.com/watch?v=NyP_waVgL1w",
        category: "Strength",
        u_Id: 4
    },
    {
        exerciseName: "swimming",
        videoLink: "https://www.youtube.com/watch?v=cBbA4-EhNf8",
        category: "Endurance",
        u_Id: 5
    },
    {
        exerciseName: "dance",
        videoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        category: "Endurance",
        u_Id: 6
    },
    {
        exerciseName: "zumba",
        videoLink: "https://www.youtube.com/watch?v=8DZktowZo_k",
        category: "WeightLoss",
        u_Id: 7
    },
    {
        exerciseName: "basketball",
        videoLink: "https://www.youtube.com/watch?v=CMQp0bwjokw",
        category: "Endurance",
        u_Id: 8
    },
    {
        exerciseName: "tennis",
        videoLink: "https://www.youtube.com/watch?v=WgmzdLQ4hdQ",
        category: "Endurance",
        u_Id: 9
    },
    {
        exerciseName: "staircase workout",
        videoLink: "https://www.youtube.com/watch?v=Y1-uwSGuD5w",
        category: "Strength",
        u_Id: 10
    }
];

const seedExercise = () => Exercise.bulkCreate(exercisedata, { individualHooks: true });

module.exports = seedExercise;