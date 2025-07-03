import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/open-book.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    // console.log("show clicked");

    setShow((show) => !show);
  };

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="header  w-screen h-[70px] sm:h-[70px] flex justify-between md:justify-start md:items-center  p-2  fixed top-0 z-11 ">
      <div className="  w-[35%] md:w-[20%] flex justify-center items-center  p-1">
        <Link to="/" className="flex">
          <img
            src={img}
            alt="book-icon"
            className="w-11 h-11 sm:w-13 sm:h-13"
          />
          <h1 className="flex flex-col justify-center items-center font-bold text-md sm:text-xl sm:leading-4 p-1 leading-3 text-cyan-700 hover:text-cyan-400   ">
            <span>Book</span>
            <span>App</span>
          </h1>
        </Link>
      </div>
      <div className=" w-[40%] h-[270px] md:w-[75%] text-center flex flex-col items-center">
        {/* for hamburger */}
        <i
          className="fas fa-hamburger text-2xl border sm:text-3xl p-1 mt-3 text-pink-700"
          onClick={handleShow}
        ></i>
        {/* hamburger navbar */}
        {show && (
          <ul onClick={handleClick} className="hamburger md:hidden w-[87%] sm:w-[77%] text-center  h-[200px] sm:h-[220px] gap-3 mt-3 sm:mt-1  p-3  ml-1 flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center   bg-pink-300 md:bg-transparent   font-bold text-gray-700 sm:text-xl ">
            <Link to="/">
              <li className="hover:text-cyan-300 transition duration-300 ">
                Home
              </li>
            </Link>
            <Link to="/browse_book">
              <li className="hover:text-cyan-300 transition duration-300 ">
                BrowseBook
              </li>
            </Link>
            <Link to="/add_book">
              <li className="hover:text-cyan-300 transition duration-300 ">
                AddBook
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-cyan-300 transition duration-300">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-cyan-300 transition duration-300">
                Contact
              </li>
            </Link>
          </ul>
          
        )}
        {/* full screen nav bar */}
        <ul className="hamburger hidden  text-center lg:text-2xl w-[85%]  h-[60px] gap-3 mt-13   md:p-2 ml-1  md:flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center   bg-pink-300 md:bg-transparent gap-x-3 md:gap-x-5 lg:gap-x-7  font-bold text-gray-700 sm:text-xl ">
          <Link to="/">
            <li className="hover:text-cyan-300 transition duration-300 ">
              Home
            </li>
          </Link>
          <Link to="/browse_book">
            <li className="hover:text-cyan-300 transition duration-300 ">
              BrowseBook
            </li>
          </Link>
          <Link to="/add_book">
            <li className="hover:text-cyan-300 transition duration-300 ">
              AddBook
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-cyan-300 transition duration-300">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-cyan-300 transition duration-300">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//     {/* for big geader */}
//     {<ul className='hamburger w-[97%] sm:w-[77%] text-center md:w-[90%] h-[200px] gap-3 mt-3 md:-mt-1 p-3 md:p-2 ml-1 flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center   bg-pink-300 md:bg-transparent gap-x-3 md:gap-7  font-bold text-gray-700 sm:text-xl '>
//   <Link to="/" ><li className='hover:text-cyan-300 transition duration-300 '>Home</li></Link>
//   <Link to="/browse_book" ><li className='hover:text-cyan-300 transition duration-300 '>BrowseBook</li></Link>
//   <Link to="/add_book" ><li className='hover:text-cyan-300 transition duration-300 '>AddBook</li></Link>
//   <Link to="/about"><li className='hover:text-cyan-300 transition duration-300' >About</li></Link>
//   <Link to="/contact"><li className='hover:text-cyan-300 transition duration-300'>Contact</li></Link>
// </ul>}
