const sequelize = require("../config/connection");
const { Exercise, User, Activity } = require("../models");

let exercisedata = [{
        exerciseName: "abs",
        videoLink: "https://www.youtube.com/watch?v=AnYl6Nk9GOA",
        category: "Strength"
    },
    {
        exerciseName: "yoga",
        videoLink: "https://www.youtube.com/watch?v=6hZIzMpHl-c",
        category: "Yoga"
    },
    {
        exerciseName: "cardio",
        videoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        category: "Strength"
    },
    {
        exerciseName: "Pilates",
        videoLink: "hhttps://www.youtube.com/watch?v=NyP_waVgL1w",
        category: "Strength"
    },
    {
        exerciseName: "swimming",
        videoLink: "https://www.youtube.com/watch?v=cBbA4-EhNf8",
        category: "Endurance"
    },
    {
        exerciseName: "dance",
        videoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        category: "Endurance"
    },
    {
        exerciseName: "zumba",
        videoLink: "https://www.youtube.com/watch?v=8DZktowZo_k",
        category: "WeightLoss"
    },
    {
        exerciseName: "basketball",
        videoLink: "https://www.youtube.com/watch?v=CMQp0bwjokw",
        category: "Endurance"
    },
    {
        exerciseName: "tennis",
        videoLink: "https://www.youtube.com/watch?v=WgmzdLQ4hdQ",
        category: "Endurance"
    },
    {
        exerciseName: "staircase workout",
        videoLink: "https://www.youtube.com/watch?v=Y1-uwSGuD5w",
        category: "Strength"
    }
];

const seedExercise = () => Exercise.bulkCreate(exercisedata, { individualHooks: true });

module.exports = seedExercise;