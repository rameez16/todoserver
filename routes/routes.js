const handlers = require("../controllers/controllers");


function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/get", handlers.getTodo);

  // Add item
  fastify.post("/post", handlers.createTodo);

  // Delete item
  fastify.delete("/delete/:id", handlers.deleteTodo);

  // Update item
  fastify.put("/update/:id", handlers.updateTodo);

  done();
}

module.exports = itemRoutes;

