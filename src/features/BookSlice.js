
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { booksData } from "../utils/BookData";


// Load books from localStorage or fallback to dummy data
const storedBooks = JSON.parse(localStorage.getItem("books")) || [];



// Load books safely from localStorage
const initialState = storedBooks?.length > 0 ? storedBooks : booksData;
localStorage.setItem('books', JSON.stringify(initialState) )

// console.log(initialState);



const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { id: uuidv4(), ...action.payload };
      state.push(newBook);
      localStorage.setItem("books", JSON.stringify(state));
      

    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
