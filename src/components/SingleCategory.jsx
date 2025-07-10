

import { Link, useNavigate, useParams } from "react-router-dom";
import BookCard from "./BookCard";
import { booksData } from "../utils/BookData";


function SingleCategory() {
  const navigate = useNavigate();
  const { category } = useParams();

  const books = booksData;

  // filtering books having same category
  const filteredBooks = books.filter(
    (book) => book.category.trim().toLocaleLowerCase() === category
  );

  return (
    <>
      <div className="mt-[77px] px-2 mx-auto max-w-[1280px]">
        <h2 className="text-center text-2xl font-bold m-3 underline p-3">
          Total <span className="text-pink-700">{filteredBooks.length}</span>&nbsp;
          Books in <span className="text-pink-700">"{category}"</span> category
        </h2>

        {filteredBooks.length ? (
          <div className="flex flex-wrap justify-center gap-4">
            {filteredBooks.map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="w-full sm:w-[48%] md:w-[31%] lg:w-[24%] transition-transform duration-300 transform hover:scale-105"
              >
                <BookCard book={book} />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-10">
            No books found in this category.
          </p>
        )}
      </div>

      <div className="text-center pt-8">
        <button
          className="w-[60%] sm:w-[35%] md:w-[20%] rounded-md p-2 bg-amber-300 hover:bg-amber-500 font-bold transition"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </>
  );
}

export default SingleCategory;
