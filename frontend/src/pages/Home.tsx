const Home = () => {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">NexGenLearn</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mb-6">
          Empowering students and professionals with AI-powered personalized learning. 
          Explore courses, connect with mentors, and grow your career.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    );
  };
  
  export default Home;

