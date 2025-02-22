import fetchBooks       from "./actions/fetchBooks";
import fetchLatestBooks from "./actions/fetchLatestBooks"
import fetchTopBooks    from "./actions/fetchTopBooks"
import { createSlice }  from "@reduxjs/toolkit"


const BookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        latestBooks: [],
        topBooks: [],
        loadingBooks: false,
        loadingLatestBooks: false,
        loadingTopBooks: false,
        errorBooks: null,
        errorLatestBooks: null,
        errorTopBooks: null,
    },
    reducers: {},
    extraReducers: (builder) => {
     
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.loadingBooks = true;
            state.errorBooks = null;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loadingBooks = false;
            state.books = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loadingBooks = false;
            state.errorBooks = action.payload;
        });


        builder.addCase(fetchLatestBooks.pending, (state, action) => {
            state.loadingLatestBooks = true;
            state.errorLatestBooks = null;
        });
        builder.addCase(fetchLatestBooks.fulfilled, (state, action) => {
            state.loadingLatestBooks = false;
            state.latestBooks = action.payload;
        });
        builder.addCase(fetchLatestBooks.rejected, (state, action) => {
            state.loadingLatestBooks = false;
            state.errorLatestBooks = action.payload;
        });


        builder.addCase(fetchTopBooks.pending, (state, action) => {
            state.loadingTopBooks = true;
            state.errorTopBooks = null;
        });
        builder.addCase(fetchTopBooks.fulfilled, (state, action) => {
            state.loadingTopBooks = false;
            state.topBooks = action.payload;
        });
        builder.addCase(fetchTopBooks.rejected, (state, action) => {
            state.loadingTopBooks = false;
            state.errorTopBooks = action.payload;
        });
    }
});


export default BookSlice.reducer;