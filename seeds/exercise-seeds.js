const sequelize = require("../config/connection");
const { Exercise, User, Activity } = require("../models");

let exercisedata = [{
        exerciseName: "abs",
        videoLink: "https://www.youtube.com/watch?v=AnYl6Nk9GOA",
        category: "Strength",
        user_id: 1
    },
    {
        exerciseName: "yoga",
        videoLink: "https://www.youtube.com/watch?v=6hZIzMpHl-c",
        category: "Yoga",
        user_id: 2
    },
    {
        exerciseName: "cardio",
        videoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        category: "Strength",
        user_id: 3
    },
    {
        exerciseName: "Pilates",
        videoLink: "hhttps://www.youtube.com/watch?v=NyP_waVgL1w",
        category: "Strength",
        user_id: 4
    },
    {
        exerciseName: "swimming",
        videoLink: "https://www.youtube.com/watch?v=cBbA4-EhNf8",
        category: "Endurance",
        user_id: 5
    },
    {
        exerciseName: "dance",
        videoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        category: "Endurance",
        user_id: 6
    },
    {
        exerciseName: "zumba",
        videoLink: "https://www.youtube.com/watch?v=8DZktowZo_k",
        category: "WeightLoss",
        user_id: 7
    },
    {
        exerciseName: "basketball",
        videoLink: "https://www.youtube.com/watch?v=CMQp0bwjokw",
        category: "Endurance",
        user_id: 3
    },
    {
        exerciseName: "tennis",
        videoLink: "https://www.youtube.com/watch?v=WgmzdLQ4hdQ",
        category: "Endurance",
        user_id: 4
    },
    {
        exerciseName: "staircase workout",
        videoLink: "https://www.youtube.com/watch?v=Y1-uwSGuD5w",
        category: "Strength",
        user_id: 5
    }
];

const seedExercise = () => User.bulkCreate(exercisedata, { individualHooks: true });

module.exports = seedExercise;