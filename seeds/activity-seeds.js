const sequelize = require("../config/connection");
const { Activity, User, Exercise } = require("../models");

let activitydata = [{
    ex_Time: "13:00",
    ex_Reps: "20",
    ex_Sets: "20",
    ex_Id: 1,
    user_id: 1,
},
{
    ex_Time: "13:00",
    ex_Reps: "20",
    ex_Sets: "20",
    ex_Id: 2,
    user_id: 2,
},
{
    ex_Time: "13:00",
    ex_Reps: "20",
    ex_Sets: "20",
    ex_Id: 3,
    user_id: 3,
},
{
    ex_Time: "13:00",
    ex_Reps: "20",
    ex_Sets: "20",
    ex_Id: 4,
    user_id: 4,
}
];

const seedActivity = () => User.bulkCreate(activitydata, { individualHooks: true });

module.exports = seedActivity;