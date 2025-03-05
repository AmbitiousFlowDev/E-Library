import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/UserService"

const fetchUserById = createAsyncThunk(
  "user/fetchUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await UserService.getUserById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default fetchUserById;