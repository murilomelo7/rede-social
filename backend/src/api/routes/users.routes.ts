import { FastifyInstance } from "fastify";
import usersController from "../controllers/users.controller";

async function usersRoutes(app: FastifyInstance){

  app.post("/register", {
    handler: usersController.register
  })

  app.get("/", async (request, reply) => {
  });
}

export default usersRoutes;