import axios from "axios";

class BorrowRecordService
{
    constructor()
    {
        this.http = axios.create({baseURL : "/api/v1/borrowRecords"})
    }
    async getAllBorrowRecords()
    {
        return this.http.get("/")
    }
    async getBorrowRecordById(id)
    {
        return this.http.get("/{id}")
    }
    async getBorrowRecordByUserId(id)
    {
        return this.http.get("/user={id}")
    }
    async addBorrowRecord(borrowRecord)
    {
        return this.http.post("/create" , borrowRecord)
    }
}

export default new BorrowRecordService();