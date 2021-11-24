const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
    {
      username: "bugsBunny",
      email: "bugsBunny@email.com",
      password: "password123",
    },
    {
      username: "daffyDuck",
      email: "daffyDuck@email.com",
      password: "password123",
    },
    {
      username: "elmerFudd",
      email: "elmerFudd@email.com",
      password: "password123",
    },
    {
      username: "foghornLeghorn",
      email: "foghornLeghorn@email.com",
      password: "password123",
    },
    {
      username: "porkyPig",
      email: "porkyPig@email.com",
      password: "password123",
    },
    {
      username: "marvinMartian",
      email: "marvinMartian@email.com",
      password: "password123",
    },
    {
      username: "tweetyBird",
      email: "tweetyBird@email.com",
      password: "password123",
    },
    {
      username: "tazDevil",
      email: "tazDevil@email.com",
      password: "password123",
    },
    {
      username: "yosemiteSam",
      email: "yosemiteSam@email.com",
      password: "password123",
    },
    {
      username: "sylvesterCat",
      email: "sylvesterCat@email.com",
      password: "password123",
    },
    {
      username: "speedyGonzales",
      email: "speedyGonzales@email.com",
      password: "password123",
    },
    {
      username: "roadRunner",
      email: "roadRunner@email.com",
      password: "password123",
    },
    {
      username: "wileCoyote",
      email: "wileCoyote@email.com",
      password: "password123",
    },
  ];
  
  const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });
  
  module.exports = seedUsers;