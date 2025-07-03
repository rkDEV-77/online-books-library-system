
import './App.css'
import Footer from './components/Footer'
// import BookLists from './components/BookLists'
// import Search from './components/Search'
// import { books } from '../src/utils/Data'
// import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddBook from './components/AddBook'
// import SearchBookList from './components/SearchBookList'


function App() {
      // const [filterBooks, setFilterBooks] = useState(books)
      // // console.log(filterBooks);
      
  

  return (
    // <div className='w-screen h-full bg-pink-200 md:h-screen sm:h-full'>
    <div>
      {/* <Header />
      <Search setFilterBook={setFilterBooks} />
     <BookLists filterBooks={filterBooks} setFilterBook={setFilterBooks} /> */}

     <Header />
     {/* <HomePage /> */}
     <Outlet />
     <Footer />
     {/* <AddBook /> */}


    </div>
  )
}

export default App
