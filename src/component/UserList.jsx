import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase.config";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(firestore, "users"));
      const userList = querySnapshot.docs.map((doc) => doc.data());
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Contact</th>
            <th className="py-2 px-4 border">Club</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">{user.contact}</td>
              <td className="py-2 px-4 border">{user.club}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
