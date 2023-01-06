import React from "react";
import LogoBlack from "../assets/LogoBlack.svg";

const Header = ({ setDisplayForm }) => {
  return (
    <div className="flex w-screen flex-row justify-between">
      <div className="p-2">
        <img src={LogoBlack} alt="React Logo" className="w-64" />
      </div>
      <nav className="text-xl font-semibold">
        <button className="p-1 m-2">Home</button>
        <button className="p-1 m-2">About</button>
        <button
          onClick={() => {
            setDisplayForm(true);
          }}
          className="px-3 py-1 m-4 border border-DarkBlue rounded-lg
        hover:bg-DarkBlue hover:text-white transition-all"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Header;
