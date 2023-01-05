import React from "react";
import Group from "../assets/Group.png";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-between align-middle px-44 py-5 items-center">
        <div className="flex flex-col w-96">
          <h1 className="text-5xl font-bold">
            Rent Electric Scooters Easier than ever before!
          </h1>
          <h3 className="text-2xl py-4 text-blue-800 font-bold">
            Svenska Elsparkcyklar AB
          </h3>
          <p className="font-thin text-slate-600">
            This project was developed by a group of web development students
            from Blekinge Technical University
          </p>
          <button
            className="px-2 py-1 w-36 rounded-xl my-4 bg-DarkBlue font-semibold
           text-white hover:bg-white hover:text-DarkBlue transition border-2 border-DarkBlue"
          >
            Read More
          </button>
        </div>
        <img src={Group} alt="React Logo" className="w-90" />
      </div>
    </div>
  );
};

export default Hero;
