import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyError,
} from "fastify";


import usersRoutes from "./api/routes/users.routes";


const app: FastifyInstance = fastify();

app.register(usersRoutes, { prefix: "/users" });

export default app;