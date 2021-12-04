const User = require('./User');
const Exercise = require('./Exercise');
const Activity = require('./Activity');

// user has many activities based on exercise id

// create associations

// Exercise.belongsToMany(User, {
//     through: Activity,
//     as: 'ex_Id',
//     foreignKey: 'ex_Id'
// })

User.belongsToMany(Exercise, {
    through: Activity,
    as: 'u_Id',
    foreignKey: 'u_Id'
})

Exercise.hasMany(Activity, {
    // through: User,
    as: 'exercise-Id',
    foreignKey: 'ex_Id'
})
module.exports = { User, Exercise, Activity };