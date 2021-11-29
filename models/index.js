const User = require('./User');
const Exercise = require('./Exercise');
const Activity = require('./Activity');

// user has many activities based on exercise id

// create associations

Exercise.belongsToMany(User, {
    through: Activity,
    as: 'ex_Id',
    foreignKey: 'exercise_id'
})

User.belongsToMany(Exercise, {
    through: Activity,
    as: 'u_Id',
    foreignKey: 'user_id'
})

module.exports = { User, Exercise, Activity };