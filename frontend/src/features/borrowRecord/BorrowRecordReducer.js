import {createSlice} from "@reduxjs/toolkit";
import addBorrowRecord from "./actions/addBorrowRecord.js";


const borrowRecordSlice = createSlice({
    name: "borrowRecord",
    initialState: {
        record: null,
        loading: false,
        error: null,
        records : [],
        loadingRecords : false,
        errorRecords : null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addBorrowRecord.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addBorrowRecord.fulfilled, (state, action) => {
                state.loading = false;
                state.record = action.payload;
            })
            .addCase(addBorrowRecord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

const BorrowRecordReducer = borrowRecordSlice.reducer;
export default BorrowRecordReducer;