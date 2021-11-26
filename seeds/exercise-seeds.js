const sequelize = require("../config/connection");
const { Exercise, User, Activity } = require("../models");

const exercisedata = [{
        exerciseName: "abs",
        VdoLink: "https://www.youtube.com/watch?v=AnYl6Nk9GOA",
        exercise_Id: 001,
        category: "Strength"
    },
    {
        exerciseName: "yoga",
        VdoLink: "https://www.youtube.com/watch?v=6hZIzMpHl-c",
        exercise_Id: 002,
        category: "Yoga"
    },
    {
        exerciseName: "cardio",
        VdoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        exercise_Id: 003,
        category: "Strength"
    },
    {
        exerciseName: "Pilates",
        VdoLink: "hhttps://www.youtube.com/watch?v=NyP_waVgL1w",
        exercise_Id: 004,
        category: "Strength"
    },
    {
        exerciseName: "swimming",
        VdoLink: "https://www.youtube.com/watch?v=cBbA4-EhNf8",
        exercise_Id: 005,
        category: "Endurance"
    },
    {
        exerciseName: "dance",
        VdoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        exercise_Id: 006,
        category: "Endurance"
    },
    {
        exerciseName: "zumba",
        VdoLink: "https://www.youtube.com/watch?v=8DZktowZo_k",
        exercise_Id: 007,
        category: "WeightLoss"
    },
    {
        exerciseName: "basketball",
        VdoLink: "https://www.youtube.com/watch?v=CMQp0bwjokw",
        exercise_Id: 010,
        category: "Endurance"
    },
    {
        exerciseName: "tennis",
        VdoLink: "https://www.youtube.com/watch?v=WgmzdLQ4hdQ",
        exercise_Id: 011,
        category: "Endurance"
    },
    {
        exerciseName: "staircase workout",
        VdoLink: "https://www.youtube.com/watch?v=Y1-uwSGuD5w",
        exercise_Id: 012,
        category: "Strength"
    }
];

const seedExercise = () => User.bulkCreate(exercisedata, { individualHooks: true });

module.exports = seedExercise;