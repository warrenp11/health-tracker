const sequelize = require("../config/connection");
const { Activity, User, Exercise } = require("../models");

let activitydata = [{
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 1,
        u_Id: 1
    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 2,
        u_Id: 2
    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 3,
        u_Id: 3
    },
    {
        ex_Time: "13:00",
        ex_Reps: "20",
        ex_Sets: "20",
        ex_Id: 4,
        u_Id: 4
    }
];

const seedActivity = () => Activity.bulkCreate(activitydata, { individualHooks: true });

module.exports = seedActivity;