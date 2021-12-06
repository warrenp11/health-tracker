const User = require('./User');
const Exercise = require('./Exercise');
const Activity = require('./Activity');

// create associations

Exercise.belongsTo(User, {
    foreignKey: 'u_Id'
})

Activity.belongsTo(User, {
    foreignKey: 'u_Id'
})

User.hasMany(Exercise, {
    foreignKey: 'u_Id'
})

Activity.belongsTo(Exercise, {
    foreignKey: 'ex_Id'
})

Exercise.hasMany(Activity, {
    foreignKey: 'ex_Id'
})

module.exports = { User, Exercise, Activity };