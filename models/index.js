const User = require('./User');
const Exercise = require('./Exercise');
const Activity = require('./Activity');

module.exports = { User, Exercise, Activity };

// user has many activities based on exercise id

// create associations

// User.hasMany(Activity, {
//     through: Exercise,
//     as: 'ex_Id',
//     foreignKey: 'ex_Id'
// })

Activity.belongsToMany(User, {
    through: 'U_id',
    foreignKey: 'U_id'
})

Exercise.hasMany(User, {
    foreignKey: 'exerciseId'
})