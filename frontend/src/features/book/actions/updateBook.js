const updateBook = createAsyncThunk("book/updateBook", async ({ id, data }) => {
  const response = await BookService.updateBook(id, data);
  return response.data;
});

export default updateBook;
