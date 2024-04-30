import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default Logout;
