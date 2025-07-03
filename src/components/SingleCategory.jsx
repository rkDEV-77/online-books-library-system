// components/BookList.js
import { Link, useNavigate, useParams } from "react-router-dom";
// import { books } from "../utils/BookData";
import BookCard from "./BookCard";
import { UpdateLocalStorage } from "../utils/UpdateLocalStorage";
// import BooksByCategory from "./BooksByCategory";

function SingleCategory() {
  const navigate = useNavigate();
  const { category } = useParams();

   const books = UpdateLocalStorage()
  //   console.log(category);
  //   console.log(books);

  const filteredBooks = books.filter(
    (book) => book.category.trim().toLocaleLowerCase() === category
  );
  //   console.log(filteredBooks);

  return (
    <>
    <div className="mt-[70px] m-auto ">
      <h2 className="text-center text-2xl font-bold m-3 underline p-3">
        Books in <span className="text-pink-700">"{category}"</span> category
      </h2>
     
      {/* <button className="w-[25%] md:w-[13%] rounded-md p-2 m-2 bg-amber-300 hover:bg-amber-500 font-bold" onClick={()=> navigate(-1)}>Go Back</button> */}
      {/* className="w-[91%]  bg-cyan-200 p-2 m-2 shadow-xl sm:w-[45%] md:w-[30%] lg:w-[23%] transform hover:scale-105 transition duration-300 cursor-pointer */}
      {filteredBooks.length ? (
        <div className="flex flex-wrap justify-center items-center  p-3 m-3">
          {filteredBooks.map((book) => (
            // <li key={book.id}>{book.title}</li>
            // <BooksByCategory key={book.id} book={book} />
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="w-[91%] sm:w-[45%] md:w-[30%] lg:w-[23%]  border-amber-400  bg-cyan-400 p-2 m-2 shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
            >
              <BookCard book={book} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
    <div className="text-center  pt-7">
        <button className="w-[25%] md:w-[13%] rounded-md p-2 m-2 bg-amber-300 hover:bg-amber-500 font-bold" onClick={()=> navigate(-1)}>Go Back</button>
    </div>

    </>
  );
}

export default SingleCategory;
