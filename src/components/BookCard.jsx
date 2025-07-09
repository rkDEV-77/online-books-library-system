// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// const BookCard = (props) => {
//   const [show, setShow] = useState("");

//   let book = props.book;
//   // console.log(typeof(book));
//   // console.log(book.id);
//   // console.log(book);

//   // function handleClick(e) {
//   //   console.log(e.target);

//   //   // props.setFilterBooks();
//   // }

//   function handleDescription(e) {
//     // console.log('clicked');
//     e.preventDefault()

//     setShow(!show);
//   }
//       // className="w-[91%]  bg-cyan-200 p-2 m-2 shadow-xl sm:w-[45%] md:w-[30%] lg:w-[23%] transform hover:scale-105 transition duration-300 cursor-pointer"

//   return (
//     <div className="">
//       <img
//         src={book.coverImage}
//         alt=""
//         width="300px"
//         height="250px"
//         className="bg-gray-300 object-fill w-[97%] h-[230px] relative  m-auto  p-2 shadow-sm"
//       />

//        {/* Tooltip on hover
//   <div className="absolute  w-[97%] h-[230px] left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
//     Click for more details
//   </div> */}

//       {/* sm:-[40%] md:w-[30%]  */}
//       <div className="bg-gray-300 w-[97%]  text-xs my-1 m-auto text-center p-2 shadow-sm">
//         <h2 className="text-sm">
//           Title: <strong>{book.title}</strong>
//         </h2>
//         <h2 className="text-sm">
//           Auther: <strong>{book.author}</strong>
//         </h2>
//         <p>
//           Published Date: <strong>{book.publishedDate}</strong>
//         </p>
//         <p>
//           Pages: <strong> {book.pages}</strong>
//         </p>
//         {show && (
//           <p className="text-sm text-wrap text-cyan-700 ">
//             Description: {book.description}
//           </p>
//         )}
//         <button
//           className="bg-cyan-300 w-[60%] text-sm px-3 py-1 m-1 text-gray-700 hover:bg-gray-500 hover:text-white rounded-md shadow-lg font-bold border-gray-400 border-1  transition duration-300 cursor-pointer"
//           onClick={(e)=>handleDescription(e)}
//         >
//           {show ? "Hide" : "show"} Descp.
//         </button>
//       </div>
//     </div>
    
//   );
// };

// export default BookCard;

// /////////////////////////////////////////////////////////


// import React, { useState } from "react";

// const BookCard = (props) => {
//   const [show, setShow] = useState(false);
//   const book = props.book;

//   function handleDescription(e) {
//     e.preventDefault();
//     setShow(!show);
//   }

//   return (
//     <div className=" flex flex-wrap justify-center items-center group w-[91%] bg-cyan-200 p-2 m-3 shadow-xl sm:w-[45%] md:w-[30%] lg:w-[23%] transform hover:scale-105 transition duration-300 cursor-pointer rounded-md">
//       {/* Image with Tooltip */}
//       <div className="relative">
//         <img
//           src={book.coverImage}
//           alt="Book Cover"
//           width="300px"
//           height="250px"
//           className="bg-gray-300 object-fill h-[230px] p-2 rounded"
//         />

//         {/* Tooltip */}
//         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
//           Click to view details
//         </div>
//       </div>

//       {/* Book Info */}
//       <div className="bg-gray-300 text-xs text-center mt-2 p-3 rounded shadow-sm">
//         <h2 className="text-sm">
//           Title: <strong>{book.title}</strong>
//         </h2>
//         <h2 className="text-sm">
//           Author: <strong>{book.author}</strong>
//         </h2>
//         <p>
//           Published Date: <strong>{book.publishedDate}</strong>
//         </p>
//         <p>
//           Pages: <strong>{book.pages}</strong>
//         </p>

//         {show && (
//           <p className="text-sm text-cyan-700 mt-2">
//             Description: {book.description}
//           </p>
//         )}

//         <button
//           onClick={handleDescription}
//           className="bg-cyan-300 text-sm px-3 py-1 mt-2 text-gray-700 hover:bg-gray-500 hover:text-white rounded-md shadow-lg font-bold transition duration-300"
//         >
//           {show ? "Hide" : "Show"} Description
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookCard;


// ////////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";

// const BookCard = ({ book }) => {
//   const [show, setShow] = useState(false);

//   const handleDescription = (e) => {
//     e.preventDefault();
//     setShow(!show);
//   };

//   return (
//     <div className="p-3">
//       <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 relative">
        
//         {/* Image + Tooltip */}
//         <div className="relative w-full">
//           <img
//             src={book.coverImage}
//             alt={book.title}
//             className="w-full h-[230px] object-cover"
//           />
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//             Click to view details
//           </div>
//         </div>

//         {/* Book Info */}
//         <div className="w-full p-4 text-sm text-center bg-gray-50">
//           <h2 className="text-base font-semibold text-gray-800">
//             Title: <span className="font-normal">{book.title}</span>
//           </h2>
//           <h2 className="mt-1 text-gray-700">
//             Author: <span className="font-medium">{book.author}</span>
//           </h2>
//           <p className="mt-1 text-gray-600">
//             Published: <strong>{book.publishedDate}</strong>
//           </p>
//           <p className="text-gray-600">
//             Pages: <strong>{book.pages}</strong>
//           </p>

//           {show && (
//             <p className="mt-3 text-cyan-700 text-left">
//               <strong>Description:</strong> {book.description}
//             </p>
//           )}

//           <button
//             onClick={handleDescription}
//             className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-4 py-2 rounded-md transition font-semibold"
//           >
//             {show ? "Hide" : "Show"} Description
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// //////////////////////////////////////////////////////////////////////////

import React, { useState } from "react";

const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);

  // toggle show state
  const handleDescription = (e) => {
    e.preventDefault();
    setShow(!show);
  };


  return (
    <div className="  flex justify-center">
      <div className="flex  flex-col w-[97%] bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
        
        {/* Image + Tooltip */}
        <div className="relative p-1 w-full flex justify-center bg-cyan-300">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-[230px] object-cover"
          />
          <div className="absolute bottom-2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Click to view details
          </div>
        </div>

        {/* Book Info */}
        <div className="flex flex-col w-full px-6 py-4 bg-gray-50 text-sm text-left">
          <h2 className="text-base font-semibold text-gray-800 mb-1">
            Title: <span className="font-normal">{book.title}</span>
          </h2>
          <h2 className="text-gray-700 mb-1">
            Author: <span className="font-medium">{book.author}</span>
          </h2>
          <p className="text-gray-600 mb-1">
            Published: <strong>{book.publishedDate}</strong>
          </p>
          <p className="text-gray-600 mb-1">
            Pages: <strong>{book.pages}</strong>
          </p>

          {show && (
            <p className="mt-3 text-cyan-700">
              <strong>Description:</strong> {book.description}
            </p>
          )}

          <div className="mt-4">
            <button
              onClick={handleDescription}
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-4 py-2 rounded-md shadow-md transition font-semibold"
            >
              {show ? "Hide" : "Show"} Description
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;


