import CategoryReducer from "../features/category/CategoryReducer";
import BookReducer from "../features/book/BookReducer";
import AuthReducer from "../features/auth/AuthReducer";
import UserReducer from "../features/user/UserReducer";

import { configureStore } from "@reduxjs/toolkit";
import BorrowRecordReducer from "../features/borrowRecord/BorrowRecordReducer.js";

const store = configureStore({
  reducer: {
    categories: CategoryReducer,
    books: BookReducer,
    auth: AuthReducer,
    borrowRecords: BorrowRecordReducer,
    users: UserReducer,
  },
});

export default store;
