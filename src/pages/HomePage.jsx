import React, { useEffect, useState } from 'react';
// import{ books} from "../utils/BookData.js"
import BookCategory from '../components/BookCategory.jsx';
import PopularBooks from '../components/PopularBooks.jsx';
import { UpdateLocalStorage } from '../utils/UpdateLocalStorage.jsx';


// localStorage.setItem('books', JSON.stringify(books) )
const HomePage = () => {
  const books = UpdateLocalStorage()
  //  const [books, setBooks] = useState([]);


  //  useEffect(() => {
  //   const stored = JSON.parse(localStorage.getItem('books')) || [];
  //   setBooks(stored);
  // }, []);

  // console.log(books);
  
     
      //  localStorage.setItem('books', JSON.stringify(books));  // set your value here
      // const storedBooks = JSON.parse(localStorage.getItem('books'));
      // console.log(storedBooks);
      // console.log(books);
     
      
      

  //  useEffect(() => {
  //   // This runs once when component mounts
  //   localStorage.setItem('books', JSON.stringify(books));  // set your value here
  // }, []);


    // console.log(books);
    // const categories = books.filter((book) =>(
    //    console.log(book)
       
    // ))
    // console.log(categories);
    
    
  return (
    <div className='mt-[100px]'>
      
      <BookCategory books={books} />
      <PopularBooks books={books} />

    </div>
  )
}

export default HomePage
