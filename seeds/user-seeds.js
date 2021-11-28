const sequelize = require("../config/connection");
const { User, Activity, Exercise } = require("../models");

let userdata = [{
        username: "bugsBunny",
        email: "bugsBunny@email.com",
        password: "password123",
        age: 20,
        gender: "Male",
        height: "6.0 ft",
        weight: "140"
    },
    {
        username: "daffyDuck",
        email: "daffyDuck@email.com",
        password: "password123",
        age: 25,
        gender: "Male",
        height: "5.8 ft",
        weight: "200"
    },
    {
        username: "elmerFudd",
        email: "elmerFudd@email.com",
        password: "password123",
        age: 40,
        gender: "Male",
        height: "6.1 ft",
        weight: "180"
    },
    {
        username: "foghornLeghorn",
        email: "foghornLeghorn@email.com",
        password: "password123",
        age: 22,
        gender: "Male",
        height: "5.0 ft",
        weight: "120"
    },
    {
        username: "porkyPig",
        email: "porkyPig@email.com",
        password: "password123",
        age: 23,
        gender: "Male",
        height: "6.0 ft",
        weight: "160"
    },
    {
        username: "marvinMartian",
        email: "marvinMartian@email.com",
        password: "password123",
        age: 30,
        gender: "Male",
        height: "5.6 ft",
        weight: "140"
    },
    {
        username: "tweetyBird",
        email: "tweetyBird@email.com",
        password: "password123",
        age: 50,
        gender: "Male",
        height: "6.0 ft",
        weight: "140"
    },
    {
        username: "tazDevil",
        email: "tazDevil@email.com",
        password: "password123",
        age: 60,
        gender: "Male",
        height: "5.0 ft",
        weight: "150"
    },
    {
        username: "yosemiteSam",
        email: "yosemiteSam@email.com",
        password: "password123",
        age: 28,
        gender: "Male",
        height: "6.0 ft",
        weight: "140"
    },
    {
        username: "sylvesterCat",
        email: "sylvesterCat@email.com",
        password: "password123",
        age: 29,
        gender: "Male",
        height: "6.0 ft",
        weight: "140"
    },
    {
        username: "speedyGonzales",
        email: "speedyGonzales@email.com",
        password: "password123",
        age: 29,
        gender: "Male",
        height: "6.0 ft",
        weight: "140"
    },
    {
        username: "roadRunner",
        email: "roadRunner@email.com",
        password: "password123",
        age: 26,
        gender: "Male",
        height: "6.0 ft",
        weight: "140"
    },
    {
        username: "wileCoyote",
        email: "wileCoyote@email.com",
        password: "password123",
        age: 20,
        gender: "Male",
        height: "6.0 ft",
        weight: "140"
    }
];

// userdata = userdata.map(user => {
//     // user.get({plain: true})
//     console.log(user)
//     user = user.get({ plain: true })
// })

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;