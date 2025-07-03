import React from 'react'

const BooksByCategory = ({book}) => {
    // console.log(book.title);
    
  return (
    <div className=" w-[93%] md:w-[83%] h-[50%] bg-cyan-200 flex flex-col md:flex-row md:flex justify-center items-center  text-sm md:text-lg p-2 mt-[100px] transform hover:scale-105 transition duration-300 cursor-pointer mx-auto ">

        <img
        src={book.coverImage}
        alt="book-cover"
        width="300px"
        height="250px"
        className="bg-gray-300 object-fill w-[98%] md:w-[45%] h-[300px] md:h-[400px] m-auto  p-2 shadow-sm"
      />
      
     
      {/* sm:-[40%] md:w-[30%]  */}
      <div className="bg-gray-300 w-[98%] md:w-[50%] h-[170px] md:h-[400px] flex flex-col justify-center items-center  text-sm md:text-lg   text-center m-auto  p-2 shadow-sm ">
        <h2 className="p-1">
          Title: <strong>{book.title}</strong>
        </h2>
        <h2 className="p-1">
          Auther: <strong>{book.author}</strong>
        </h2>
        <p>
          Published Date: <strong className="text-sm">{book.publishedDate}</strong>
        </p>
        <p>
          Pages: <strong className="text-sm"> {book.pages}</strong>
        </p>
       
          <p className=" text-wrap text-cyan-700 ">
            Description: {book.description}
          </p>
        
      </div>
   
    </div>
  )
}

export default BooksByCategory
