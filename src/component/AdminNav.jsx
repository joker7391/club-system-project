import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import clubData from "../assets/clubLOGO.png";

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/AdminLogin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <nav className="bg-blue-700 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-white text-2xl font-bold">Admin</h1>
        <img className="w-[3em] h-[3em] " src={clubData} alt="logo" />
      </div>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNav;
