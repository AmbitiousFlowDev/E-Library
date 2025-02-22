import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "../../../services/BookService";


const fetchBooks = createAsyncThunk('book/fetchBooks', async (_ , {rejectWithValue}) => {
    try
    {
        const response = await BookService.getAllBooks();
        return response.data;
    }
    catch (error)
    {
        rejectWithValue(error.response?.data || error.message);
    }
})

export default fetchBooks;