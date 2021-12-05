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

Exercise.belongsTo(User, {
    foreignKey: 'u_Id'
})

User.hasMany(Exercise, {
    foreignKey: 'u_Id'
})

// User.belongsToMany(Exercise, {
//     through: Activity,
//     foreignKey: 'u_Id'
// })
Activity.belongsTo(Exercise, {
    foreignKey: 'ex_Id'
})

Exercise.hasMany(Activity, {
    foreignKey: 'ex_Id'
})

module.exports = { User, Exercise, Activity };