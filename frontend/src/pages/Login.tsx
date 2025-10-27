import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-50 to-white px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-medium hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;
