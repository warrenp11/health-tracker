const sequelize = require("../config/connection");
const { User, Activity, Exercise } = require("../models");

let userdata = [{
        username: "bugsBunny",
        age: 20,
        gender: "Male",
        height: "6.0 ft",
        weight: "140",
        email: "bugsBunny@email.com",
        password: "password123",
    },
    {
        username: "daffyDuck",
        age: 25,
        gender: "Male",
        height: "5.8 ft",
        weight: "200",
        email: "daffyDuck@email.com",
        password: "password123",
    },
    {
        username: "elmerFudd",
        age: 40,
        gender: "Male",
        height: "6.1 ft",
        weight: "180",
        email: "elmerFudd@email.com",
        password: "password123",
    },
    {
        username: "foghornLeghorn",
        age: 22,
        gender: "Male",
        height: "5.0 ft",
        weight: "120",
        email: "foghornLeghorn@email.com",
        password: "password123",
    },
    {
        username: "porkyPig",
        age: 23,
        gender: "Male",
        height: "6.0 ft",
        weight: "160",
        email: "porkyPig@email.com",
        password: "password123",
    },
    {
        username: "marvinMartian",
        age: 30,
        gender: "Male",
        height: "5.6 ft",
        weight: "140",
        email: "marvinMartian@email.com",
        password: "password123",
    },
    {
        username: "tweetyBird",
        age: 50,
        gender: "Male",
        height: "6.0 ft",
        weight: "140",
        email: "tweetyBird@email.com",
        password: "password123",
    },
    {
        username: "tazDevil",
        age: 60,
        gender: "Male",
        height: "5.0 ft",
        weight: "150",
        email: "tazDevil@email.com",
        password: "password123",
    },
    {
        username: "yosemiteSam",
        age: 28,
        gender: "Male",
        height: "6.0 ft",
        weight: "140",
        email: "yosemiteSam@email.com",
        password: "password123",
    },
    {
        username: "sylvesterCat",
        age: 29,
        gender: "Male",
        height: "6.0 ft",
        weight: "140",
        email: "sylvesterCat@email.com",
        password: "password123",
    },
    {
        username: "speedyGonzales",
        age: 29,
        gender: "Male",
        height: "6.0 ft",
        weight: "140",
        email: "speedyGonzales@email.com",
        password: "password123",
    },
    {
        username: "roadRunner",
        age: 26,
        gender: "Male",
        height: "6.0 ft",
        weight: "140",
        email: "roadRunner@email.com",
        password: "password123",
    },
    {
        username: "wileCoyote",
        age: 20,
        gender: "Male",
        height: "6.0 ft",
        weight: "140",
        email: "wileCoyote@email.com",
        password: "password123",
    }
];

// userdata = userdata.map(user => {
//     // user.get({plain: true})
//     console.log(user)
//     user = user.get({ plain: true })
// })

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;