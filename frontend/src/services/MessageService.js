import axios from "axios";

class MessageService {
  constructor() {
    this.http = axios.create({ baseURL: "/api/v1/messages" });
  }

  async getAllUserMessages(user) {
    return this.http.get(`/user/${Number(user)}`);
  }
}

export default new MessageService();
