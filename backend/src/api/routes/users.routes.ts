import { FastifyInstance } from "fastify";


async function usersRoutes(app: FastifyInstance){
  app.get("/", async (request, reply) => {
  });
}

export default usersRoutes;