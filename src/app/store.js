
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/BookSlice";


const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
