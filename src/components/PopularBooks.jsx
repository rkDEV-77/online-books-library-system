
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

     <h1 className="text-xl md:text-2xl font-bold text-center bg-cyan-500 p-3">POPULAR BOOKS (<span className="text-pink-700">{popular_books.length}</span>)</h1>
    <div className="flex flex-wrap justify-center items-center my-7 ">

      {popular_books.map((book) => (

         <Link key={book.id} to={`/book/${book.id}`} className=" m-3 shadow-xl w-[97%] sm:w-[45%] md:w-[30%] lg:w-[22%] transform hover:scale-105 transition duration-300 cursor-pointer">
          <BookCard key={book.id}  book={book} />
        </Link>


      ))}
    </div>
    </>
    
  );
};

export default PopularBooks;
