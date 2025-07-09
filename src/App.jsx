
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
// 



function App() {
     

  return (
    
    <div>
      {/* <Header />
      <Search setFilterBook={setFilterBooks} />
     <BookLists filterBooks={filterBooks} setFilterBook={setFilterBooks} /> */}

     <Header />
     {/* <HomePage /> */}
     <Outlet />
     <Footer />

    </div>
  )
}

export default App
