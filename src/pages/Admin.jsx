import React from "react";
import AdminNav from "../component/AdminNav";
import Sidebar from "../component/Sidebar";
import AddEventForm from "../component/AddEventForm";

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
