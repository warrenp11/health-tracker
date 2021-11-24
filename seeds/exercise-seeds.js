const sequelize = require("../config/connection");
const { Exercise, Post } = require("../models");

const userdata = [{
        exerciseName: "abs",
        VdoLink: "https://www.youtube.com/watch?v=AnYl6Nk9GOA",
        exerciseId: 001,
    },
    {
        exerciseName: "yoga",
        VdoLink: "https://www.youtube.com/watch?v=6hZIzMpHl-c",
        exerciseId: 002
    },
    {
        exerciseName: "cardio",
        VdoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        exerciseId: 003
    },
    {
        exerciseName: "Pilates",
        VdoLink: "hhttps://www.youtube.com/watch?v=NyP_waVgL1w",
        exerciseId: 004
    },
    {
        exerciseName: "swimming",
        VdoLink: "https://www.youtube.com/watch?v=cBbA4-EhNf8",
        exerciseId: 005
    },
    {
        exerciseName: "dance",
        VdoLink: "https://www.youtube.com/watch?v=PvEnWsPrL4w",
        exerciseId: 006
    },
    {
        exerciseName: "zumba",
        VdoLink: "https://www.youtube.com/watch?v=8DZktowZo_k",
        exerciseId: 007
    },
    {
        exerciseName: "basketball",
        VdoLink: "https://www.youtube.com/watch?v=CMQp0bwjokw",
        exerciseId: 010
    },
    {
        exerciseName: "tennis",
        VdoLink: "https://www.youtube.com/watch?v=WgmzdLQ4hdQ",
        exerciseId: 011
    },
    {
        exerciseName: "staircase workout",
        VdoLink: "https://www.youtube.com/watch?v=Y1-uwSGuD5w",
        exerciseId: 012
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;