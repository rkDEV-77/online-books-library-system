import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Error = () => {

  // Router Hook to handle error Object
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <Header />
      <div className=" h-screen mt-7 text-center bg-gradient-to-r from-blue-500 to-purple-600 p-7">
        <h1 className="text-2xl font-bold bg-red-500 p-3 mt-11">OOOPPsss!!</h1>
        <h2 className="text-2xl font-bold bg-orange-400 p-7">
          something went wrong
        </h2>
        <h3 className="text-2xl font-bold bg-cyan-500 p-7">
          {error.status} {error.statusText}
        </h3>
        <h3 className="text-2xl font-bold bg-teal-500 p-7">{error.data}</h3>
      </div>
      <div className="w-screen text-center h-13 p-3">
        {" "}
        <Link
          to={"/"}
          className="w-[20%] p-3 font-bold bg-cyan-300 hover:bg-cyan-500 rounded-md"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
