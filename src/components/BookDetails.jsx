
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateLocalStorage } from "../utils/UpdateLocalStorage";

const BookDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [books, setBooks] = UpdateLocalStorage();
  const bookDetails = books.filter((book) => book.id == params.id);

  if (!bookDetails.length) return <p className="text-center mt-20">Book not found.</p>;

  const book = bookDetails[0];

  return (
    <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[60%] max-w-5xl mx-auto mt-[65px] py-11 flex items-center justify-center min-h-screen">
  <div className="w-[90%] h-fit md:h-[500px] lg:h-[450px] p-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden hover:scale-[1.05] transition-transform duration-300">
    
    {/* Book Cover */}
    <div className="w-full md:w-1/2 h-[320px] md:h-full">
      <img
        src={book.coverImage}
        alt="book-cover"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Book Info */}
    <div className="w-full md:w-1/2 h-auto md:h-full p-4 sm:p-6 md:p-6 flex flex-col justify-between bg-white/70">
      <div className="overflow-y-auto pr-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-cyan-700 mb-2">
          {book.title}
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-1">
          <strong className="text-cyan-600">Author:</strong> {book.author}
        </p>
        <p className="text-gray-700 text-sm sm:text-md mb-1">
          <strong className="text-cyan-600">Category:</strong> {book.category}
        </p>
        <p className="text-gray-700 text-sm sm:text-md mb-1">
          <strong className="text-cyan-600">Published:</strong> {book.publishedDate}
        </p>
        <p className="text-gray-700 text-sm sm:text-md mb-1">
          <strong className="text-cyan-600">Pages:</strong> {book.pages}
        </p>
        <p className="text-gray-700 text-sm sm:text-md mb-1">
          <strong className="text-cyan-600">Rating:</strong> {book.rating}
        </p>
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed mt-2">
          <strong className="text-cyan-600">Description:</strong><br />
          {book.description}
        </p>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 self-start bg-cyan-500 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition"
      >
        ← Go Back
      </button>
    </div>
  </div>
</div>


  );
};

export default BookDetails;

// ////////////////////////////////////


// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { UpdateLocalStorage } from "../utils/UpdateLocalStorage";

// const BookDetails = () => {
//   const navigate = useNavigate();
//   const params = useParams();
//   const books = UpdateLocalStorage();
//   const bookDetails = books.filter((book) => book.id == params.id);

//   if (!bookDetails.length) return <p className="text-center mt-20">Book not found.</p>;

//   const book = bookDetails[0];

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform transition hover:scale-[1.01] duration-300">
        
//         {/* Book Image */}
//         <div className="w-full md:w-1/2 h-[300px] md:h-auto">
//           <img
//             src={book.coverImage}
//             alt="book-cover"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Book Details */}
//         <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-50">
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
//           <p className="text-lg text-gray-600 mb-1">
//             <strong>Author:</strong> {book.author}
//           </p>
//           <p className="text-md text-gray-600 mb-1">
//             <strong>Category:</strong> {book.category}
//           </p>
//           <p className="text-md text-gray-600 mb-1">
//             <strong>Published:</strong> {book.publishedDate}
//           </p>
//           <p className="text-md text-gray-600 mb-1">
//             <strong>Pages:</strong> {book.pages}
//           </p>
//           <p className="text-md text-gray-600 mb-1">
//             <strong>Rating:</strong> {book.rating}
//           </p>
//           <p className="text-md text-cyan-700 mt-3 leading-relaxed">
//             <strong>Description:</strong> {book.description}
//           </p>
//         </div>
//       </div>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-8 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-md transition duration-300"
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default BookDetails;
