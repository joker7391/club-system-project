import React from "react";
import "./index.css";
import Login from "./pages/Login";
import Register from "./component/Register";
import Homepage from "./pages/Homepage";
import SSAClub from "./pages/SSAClub";
import Humms from "./pages/Humms";
import Stem from "./pages/Stem";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto min-w-screen">
      <Router>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Homepage />} path="/home" />
          <Route element={<Register />} path="/register" />
          <Route element={<SSAClub />} path="/ssa" />
          <Route element={<Humms />} path="/humms" />
          <Route element={<Stem />} path="/stem" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
