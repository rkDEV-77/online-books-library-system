
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../features/BookSlice";
// import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {

   const navigate = useNavigate();
  const dispatch = useDispatch();

  // initialize form field state
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    author: "",
    publishedDate: "",
    pages: "",
    category: "",
    coverImage: "",
    description: "",
    rating: "",
    isPopular: false,
  });


  // Handle input change and validations
  const handleChange = (e) => {
    // Catching current input object values
    const { name, value, type, checked } = e.target;


    // Checking if Description Limit the input to 30 words
    if (name === "description") {
      const words = value.trim().split(/\s+/);
      if (words.length > 40) {
        alert("Description must be less than 30 words");
        return;
      }
    }


    // Set the cuttent change values without affecting the previous value
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


// Handle Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "title",
      "author",
      "publishedDate",
      "pages",
      "category",
      "coverImage",
      "description",
      "rating",
    ];

    // Validating presence of all input fields 
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill out the "${field}" field.`);
        return;
      }
    }
    // Convert to fraction and limit the input number
    const pages = parseInt(formData.pages);
    const rating = parseFloat(formData.rating);

    if (isNaN(pages) || pages <= 0) {
      alert("Please enter a valid number of pages.");
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
      alert("Please enter a rating between 0 and 5.");
      return;
    }

    // dispatch action payload as form input
    dispatch(
      addBook({
        ...formData,
        pages,
        rating,
      })
    );

    // Alert book ADded successfully
    alert("New Book Added Successfully!");

    setFormData({
      name: "",
      title: "",
      author: "",
      publishedDate: "",
      pages: "",
      category: "",
      coverImage: "",
      description: "",
      rating: "",
      isPopular: false,
    });

    // Afetr succesfully adding Book Navigate to browse_book page
    navigate("/browse_book");
  };



  return (
    <div className="w-screen mt-[90px] p-5">
      <form
        onSubmit={handleSubmit}
        className="gradient max-w-xl mx-auto bg-gray-200 shadow-md rounded px-8 pt-6 pb-5"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Book Details</h2>

        {/* Name */}
        <label className="block mb-2 font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Title */}
        <label className="block mb-2 font-semibold text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Author */}
        <label className="block mb-2 font-semibold text-gray-700">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Published Date */}
        <label className="block mb-2 font-semibold text-gray-700">Published Date</label>
        <input
          type="date"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Pages */}
        <label className="block mb-2 font-semibold text-gray-700">Pages</label>
        <input
          type="number"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Category */}
        <label htmlFor="category" className="block mb-2 font-semibold text-gray-700">
          Choose a Category:
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="">Select a category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Cyberpunk">Cyberpunk</option>
          <option value="AI">AI</option>
          <option value="Biotech">Biotech</option>
          <option value="Time Travel">Time Travel</option>
          <option value="Space Opera">Space Opera</option>
          <option value="Space Mystery">Space Mystery</option>
          <option value="Adventure">Adventure</option>
          <option value="Tech Noir">Tech Noir</option>
          <option value="Multiverse">Multiverse</option>
          <option value="Thriller">Thriller</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Space Fantasy">Space Fantasy</option>
          <option value="Heist">Heist</option>
          <option value="Space Exploration">Space Exploration</option>
        </select>

        {/* Cover Image */}
        <label className="block mb-2 font-semibold text-gray-700">Cover Image URL</label>
        <input
          type="url"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Description */}
        <label className="block mb-2 font-semibold text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          rows="3"
        ></textarea>

        {/* Rating */}
        <label className="block mb-2 font-semibold text-gray-700">Rating (0 - 5)</label>
        <input
          type="number"
          name="rating"
          step="0.1"
          min="0"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Is Popular */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="isPopular"
            checked={formData.isPopular}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700 font-semibold">Is Popular</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;




