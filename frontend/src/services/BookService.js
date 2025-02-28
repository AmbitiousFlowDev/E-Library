import axios from "axios";

class BookService
{
    constructor()
    {
        this.http = axios.create({baseURL : "/api/v1/books"});
    }
    async getAllBooks(page , size , sortBy)
    {
        return this.http.get(`/?page=${page}&size=${size}&sortBy=${sortBy}`);
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
    async getBook(id)
    {
        return this.http.get(`/${Number(id)}`);
    }
}

export default new BookService();