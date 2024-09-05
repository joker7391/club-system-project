import React, { useState } from "react";
import AdminNav from "../component/AdminNav";
import Sidebar from "../component/Sidebar";
import AddEventForm from "../component/AddEventForm";

const Admin = () => {
  const clubs = [
    { id: 1, name: 'Football Club' },
    { id: 2, name: 'Chess Club' },
    { id: 3, name: 'Art Club' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <div className="w-1/4 bg-gray-800">
      <AdminNav />
        <Sidebar />
       
      </div>

      {/* Main content on the right */}
      <div className="flex-1 flex flex-col">
      <AddEventForm clubs={clubs} />
      
      </div>
    </div>
  );
};

export default Admin;
