import React, { useEffect, useState } from 'react';
// import{ books} from "../utils/BookData.js"
import BookCategory from '../components/BookCategory.jsx';
import PopularBooks from '../components/PopularBooks.jsx';
import { UpdateLocalStorage } from '../utils/UpdateLocalStorage.jsx';


// localStorage.setItem('books', JSON.stringify(books) )
const HomePage = () => {

  // Fetch Book data Using UpdateLocatStorage file
  const [books, setBooks] = UpdateLocalStorage()
 


    
  return (
    <div className='mt-[100px]'>
      
      <BookCategory books={books} />
      <PopularBooks books={books} />

    </div>
  )
}

export default HomePage
