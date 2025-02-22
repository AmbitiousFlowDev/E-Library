import CategoryReducer    from "../features/category/CategoryReducer";
import BookReducer        from "../features/book/BookReducer"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        categories : CategoryReducer,
        books : BookReducer
    }
})

export default store;