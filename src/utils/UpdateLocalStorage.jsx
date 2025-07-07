
import { useEffect, useState } from "react";
import { booksData } from "./BookData";

// localStorage.setItem('books', JSON.stringify(booksData) )

export const UpdateLocalStorage = () => {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || []);
  // console.log(books);
  

  // Load books from localStorage or initialize with default data
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));

    if (storedBooks && storedBooks.length > 0) {
      setBooks(storedBooks);
    } else {
      setBooks(booksData);
      localStorage.setItem('books', JSON.stringify(booksData));
    }
  }, []);

  // Update localStorage whenever `books` state changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return [books, setBooks]; // Return both state and setter
};









// /////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { booksData } from "./BookData";

//   localStorage.setItem('books', JSON.stringify(booksData) )

// export const UpdateLocalStorage = () => {
//   const [books, setBooks] =  useState(JSON.parse(localStorage.getItem('books')) || []);
//   console.log(books);
//   console.log(booksData);
  
   
//     useEffect(() => {
//      const stored = JSON.parse(localStorage.getItem('books')) || [];
//      setBooks(stored);
//    }, []);
 
//   //  localStorage.setItem('books', JSON.stringify(books) )

//   //  console.log(books);
//    return books
// };
