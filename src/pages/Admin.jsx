import React, { useState } from "react";
import AdminNav from "../component/AdminNav";
import Sidebar from "../component/Sidebar";
import AddEventForm from "../component/AddEventForm";
import UserList from "../component/UserList"; // Import UserList component

const Admin = () => {
  const clubs = [
    { id: 1, name: "ABM" },
    { id: 2, name: "ARTES" },
    { id: 3, name: "COOKS" },
    { id: 4, name: "DMA" },
    { id: 5, name: "HUMMS" },
    { id: 6, name: "ITMAWE" },
    { id: 7, name: "SSA" },
    { id: 8, name: "STEM" },
    { id: 9, name: "TOUSLE" },
    { id: 10, name: "YRC" },
  ];

  const [showUserList, setShowUserList] = useState(false); // State to manage visibility

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800">
        <AdminNav />
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col p-4">
        {/* Button to toggle between AddEventForm and UserList */}
        <button
          onClick={() => setShowUserList((prev) => !prev)} // Toggle visibility
          className="mb-4 p-2 bg-blue-600 text-white rounded-md"
        >
          {showUserList ? "Back to Add Event" : "Show Users"}
        </button>

        {/* Render AddEventForm or UserList based on state */}
        {showUserList ? <UserList /> : <AddEventForm clubs={clubs} />}
      </div>
    </div>
  );
};

export default Admin;
