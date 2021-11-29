const sequelize = require("../config/connection");
const { Activity, User, Exercise } = require("../models");

const activitydata = [{
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20"
    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20"

    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20"

    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20"

    }
];


const seedActivity = () => Activity.bulkCreate(activitydata, { individualHooks: true });

module.exports = seedActivity;