import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000", // URL da API
    });

    this.api.interceptors.request.use(function (config) {
      config.headers["Access-Control-Allow-Origin"] = "http://localhost:5173";
      config.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
      config.headers["Access-Control-Allow-Headers"] =
        "Content-Type, Authorization";
      return config;
    });
  }

  async get(url) {
    try {
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer GET:", error);
      throw error;
    }
  }

  async post(url, data) {
    try {
      const response = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer POST:", error);
      throw error;
    }
  }

  async put(url, data) {
    try {
      const response = await this.api.put(url, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer PUT:", error);
      throw error;
    }
  }

  async delete(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer DELETE:", error);
      throw error;
    }
  }
}

export default new ApiService();
