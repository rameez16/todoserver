/* 
require("dotenv").config();
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.HOST,
    user: process.env.USER1,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
}); */

const knex = require("../config/db");

//get all the tasks

exports.getTodo = (req, reply) => {
  knex
    .from("todoitems")
    .select("*")
    .then((rows) => {
      reply.send(rows);
      for (row of rows) {
        console.log(`${row["id"]} ${row["todo"]} `);
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  /*  let sql = "SELECT * FROM todoitems;";

  db.query(sql, (err, result) => {
    if (err) throw err;
    reply.send(result);
  }); */
};

//create a task

exports.createTodo = (req, reply) => {
  const todo = req.body.todo;
  /* let sql=`INSERT INTO todoitems(todo) values ("${todo}");`  */

  knex("todoitems")
    .insert({ todo: todo })
    .then(function (data) {
      console.log("data ins");

      reply.send(data);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  /*   db.query(sql,(err,result)=>{

        if(err) throw err;
        reply.send(result)
    })  */
};

//update a task

exports.updateTodo = (req, reply) => {
  const { id } = req.params;
  const { todo } = req.body;
  /*   let sql = `UPDATE todoitems SET todo = '${todo}' WHERE id = ${id};`; */
  knex("todoitems")
    .where({ id: id })
    .update({ todo: todo })
    .then(function (data) {
      reply.send(data);
    })
    .catch(function (err) {
      console.log(err);
    });
  /*  db.query(sql, (err, result) => {
    if (err) throw err;
    reply.send(result);
  }); */
};

//delete a task

exports.deleteTodo = (req, reply) => {
  const { id } = req.params;

  knex("todoitems")
    .where({ id: id })
    .del()
    .then(function () {
      console.log("data deleted successfully");
      reply.send(id);
    })
    .catch(function (err) {
      console.log(err);
    });

  /*  let sql = `DELETE FROM todoitems  WHERE id = ${id};`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    reply.send(result);
  }); */
};
