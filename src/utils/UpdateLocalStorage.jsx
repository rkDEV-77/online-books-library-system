import { useEffect, useState } from "react";
import { books } from "./BookData";

  // localStorage.setItem('books', JSON.stringify(books) )

export const UpdateLocalStorage = () => {
  const [books, setBooks] = useState( JSON.parse(localStorage.getItem('books')) || []);
 
 
    useEffect(() => {
     const stored = JSON.parse(localStorage.getItem('books')) || [];
     setBooks(stored);
   }, []);
 
  //  localStorage.setItem('books', JSON.stringify(books) )

  //  console.log(books);
   return books
};
