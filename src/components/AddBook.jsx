
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

     // Limit description to 50 words
     if (name === "description") {
      console.log(value);
      
    const words = value.trim().split(/\s+/);
    console.log(words);
    console.log(words.slice(0, 30).join(' '));
    console.log(value);
    
    
    
    if (words.length > 30) {
      // return
      alert('Description must we less than 30 words')
      const value = words.slice(0, 30).join(' ') // prevent update if over 50 words
      return value // prevent update if over 50 words
    }
  }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validating the form input fields or Check for empty required fields
   
  const requiredFields = [
    "name",
    "title",
    "author",
    "publishedDate",
    "pages",
    "category",
    "coverImage",
    "description",
    "rating"
  ];

  for (let field of requiredFields) {
    if (!formData[field]) {
      alert(`Please fill out the "${field}" field.`);
      return;
    }
  }

  // Additional numeric validation
  const pages = parseInt(formData.pages);

  if (isNaN(pages) || pages <= 0) {
    alert("Please enter a valid number of pages.");
    return;
  }

  


    const newBook = {
      id: uuidv4(), // Unique ID
      ...formData,
      pages: parseInt(formData.pages),
      rating: parseFloat(formData.rating),
    };

    const existingBooks = JSON.parse(localStorage.getItem("books")) || [];
    console.log(existingBooks);
    // console.log(newBook);
    
    
    const updatedBooks = [...existingBooks, newBook];
    // console.log(updatedBooks);
    
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    // make form field empty after submission
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

    alert("Book added successfully!");
    // navigate("/"); // Adjust if needed
    navigate("/browse_book")
  };

  return (
    <div className="w-screen mt-[90px] p-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-cyan-300 shadow-md rounded px-8 pt-6 pb-5"
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




