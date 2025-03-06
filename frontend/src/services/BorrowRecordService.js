import axios from "axios";

class BorrowRecordService {
  constructor() {
    this.http = axios.create({ baseURL: "/api/v1/borrowRecords" }); // Use consistent URL format
  }

  async getAllBorrowRecords(page = 0, size = 10, sortBy = "borrowDate") {
    return this.http.get("/", {
      params: { page, size, sortBy },
    });
  }
  async getBorrowRecordById(id) {
    return this.http.get(`/${id}`);
  }

  async getBorrowRecordByUserId(userId) {
    return this.http.get(`/user/${userId}`);
  }

  async createBorrowRecord(borrowRecord) {
    return this.http.post("/create", borrowRecord);
  }

  async updateBorrowRecord(id, borrowRecord) {
    return this.http.put(`/update/${id}`, borrowRecord);
  }

  async deleteBorrowRecord(id) {
    return this.http.delete(`/delete/${id}`);
  }
}

export default new BorrowRecordService();