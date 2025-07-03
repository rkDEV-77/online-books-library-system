import React, { useState } from "react";
// import { books } from "../utils/BookData";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UpdateLocalStorage } from "../utils/UpdateLocalStorage";

const BookDetails = () => {
  const navigate = useNavigate();

  //   const [show, setShow] = useState("");

  const params = useParams();
  // console.log(params.id);
  let books = UpdateLocalStorage()
  // console.log(books);
  

  let bookDetails = books.filter((book) => book.id == params.id);
  // console.log(bookDetails);
  // console.log(books);
  const cat = bookDetails[0].category.trim().toLocaleLowerCase();
  // console.log(cat);

  return (
    <div className=" mt-[100px] w-screen flex flex-col justify-center items-center">


       {/* <button
          className="w-[10%] md:w-[15%] rounded-md p-2 m-7 bg-amber-300 hover:bg-amber-500 font-bold"
          onClick={()=> navigate(-1)}
        >
          Go Back
        </button> */}
   
     
     {/* <div className=" w-[93%] md:w-[83%] h-[50%] bg-cyan-200 flex flex-col md:flex-row md:flex justify-center items-center  text-sm md:text-lg p-2  transform hover:scale-105 transition duration-300 cursor-pointer mx-auto "> */} 

      <div className=" w-[91%] md:w-[83%] h-[50%] bg-cyan-300 flex flex-col md:flex-row md:flex justify-center items-center  text-sm md:text-lg p-2  transform hover:scale-105 transition duration-300 cursor-pointer mx-auto ">
        <img
          src={bookDetails[0].coverImage}
          alt="book-cover"
          width="300px"
          height="250px"
          className="bg-gray-300 object-fill w-[97%] md:w-[45%] h-[300px] md:h-[400px] m-auto mb-1 md:mb-0  p-2 shadow-sm"
        />

        {/* sm:-[40%] md:w-[30%]  */}
        <div className="bg-gray-300 w-[98%] md:w-[50%] h-[270px] md:h-[400px] flex flex-col justify-center items-center  text-sm sm:text-lg md:text-xl   text-center m-auto  p-3 mt-1 md:mb-0 shadow-sm ">
          <h2 className="p-1">
            Title: <strong>{bookDetails[0].title}</strong>
          </h2>
          <h2 className="p-1">
            Auther: <strong>{bookDetails[0].author}</strong>
          </h2>
          <p>
            Category: <strong>{bookDetails[0].category}</strong>
          </p>
          <p className="text-sm">
            Published Date:{" "}
            <strong className="text-sm">{bookDetails[0].publishedDate}</strong>
          </p>
          <p className="text-sm">
            Pages: <strong className="text-sm"> {bookDetails[0].pages}</strong>
          </p>

          <p className="text-sm">
            Ratings:{" "}
            <strong className="text-sm">{bookDetails[0].rating}</strong>
          </p>

          <p className=" text-wrap text-cyan-700 ">
            Description: {bookDetails[0].description}
          </p>
        </div>
      </div>
      
       <button
          className="w-[25%] md:w-[13%] rounded-md p-2 m-7 bg-amber-300 hover:bg-amber-500 font-bold"
          onClick={()=> navigate(-1)}
        >
          Go Back
        </button>
    </div>
  );
};

export default BookDetails;
