import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyError,
} from "fastify";

const server: FastifyInstance = fastify();

server.get("/ping", async (request: FastifyRequest, reply: FastifyReply) => {
  return "pong";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
