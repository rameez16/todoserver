const mysql = require("mysql2");
require("dotenv").config();


const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.HOST,
    user: process.env.USER1,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});


module.exports = knex;
