class UserService extends ApiService{

  async login(data){
    return await this.api.post('/login', data);
  }

  async create(){

  }

  async update(){

  }

  async findById(){

  }

  async findAll(){

  }
}

export default new UserService();