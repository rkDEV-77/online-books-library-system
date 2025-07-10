import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate()

  // Handle form data dummy
  const handleSubmit  = () => {
    alert("Thank you for reaching out! We'll get back to you soon.");
    navigate("/")
  }



  return (
    <section className="bg-transparent w-screen h-[150%] py-11 px-1 flex items-center justify-center mt-[60px]">
      <div className="gradient w-[70%] mx-auto rounded-xl shadow-lg p-7 md:p-13 py-22">

        <h1 className="text-4xl font-bold text-cyan-800 mb-6 text-center">
          Get in Touch 
        </h1>
        <h2 className="text-center text-xl text-gray-800 mb-10">
          Have questions, suggestions, or just want to say hi? We'd love to hear from you!
        </h2>

        <form className="grid gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
            onClick={handleSubmit}
              // type="submit"
              className="bg-cyan-600 text-white font-medium px-8 py-3 rounded-lg shadow hover:bg-cyan-700 transition duration-300 hover:text-orange-400"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
