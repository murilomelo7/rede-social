import { FastifyRequestType, FastifyReplyType } from "fastify/types/type-provider";
import usersService from "../services/users.service";


class UsersController {

  constructor() {
    this.usersService = new usersService();
  }

  async register(request: FastifyRequestType, reply: FastifyReplyType) {
    try {
      const data = request.body;

      const user = await usersService.create(data);


    } catch (error) {
      
    }
  }


}

export default new UsersController();