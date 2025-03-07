import React from "react";
import "./index.css";
import Login from "./pages/Login";
import Register from "./component/Register";
import Homepage from "./pages/Homepage";
import SSAClub from "./pages/SSAClub";
import Humss from "./pages/Humss";
import Stem from "./pages/Stem";
import YrcClub from "./pages/YrcClub";
import ARTES from "./pages/ARTES";
import ABM from "./pages/ABM";
import ITMAWE from "./pages/ITMAWE";
import COOKS from "./pages/COOKS";
import SESLE from "./pages/SESLE";
import DMA from "./pages/DMA";

import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import NotFound from "./component/NotFound";
import Admin from "./pages/Admin";
import AdminLogin from "./component/AdminLogin";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ssa"
            element={
              <ProtectedRoute>
                <SSAClub />
              </ProtectedRoute>
            }
          />
          <Route
            path="/humss"
            element={
              <ProtectedRoute>
                <Humss />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stem"
            element={
              <ProtectedRoute>
                <Stem />
              </ProtectedRoute>
            }
          />
          <Route
            path="/yrc"
            element={
              <ProtectedRoute>
                <YrcClub />
              </ProtectedRoute>
            }
          />
          <Route
            path="/artes"
            element={
              <ProtectedRoute>
                <ARTES />
              </ProtectedRoute>
            }
          />
          <Route
            path="/abm"
            element={
              <ProtectedRoute>
                <ABM />
              </ProtectedRoute>
            }
          />
          <Route
            path="/itmawe"
            element={
              <ProtectedRoute>
                <ITMAWE />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cooks"
            element={
              <ProtectedRoute>
                <COOKS />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sesle"
            element={
              <ProtectedRoute>
                <SESLE />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dma"
            element={
              <ProtectedRoute>
                <DMA />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
