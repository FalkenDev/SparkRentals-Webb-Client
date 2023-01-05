import React from "react";
import Logo from "../assets/Logo.svg";
const Footer = () => {
  return (
    <div className="w-screen flex align-middle justify-center bg-violet-500">
      <div className="flex flex-col justify-center p-10">
        <img src={Logo} alt="React Logo" className="w-64" />
        <p>SparkRentals © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
