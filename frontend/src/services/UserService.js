import axios from "axios";

class UserService {
  constructor() {
    this.http = axios.create({ baseURL: "/api/v1/users" });
  }

  async getUsers() {
    return this.http.get("/");
  }

  async getUserById(id) {
    return this.http.get(`/${id}`);
  }

  async createUser(user) {
    return this.http.post("/create", user);
  }

  async updateUser(id, user) {
    return this.http.put(`/update/${id}`, user);
  }

  async deleteUser(id) {
    return this.http.delete(`/delete/${Number(id)}`);
  }
}

export default new UserService();