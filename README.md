# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🔹 How to Run Project

## Install Node.js and npm

Download from https://nodejs.org
npm is included with Node.js.
Open the Project Folder
Use terminal or command prompt:
cd path/to/project

## Check for package.json

Confirm it's a Node.js project and lists all dependencies and scripts.

## Install Dependencies
Run: npm install
This installs everything needed to run the project.

## Check the Start Script
Look in package.json → "scripts" section
Common commands: "start", "dev", etc.

# Run the Development Server

## Use one of the following depending on the script:

npm run dev # for Vite, Rext.js, etc.

## Open in Browser

Go to the port shown in the terminal (e.g., 5173 for Vite)

# LINK --> https://github.com/rkDEV-77/online-books-library-system.git

# About Project

## The Online Books Library System is a responsive web application that allows users to browse, search, view, and manage books in an online library. Designed for ease of use and built using modern web technologies, the system features dynamic routing, state management, and real-time interactivity. Below is a detailed breakdown of the implemented features as per project requirements.

## ✨ Features

-> Browse books by categories
-> View book details with dynamic routing
-> Search for books by title or author
-> Add new books with form validation
-> State management with Redux
-> Client-side routing using React Router
-> 404 Page for invalid URLs

# Components and Pages Working

## Home Page

Functionality:
The Home Page (/) is the entry point of the application.

It displays:

A welcome message at the top.

A set of book categories such as Fiction, Non-Fiction, Sci-Fi, etc.

A list of popular books (fetched from dummy data or filtered based on rating/popularity).

A navigation bar appears at the top of the page and is available across all pages. It contains links to:

Home (/)

Browse Books (/books)

Add Book (/add-book)

How it works:
Categories and popular books are pulled from a local data file or fetched via a mock API.

Clicking a category navigates the user to /books/:category.

## Browse Books Page

Functionality:
Displays a grid/list of books that can be filtered by category or search.

Includes:

A search bar to filter books by title.

Dynamic routing so users can access books by visiting URLs like /books/fiction.

Each book card has a "View Details" button linking to the book's individual page.

How it works:
Uses React Router’s useParams() to get the category from the URL (/books/:category) and filter books accordingly.

The search bar updates local state and filters the displayed list in real-time.

Books are displayed by mapping over an array (stored in Redux or local state).

The "View Details" button uses useNavigate() or a <Link> component to go to /books/details/:id.

## Book Details Page

Functionality:
Displays detailed information about a selected book:

Title

Author

Description

Rating

A "Back to Browse" button allows users to return to the Browse Books page.

How it works:
The route /books/details/:id uses useParams() to get the book ID.

The book data is fetched from Redux state or dummy data using this ID.

Displays all relevant fields on the page.

The "Back" button uses useNavigate(-1) or routes directly to /books.

## Add Book Page

Functionality:
Provides a form to add a new book to the library.

Form fields include:

Title

Author

Category (dropdown)

Description

Rating (1–5)

After submission:

The book is added to the Redux store.

The user is redirected to the Browse Books page, where the new book is visible.

Includes form validation to prevent empty or invalid inputs.

How it works:
Controlled form using React state hooks (useState or useForm).

On submit:

Validates inputs (e.g., title must not be empty, rating must be a number between 1 and 5).

Dispatches a Redux action like addBook() to update the global book list.

Uses useNavigate() to redirect to /books.

## 404 Page

Functionality:
A fallback route for any non-existent path.

Shows a "Page Not Found" message.

Includes a link back to Home (/).

How it works:
Defined as a error route in React Router:

# Technologies Used

## Frontend: React.js, HTML5, CSS3

## Routing: React Router DOM

## State Management: Redux Toolkit

## Styling: CSS Modules / Tailwind CSS

## Data: Dummy book data (JSON or local state)
