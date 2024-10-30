import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyError,
} from "fastify";




const app: FastifyInstance = fastify();


app.get("/login", async (request: FastifyRequest, reply: FastifyReply) => {
  
});



export default app;