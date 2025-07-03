import React from "react";
// import { books } from "../utils/BookData.js";
import { Link } from "react-router-dom";
import BookCard from "./BookCard.jsx";

const PopularBooks = ({books}) => {
  let popular_books = books.filter((book) => (
    book.isPopular 
  ))
  // console.log(popular_books);
  
  return (
    <>

    {/* // <div>
    //   <h1>Popular Category of Books</h1>
    //   { books.map((book) => (

    // ))}
    // </div> */}
     <h1 className="text-xl md:text-2xl font-bold text-center bg-cyan-300 p-3">POPULAR BOOKS ({popular_books.length})</h1>
    <div className="flex flex-wrap justify-center items-center my-7 ">

      {popular_books.map((book) => (

         <Link key={book.id} to={`/book/${book.id}`} className="w-[91%]  bg-cyan-200 p-2 m-2 shadow-xl sm:w-[45%] md:w-[30%] lg:w-[23%] transform hover:scale-105 transition duration-300 cursor-pointer">
          <BookCard key={book.id}  book={book} />
        </Link>





        // <div key={book.id} className="border flex flex-col w-[91%] sm:w-[43%] md:w-[21%] p-1 m-3 h-[310px] bg-cyan-300 hover:scale-105 transition duration-300">
        // {/* // <div key={book.id}>{book.title}</div> */}
        // <img
        //   src={book.coverImage}
        //   alt="book-cover"
        //   width="300px"
        //   height="250px"
        //   className="bg-gray-300 object-fill w-[98%] md:w-[97%] h-[170px] sm:h-[120] md:h-[140px] m-auto mb-1  p-2 shadow-sm "
        // />

        
        // <div className="bg-gray-300 w-[98%] md:w-[97%] h-[170px] md:h-[140px] flex flex-col justify-center items-center  text-sm    text-center m-auto  p-1 shadow-sm ">
        //   <h2 className="p-1">
        //     Title: <strong>{book.title}</strong>
        //   </h2>
        //   <h2 className="p-1">
        //     Auther: <strong>{book.author}</strong>
        //   </h2>
        //   <p>
        //     Published Date:{" "}
        //     <strong className="text-sm">{book.publishedDate}</strong>
        //   </p>
        //   {/* <p>
        //     Pages: <strong className="text-sm"> {book.pages}</strong>
        //   </p> */}

        //   {/* <p className=" text-wrap text-cyan-700 ">
        //     Description: {book.description}
        //   </p> */}
        // </div>
        // </div>
      ))}
    </div>
    </>
    
  );
};

export default PopularBooks;
