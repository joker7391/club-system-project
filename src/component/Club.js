import React from "react";
import TodoList from "./TodoList";

const Club = ({ club }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{club.name}</h2>
      <p className="mb-4">{club.description}</p>
      <TodoList />
    </div>
  );
};

export default Club;
