const fastify = require("fastify")({ logger: true });

const port = process.env.PORT ;
const host = '0.0.0.0';

//register all the routes

fastify.register(require("fastify-cors"), {
  origin: "*",
  methods: ["POST", "GET", "DELETE", "PUT"],
});

fastify.register(require("./routes/routes"));

//start server
const start = async () => {
  try {
    await fastify.listen(port,host);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
