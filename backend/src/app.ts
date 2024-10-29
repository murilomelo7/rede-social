import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyError,
} from "fastify";


const environment = "development";


const server: FastifyInstance = fastify();

const loggerConfig = () => {
  if (environment === "development") {
    return {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    };
  } else {
    true;
  }
};

server.get("/login", async (request: FastifyRequest, reply: FastifyReply) => {
  
});

server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});