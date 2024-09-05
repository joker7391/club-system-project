import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.config';
import { signOut } from 'firebase/auth';

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
        <h1 className="text-white text-2xl font-bold">Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </nav>
  )
}

export default AdminNav