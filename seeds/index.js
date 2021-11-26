const seedUsers = require('./user-seeds');
const seedExercise = require('./exercise-seeds');
const seedActivity = require('./activity-seeds');


const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedExercise();
    console.log('--------------');

    await seedActivity();
    console.log('--------------');

    //   await seedVotes();
    //   console.log('--------------');

    process.exit(0);
};

seedAll();