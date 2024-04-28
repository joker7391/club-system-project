import React from "react";
import Login from "./pages/Login";
import Register from "./component/Register";
import Homepage from "./pages/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Homepage />} path="/home" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
