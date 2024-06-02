import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user.email !== "admin@example.com") {
        await signOut(auth);
        setError("You are not authorized to access the admin panel.");
      } else {
        console.log("Authenticated Admin:", user);
        navigate("/admin");
      }
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
    }
  };

  return (
    <div
      className="bg-cover bg-yellow-600 lg:bg-contain bg-no-repeat bg-center relative flex items-center justify-center h-screen"
      style={{
        backgroundImage:
          "url('https://www.sti.edu/images/2022/2022-banner-shs-model2.png')",
      }}
    >
      <div className="flex flex-col bg-[#c3aaaa7b] p-5 rounded-lg h-[15em] w-[20em] shadow-lg shadow-black">
        <h2 className="text-center font-bold text-[20px] mb-4 font-poppins text-[#100707]">
          Welcome Admin
        </h2>
        {error && <p className="text-red-500">{error}</p>}{" "}
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

          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="block w-full py-2 mt-4 font-poppins bg-yellow-400 border border-black rounded-md text-center text-black font-semibold"
          >
            Log in
          </motion.button>
        </form>
      </div>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-400 p-2 absolute top-5 right-5 rounded-md text-[#fff]"
      >
        Student login
      </button>
    </div>
  );
};

export default AdminLogin;
