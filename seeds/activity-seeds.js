const sequelize = require("../config/connection");
const { Activity, User, Exercise } = require("../models");

const activitydata = [{
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 001,
        U_id: 1001,
        Activity_Id: 01

    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 002,
        U_id: 1002,
        Activity_Id: 02

    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 003,
        U_id: 1003,
        Activity_Id: 03

    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 004,
        U_id: 1004,
        Activity_Id: 04

    }
];

const seedActivity = () => User.bulkCreate(activitydata, { individualHooks: true });

module.exports = seedActivity;