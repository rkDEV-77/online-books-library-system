
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  books: JSON.parse(localStorage.getItem("books")) || [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { id: uuidv4(), ...action.payload };
      state.books.push(newBook);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
