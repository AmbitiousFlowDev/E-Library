import axios from "axios";

class BookService
{
    constructor()
    {
        this.http = axios.create({baseURL : "/api/v1/books"});
    }
    async getAllBooks()
    {
        return this.http.get("/")
    }
    async getTopBooks()
    {
        return this.http.get("/topBooks")
    }
    async getLatestBooks()
    {
        return this.http.get("/latest")
    }
    async getBooksByCategory(category)
    {
        return this.http.get(`/category=${category}`)
    }
}

export default new BookService();