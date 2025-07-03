import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
// import BookLists from './components/BookLists.jsx'
// import SearchBookList from "./components/SearchBookList.jsx";
import BookDetails from "./components/BookDetails.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddBook from "./components/AddBook.jsx";
import BrowseBook from "./components/BrowseBook.jsx";
import SingleCategory from "./components/SingleCategory.jsx";

// creating Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/",
        element: <HomePage />
       },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/add_book",
        element: <AddBook />
      },
      {
        path: "/browse_book",
        element: <BrowseBook />
      },
      {
        path: "/browse_book/:category",
        element: <SingleCategory />
      },
      {
        path: "/book/:id",
        element: <BookDetails />
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
