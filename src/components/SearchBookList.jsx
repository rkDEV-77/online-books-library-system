import React, { useState } from 'react'
import Search from './Search'
import BookLists from './BookLists'
import { books } from '../utils/Data'



const SearchBookList = () => {

  const [filterBooks, setFilterBooks] = useState(books)
      // console.log(filterBooks);


  return (
    <div>
       <Search setFilterBook={setFilterBooks} />
     <BookLists filterBooks={filterBooks} setFilterBook={setFilterBooks} /> 
    </div>
  )
}

export default SearchBookList
