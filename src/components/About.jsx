
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className=" min-h-screen mt-[70px] sm:mt-[70px] px-6 py-3 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
            alt="Books"
            className="rounded-xl shadow-xl transform transition duration-500 group-hover:scale-105 p-3 bg-orange-400"
          />
          {/* <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-black bg-opacity-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500" /> */}
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl text-center md:text-start  font-extrabold mb-6 bg-gradient-to-r from-teal-400 to-cyan-700 text-transparent bg-clip-text">
            About BookApp
          </h1>
          <p className="text-lg text-gray-800 mb-4 leading-relaxed">
            📖 BookApp is your digital gateway to discovering, tracking, and enjoying books that match your unique interests.
            Whether you're an occasional reader or a full-time bookworm, BookApp makes reading more personal and fun.
          </p>
          <p className="text-md text-gray-700 mb-6">
            With personalized recommendations, beautiful book displays, and community reviews, it's never been easier to stay inspired and engaged with your reading goals.
          </p>
          <Link
            to="/"
            className=" px-6 py-3 text-center m-auto bg-cyan-300 text-gray-500 font-medium rounded-lg shadow hover:text-gray-200 hover:bg-cyan-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
