import React, { useState } from "react";
// import { Link } from "react-router-dom";
const BookCard = (props) => {
  const [show, setShow] = useState("");

  let book = props.book;
  // console.log(typeof(book));
  // console.log(book.id);
  // console.log(book);

  // function handleClick(e) {
  //   console.log(e.target);

  //   // props.setFilterBooks();
  // }

  function handleDescription(e) {
    // console.log('clicked');
    e.preventDefault()

    setShow(!show);
  }
      // className="w-[91%]  bg-cyan-200 p-2 m-2 shadow-xl sm:w-[45%] md:w-[30%] lg:w-[23%] transform hover:scale-105 transition duration-300 cursor-pointer"

  return (
    <div className="">
      <img
        src={book.coverImage}
        alt=""
        width="300px"
        height="250px"
        className="bg-gray-300 object-fill w-[97%] h-[230px]  m-auto  p-2 shadow-sm"
      />
      {/* sm:-[40%] md:w-[30%]  */}
      <div className="bg-gray-300 w-[97%]  text-xs my-1 m-auto text-center p-2 shadow-sm">
        <h2 className="text-sm">
          Title: <strong>{book.title}</strong>
        </h2>
        <h2 className="text-sm">
          Auther: <strong>{book.author}</strong>
        </h2>
        <p>
          Published Date: <strong>{book.publishedDate}</strong>
        </p>
        <p>
          Pages: <strong> {book.pages}</strong>
        </p>
        {show && (
          <p className="text-sm text-wrap text-cyan-700 ">
            Description: {book.description}
          </p>
        )}
        <button
          className="bg-cyan-300 w-[60%] text-sm px-3 py-1 m-1 text-gray-700 hover:bg-gray-500 hover:text-white rounded-md shadow-lg font-bold border-gray-400 border-1  transition duration-300 cursor-pointer"
          onClick={(e)=>handleDescription(e)}
        >
          {show ? "Hide" : "show"} Descp.
        </button>
      </div>
    </div>
    
  );
};

export default BookCard;
