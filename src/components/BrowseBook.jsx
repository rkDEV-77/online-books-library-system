import React, { useEffect, useState } from "react";
// import { books } from "../utils/BookData";
import { Link, useParams } from "react-router-dom";
import Search from "./Search";
// import { UpdateLocalStorage } from "../utils/UpdateLocalStorage";


const BrowseBook = () => {
  // const [search, setSearch] = useState([]);
  // const [books, setBooks] = useState([]);
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  let books = JSON.parse(localStorage.getItem('books'))
  // console.log(books);


  // Extract unique categories
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  // Filter books by selected category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);
  // console.log(filteredBooks);

  // console.log(search);

  return (
    <div className="mt-[100px] w-screen h-[100%]">
      <Search  />
      {/* <ul>
        <li>{search.title}</li>
      </ul> */}

      <h1 className="text-center text-2xl font-bold p-3">Total <span className="text-pink-700">"{books.length}"</span> Books in Library. </h1>

      {/* Category Filter */}
      <div className="p-3 text-center">
        <label className="text-xl font-bold m-3">
          Filter by Category: (<span className="text-cyan-700">{filteredBooks.length}</span>)
        </label>
        {/* <p>({filteredBooks.length})</p> */}
        <select
          className="border p-1 m-2 w-[50%] md:w-[30%]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {/* List all category in select input option */}
          {categories.map((cat, id) => (
            <option className=" bg-cyan-300  scroll-auto w-[70%]   " key={id} value={cat} >
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Filtered Book List */}
      <ul className="flex flex-wrap justify-center items-center m-3 p-3">
      
        {filteredBooks.map((book) => {
       
          return (
            // List all boks and take to /books/book.id page on click
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="w-[90%] sm:w-[43%] md:w-[23%] lg:w-[19%] "
            >
              <li
                key={book.id}
                className="shadow-md  text-gray-900 bg-cyan-300 text-center hover:bg-pink-400 hover:text-white/90 hover:scale-105 transition duration-300 m-2  p-3"
              >
                <span className="font-bold">{book.title}</span> <br></br> (
                {book.category})
              </li>
            </Link>
          );
        })}
      
      </ul>
    </div>
  );
};

export default BrowseBook;
