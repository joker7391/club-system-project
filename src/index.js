import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { auth, firestore } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = React.createContext();

function Main() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  console.log("UserData", userData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          console.log("No user data available");
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <React.StrictMode>
      <AuthContext.Provider value={{ currentUser, userData }}>
        <App />
        <ToastContainer position="top-center" />
      </AuthContext.Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
reportWebVitals();
