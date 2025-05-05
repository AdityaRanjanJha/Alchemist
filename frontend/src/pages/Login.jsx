import React, { useState } from "react";

const Login = () => {
  // State for toggling between "signup" and "login"
  const [formState, setFormState] = useState("signup"); // Default to signup
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    if (formState === "signup") {
      // Signup logic
      console.log("Sign up:", { name, email, password });
      // Add actual signup API call here
      alert("Signup successful (mock)");
    } else {
      // Login logic
      console.log("Login:", { email, password });
      // Add actual login API call here
      alert("Login successful (mock)");
    }
    // Optionally clear form fields after submission
    // setName(''); setEmail(''); setPassword('');
  };

  return (
    // Reduced vertical padding (py-8)
    <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Reduced space-y (space-y-6) */}
      <div className="max-w-md w-full space-y-6">

        {/* Form Container - Reduced padding (p-6 sm:p-8) and space-y (space-y-5) */}
        <form
          onSubmit={onSubmitHandler}
          className="bg-white p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-xl space-y-5"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#22223b] mb-2">
              {formState === "signup" ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-sm text-gray-500">
              {formState === "signup"
                ? "Join us to book sessions with expert teachers."
                : "Sign in to continue your learning journey."}
            </p>
          </div>

          {/* Input Fields - Reduced space-y (space-y-3) */}
          <div className="space-y-3">
            {/* Name input (only for signup) */}
            {formState === "signup" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D] sm:text-sm transition duration-150 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
            )}

            {/* Email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D] sm:text-sm transition duration-150 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            {/* Password input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={formState === 'login' ? 'current-password' : 'new-password'}
                required
                className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D] sm:text-sm transition duration-150 ease-in-out"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit button - Reduced padding (py-2.5) */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#D55E5D] hover:bg-[#b94c4c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D] transition duration-150 ease-in-out"
            >
              {formState === "signup" ? "Create Account" : "Sign In"}
            </button>
          </div>

          {/* Switch between login/signup - Reduced padding (pt-1) */}
          <div className="text-sm text-center pt-1">
            {formState === "signup" ? (
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  type="button" // Prevent form submission
                  className="font-medium text-[#D55E5D] hover:text-[#b94c4c] focus:outline-none focus:underline transition ease-in-out duration-150"
                  onClick={() => setFormState("login")}
                >
                  Login here
                </button>
              </p>
            ) : (
              <p className="text-gray-600">
                New to Alchemist Teachers?{" "}
                <button
                  type="button"
                  className="font-medium text-[#D55E5D] hover:text-[#b94c4c] focus:outline-none focus:underline transition ease-in-out duration-150"
                  onClick={() => setFormState("signup")}
                >
                  Create an account
                </button>
              </p>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;