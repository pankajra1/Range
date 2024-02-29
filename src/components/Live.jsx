import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";

const HomePage = () => {
  const [classCode, setClassCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/Liveroom/${classCode}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <img src={logo} className="w-32 mx-auto mb-8" alt="logo" />
        <form onSubmit={handleSubmit} className="max-w-xs mx-50">
          <label className="block mb-4 text-xl font-bold">Enter the class code</label>
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value)}
            type="text"
            required
            placeholder="Enter the class code"
          />
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">
            Enter Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
