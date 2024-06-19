import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import Club from "../component/Club";
import { clubs } from "../assets/data"; // Importing the clubs array
import TodoList from "../component/TodoList";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(clubs[0].id);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/AdminLogin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <nav className="bg-yellow-600 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Event </h1>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </nav>
      <div className="min-h-screen flex items-center justify-center bg-gray-500">
        <TodoList />
      </div>
    </div>
  );
};

export default Admin;
