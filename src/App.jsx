import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#151515] text-white">
      <div className="flex-grow">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </div>
      <Navbar />
    </div>
  );
};

export default App;
