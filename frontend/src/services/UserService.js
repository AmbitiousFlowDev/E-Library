import axios from "axios";

class UserService {
  constructor() {
    this.http = axios.create({ baseURL: "/api/v1/users" });
  }
  async getUsers() {
    return this.http.get("/");
  }
}

export default new UserService();
