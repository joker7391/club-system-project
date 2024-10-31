import { useState } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import UserList from "../component/UserList";
import { UserIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col">
      <nav className="flex-1 p-4 space-y-4">
        <button
          onClick={() => setActive("dashboard")}
          className={`flex items-center p-2 text-lg rounded-md transition-colors duration-200 ${
            active === "dashboard" ? "bg-gray-700" : ""
          }`}
        >
          <HomeIcon className="w-6 h-6 mr-3" /> Dashboard
        </button>
      </nav>
    </div>
  );
}
