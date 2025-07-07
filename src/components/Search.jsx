import { useState } from "react";
// import { books } from '../utils/Data'
// import { books } from "../utils/BookData";
import { Link } from "react-router-dom";
 

const Search = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);

  let books = JSON.parse(localStorage.getItem('books'))
  // console.log(input);
  // console.log(search);
 

  const handleInput = (inputValue) => {
    
    setInput(inputValue);
    // console.log(inputValue);

    let filteredBook = books.filter((book) =>
      book.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setSearch(filteredBook);
  };

  const handleSearch = () => {
    // Use event.PreventDefault with onSubmit not with onClick
    // e.preventDefault()
    // console.log('input', input);
    // let filteredBook = books.filter((book) =>
    //   book.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    // );
    // console.log(filteredBook);

    // setSearch(filteredBook);
    setInput("");
  };

  return (
    <>
      <div className="text-center">
        <label id="search" className="text-2xl md:text-3xl font-bold text-gray-700">
        Search Books
      </label>
      </div>
      <div className="search w-screen h-[100px]  flex justify-center items-center md:flex-row     shadow-md ">
        {/* <div className=" w-[90%] text-center"> */}
          <input
            type="text"
            id="search"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Search Book"
            // className="w-[70%] h-8 md:w-[40%] md:h-10 bg-white p-1 px-3 rounded-md shadow-md"
            className="w-[50%] md:w-[60%] h-9 md:h-10  bg-white p-3 rounded-l-md shadow-md border-2 border-gray-50 focus:border-gray-300 focus:outline-none"
          />

          {/* <button
            className="w-[30%] h-8  md:h-10 font-bold text-md bg-gray-300 hover:bg-pink-300 text-gray-600 hover:text-white rounded-md  ml-1 shadow-md transition duration-300 cursor-pointer"
            //   onClick={(e)=>handleSearch(e)}
            onClick={handleSearch}
          >
            Search
          </button> */}
        {/* </div> */}
        <button
            className="w-[17%] md:w-[13%] h-9  md:h-10 font-bold text-md bg-gray-300 hover:bg-pink-300 text-gray-600 hover:text-white rounded-r-md  shadow-md transition duration-300 cursor-pointer"
            //   onClick={(e)=>handleSearch(e)}
            onClick={handleSearch}
          >
            Reset
          </button>
      </div>
      {input && (
        <div className="w-[67%] md:w-[73%]   flex flex-col items-center bg-blue-300 -mt-[34px] md:-mt-[30px]  h-[130px] p-3 overflow-auto rounded-b-md m-auto">
          {search.length == 0 && <p>No Book Found.</p>}
          {search &&
            search.map((item, index) => {
              return (
                <Link
                  to={`/book/${item.id}`}
                  className=" w-[97%] bg-cyan-300 m-1 p-2  hover:bg-cyan-400 hover:text-white hover:scale-102 transition duration-300"
                  key={item.id}
                >
                  {item.title}
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Search;
