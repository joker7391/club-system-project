import React from "react";
import "./index.css";
import Login from "./pages/Login";
import Register from "./component/Register";
import Homepage from "./pages/Homepage";
import SSAClub from "./pages/SSAClub";
import Humms from "./pages/Humms";
import Stem from "./pages/Stem";
import YrcClub from "./pages/YrcClub";
import ARTES from "./pages/ARTES";
import ForbiddenPage from "./pages/ForbiddenPage";
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
          <Route path="/forbidden" element={<ForbiddenPage />} />
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
            path="/humms"
            element={
              <ProtectedRoute>
                <Humms />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
