import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleback = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div
      className="bg-cover bg-yellow-900 lg:bg-contain bg-no-repeat bg-center flex items-center justify-center h-screen"
      style={{
        backgroundImage:
          "url('https://www.sti.edu/images/2022/2022-banner-shs-model2.png')",
      }}
    >
      <div className="flex flex-col bg-[#c3aaaa7b] p-5 rounded-lg h-[30em] w-[20em] shadow-lg shadow-black">
        <div className="flex items-center justify-between mb-3">
          <button onClick={handleback} className="text-[30px] ">
            <IoMdArrowRoundBack />
          </button>

          <h2 className="text-center font-semibold text-[20px] font-poppins text-[#100707]">
            Register
          </h2>
        </div>

        <form className="flex flex-col gap-4">
          <input
            required
            // onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Email"
          />
          <input
            required
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Password"
          />
          <input
            required
            // onChange={(e) => setPassword(e.target.value)}

            className="px-3 py-2 border rounded-md w-full"
            placeholder="Age"
          />
          <input
            required
            type="date"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Birthday"
          />
          <select className="px-3 py-2 border rounded-md w-full text-[#1c1c1c]/50">
            <option disabled className="">
              Choose Club
            </option>
            <option className="text-[#1c1c1c]">Male</option>
            <option className="text-[#1c1c1c]">Female</option>
          </select>
          <input
            required
            type="number"
            className="px-3 py-2 border rounded-md w-full"
            placeholder="Contact Number"
          />

          <button
            whileTap={{ scale: 0.9 }}
            type="submit"
            href="homepage.html"
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
