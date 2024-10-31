import { FastifyInstance } from "fastify";

async function authRoutes(app: FastifyInstance){
  app.post("/register", async (request, reply) => {
    
  });
  
  app.post('/login', async (request, reply) => {
    
  });
}

export default authRoutes;