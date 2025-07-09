import React, { useState } from 'react'
import Search from './Search'
import BookLists from './BookLists'
import { books } from '../utils/Data'


// made one component for Search and Booklist components to show both at tome
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
