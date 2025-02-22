import CategoryReducer    from "../features/category/CategoryReducer";
import BookReducer        from "../features/book/BookReducer"
import AuthReducer        from "../features/auth/AuthReducer";

import { configureStore } from "@reduxjs/toolkit";
import BorrowRecordReducer from "../features/borrowRecord/BorrowRecordReducer.js";

const store = configureStore({
    reducer : {
        categories : CategoryReducer,
        books : BookReducer,
        auth  : AuthReducer,
        borrowRecords : BorrowRecordReducer,
    }
})

export default store;