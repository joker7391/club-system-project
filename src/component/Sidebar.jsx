import { useState } from "react";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col">
      {/* <div className="text-2xl font-semibold p-4">Admin Dashboard</div> */}
      <nav className="flex-1 p-4 space-y-4">
        <button
          onClick={() => setActive("dashboard")}
          className={`flex items-center p-2 text-lg rounded-md transition-colors duration-200 ${
            active === "dashboard" ? "bg-gray-700" : ""
          }`}
        >
          <HomeIcon className="w-6 h-6 mr-3" /> Dashboard
        </button>
        {/* <button
          onClick={() => setActive('users')}
          className={`flex items-center p-2 text-lg rounded-md transition-colors duration-200 ${
            active === 'users' ? 'bg-gray-700' : ''
          }`}>
          <UserIcon className="w-6 h-6 mr-3" /> Users
        </button>
        <button
          onClick={() => setActive('settings')}
          className={`flex items-center p-2 text-lg rounded-md transition-colors duration-200 ${
            active === 'settings' ? 'bg-gray-700' : ''
          }`}>
          <CogIcon className="w-6 h-6 mr-3" /> Settings
        </button> */}
      </nav>
    </div>
  );
}
