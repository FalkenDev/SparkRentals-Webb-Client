import React from "react";
import Logo from "../assets/Logob.png";
const Footer = () => {
  return (
    <div className="w-full flex align-middle justify-center bg-violet-500">
      <div className="flex flex-col justify-center p-10">
        <img src={Logo} alt="React Logo" className="w-64" />
        <p className="text-center p-4">SparkRentals © 2023</p>
      </div>
    </div>
  );
};

export default Footer;
