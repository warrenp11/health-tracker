const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [{
        userId: 1001,
        username: "bugsBunny",
        email: "bugsBunny@email.com",
        password: "password123",
        Age: 20,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "20",
        exerciseSets: "20",
        ExerciseId: 001


    },
    {
        userId: 1002,
        username: "daffyDuck",
        email: "daffyDuck@email.com",
        password: "password123",
        Age: 25,
        Gender: "Male",
        Height: "5.8 ft",
        Weight: "200",
        exerciseTime: "13:00",
        exerciseReps: "16",
        exerciseSets: "20",
        ExerciseId: 001
    },
    {
        userId: 1003,
        username: "elmerFudd",
        email: "elmerFudd@email.com",
        password: "password123",
        Age: 40,
        Gender: "Male",
        Height: "6.1 ft",
        Weight: "180",
        exerciseTime: "13:00",
        exerciseReps: "12",
        exerciseSets: "20",
        ExerciseId: 002
    },
    {
        userId: 1004,
        username: "foghornLeghorn",
        email: "foghornLeghorn@email.com",
        password: "password123",
        Age: 22,
        Gender: "Male",
        Height: "5.0 ft",
        Weight: "120",
        exerciseTime: "13:00",
        exerciseReps: "20",
        exerciseSets: "20",
        ExerciseId: 003
    },
    {
        userId: 1005,
        username: "porkyPig",
        email: "porkyPig@email.com",
        password: "password123",
        Age: 23,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "160",
        exerciseTime: "13:00",
        exerciseReps: "20",
        exerciseSets: "20",
        ExerciseId: 003
    },
    {
        userId: 1005,
        username: "marvinMartian",
        email: "marvinMartian@email.com",
        password: "password123",
        Age: 30,
        Gender: "Male",
        Height: "5.6 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "12",
        exerciseSets: "20",
        ExerciseId: 004
    },
    {
        userId: 1006,
        username: "tweetyBird",
        email: "tweetyBird@email.com",
        password: "password123",
        Age: 50,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "15",
        exerciseSets: "20",
        ExerciseId: 005
    },
    {
        userId: 1007,
        username: "tazDevil",
        email: "tazDevil@email.com",
        password: "password123",
        Age: 60,
        Gender: "Male",
        Height: "5.0 ft",
        Weight: "150",
        exerciseTime: "13:00",
        exerciseReps: "15",
        exerciseSets: "20",
        ExerciseId: 006
    },
    {
        userId: 1008,
        username: "yosemiteSam",
        email: "yosemiteSam@email.com",
        password: "password123",
        Age: 28,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "15",
        exerciseSets: "20",
        ExerciseId: 007
    },
    {
        userId: 1009,
        username: "sylvesterCat",
        email: "sylvesterCat@email.com",
        password: "password123",
        Age: 29,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "15",
        exerciseSets: "20",
        ExerciseId: 007
    },
    {
        userId: 1010,
        username: "speedyGonzales",
        email: "speedyGonzales@email.com",
        password: "password123",
        Age: 29,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "15",
        exerciseSets: "20",
        ExerciseId: 010
    },
    {
        userId: 1011,
        username: "roadRunner",
        email: "roadRunner@email.com",
        password: "password123",
        Age: 26,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "12",
        exerciseSets: "20",
        ExerciseId: 011
    },
    {
        userId: 1012,
        username: "wileCoyote",
        email: "wileCoyote@email.com",
        password: "password123",
        Age: 20,
        Gender: "Male",
        Height: "6.0 ft",
        Weight: "140",
        exerciseTime: "13:00",
        exerciseReps: "15",
        exerciseSets: "20",
        ExerciseId: 012
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;