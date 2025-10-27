const Contact = () => {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form className="bg-white shadow-md rounded-2xl p-8 w-full max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-blue-500"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  