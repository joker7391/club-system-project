import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const firestore = getFirestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");

  const handleback = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(firestore, "users", user.uid), {
        email,
        age,
        name,
        birthday,
        gender,
        contact,
        club: "",
      });
      navigate("/");
      console.log("You register successfully");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <div
      className="bg-cover bg-blue-500 lg:bg-contain bg-no-repeat bg-center flex items-center justify-center h-screen"
      style={{
        backgroundImage:
          "url('https://www.sti.edu/images/2022/2022-banner-shs-model2.png')",
      }}
    >
      <div className="flex flex-col bg-[#c3aaaa7b] p-5 rounded-lg h-[33em] w-[20em] shadow-lg shadow-black">
        <div className="flex items-center justify-between mb-3">
          <button onClick={handleback} className="text-[30px]">
            <IoMdArrowRoundBack />
          </button>
          <h2 className="text-center font-semibold text-[20px] font-poppins text-[#100707]">
            Register
          </h2>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Email"
          />
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Password"
          />
          <input
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Username"
          />
          <input
            required
            onChange={(e) => setAge(e.target.value)}
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Age"
          />
          <input
            required
            onChange={(e) => setBirthday(e.target.value)}
            type="date"
            className="px-3 py-2 border rounded-md w-full"
          />
          <select
            required
            onChange={(e) => setGender(e.target.value)}
            className="px-3 py-2 border rounded-md w-full text-[#1c1c1c]"
          >
            <option value="">Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            required
            onChange={(e) => setContact(e.target.value)}
            type="number"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Contact Number"
          />
          <button
            type="submit"
            className="block w-full py-2 font-poppins bg-yellow-400 border border-black rounded-md text-center text-black font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
