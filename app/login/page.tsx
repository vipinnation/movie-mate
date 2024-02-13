import React from "react";

const LoginPage = () => {
  return (
    <div className="w-2/5 mx-auto shadow-2xl p-8 rounded-sm">
      <div className="my-8 w-full">
        <h1 className="text-2xl font-semibold text-center my-4">
          Welcome Back!
        </h1>

        <div className="w-full">
          <div className="my-2 w-full">
            <label className="text-xs block font-semibold italic">
              Username/Email
            </label>
            <input
              className="border-1 rounded-md bg-gray-900 py-2 px-2 w-full border-white my-1"
              placeholder="Username/Email"
            />
          </div>
          <div className="my-4 w-full">
            <label className="text-xs block font-semibold italic">
              Password
            </label>
            <input
              className="border-1 rounded-md bg-gray-900 py-2 px-2 w-full border-white my-1"
              placeholder="Password"
            />
            <span className="text-sm font-semibold italic text-gray-500">
              Forgot password?
            </span>
          </div>

          <div className="my-8">
            <button className="bg-indigo-600 px-4 py-2 rounded-md w-full">
              Login
            </button>
            <p className="text-xs text-center py-1 text-gray-500">
              New to MovieMate?
            </p>
            <button className="bg-gray-600 px-4 py-2 rounded-md w-full mt-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
