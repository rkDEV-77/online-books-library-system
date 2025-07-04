import React from 'react'
// import{ books} from "../utils/BookData.js"
import { Link } from 'react-router-dom'


const BookCategory = ({books}) => {
    let categories = books.map((book)=>(
             book.category
        ))

        // console.log(books);
        

        // console.log(categories);
    let single_category = [...new Set(categories)]
    // console.log(single_category);
    
        

  return (
    <div>
      <h1 className='text-xl md:text-2xl font-bold text-center bg-cyan-300 p-3 '>Books by Categories (<span className='text-cyan-700'>{single_category.length}</span>)</h1>
      <ul className=' w-screen my-5 flex flex-wrap justify-center items-center'>
        {single_category.map(category =>{
          const cat = category.trim().toLocaleLowerCase();
          return <Link key={Date.now()+category} to={`/browse_book/${cat}`} className='w-[70%] sm:w-[43%] md:w-[23%] lg:w-[19%] '>
            <li key={Date.now()+category} className='   text-gray-800 bg-cyan-300 text-center hover:bg-pink-400 hover:text-white hover:scale-105 transition duration-300 m-2  p-3'>{category}</li>
          </Link>
})}
      </ul>
     
    </div>
  )
}

export default BookCategory
