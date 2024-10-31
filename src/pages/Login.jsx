import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Credential:", userCredential); // Debugging
      const user = userCredential.user;
      console.log("Authenticated User:", user); // Debugging
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (selection) => {
    if (selection === "User") {
      navigate("/Login"); // Adjust to your user route
    } else if (selection === "Admin") {
      navigate("/adminLogin");
    }
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div
      className="bg-cover bg-blue-500 lg:bg-contain bg-no-repeat bg-center relative flex items-center justify-center h-screen"
      style={{
        backgroundImage:
          "url('https://www.sti.edu/images/2022/2022-banner-shs-model2.png')",
      }}
    >
      <div className="flex flex-col bg-[#c3aaaa7b] p-5 rounded-lg h-[15em] w-[20em] shadow-lg shadow-black">
        <h2 className="text-center font-bold text-[20px] mb-4 font-poppins text-[#100707]">
          Welcome
        </h2>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mb-3 px-3 py-2 border rounded-md w-full"
            placeholder="Email"
          />
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Password"
          />
          <h2
            onClick={handleRegister}
            className="text-black font-medium text-center text-sm cursor-pointer py-1"
          >
            Create account?
          </h2>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="block w-full py-2 font-poppins bg-yellow-400 border border-black rounded-md text-center text-black font-semibold"
          >
            Log in
          </motion.button>
        </form>
      </div>
      <motion.button
        onClick={toggleDropdown}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-400 p-2 absolute top-5 right-5 rounded-md text-[#fff]"
      >
        Hello, STIER!
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 right-5 bg-white border rounded-md shadow-lg"
        >
          <button
            onClick={() => handleSelection("Admin")}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Admin
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Login;
