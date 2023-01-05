import React from "react";
import scooter from "../assets/scooter.png";
const About = () => {
  return (
    <div className="w-screen bg-violet-400 flex flex-row justify-evenly py-20">
      <div>
        <img src={scooter} alt="React Logo" className="w-120" />
      </div>
      <div className=" w-96">
        <h1 className="text-6xl text-white font-semibold">OUR STORY</h1>
        <p className="py-10 text-xl">
          This project is created by 4 students who attend Blekinge Institute of
          Technology in web programming. We received this task in the virtual
          team course, where we would, among other things, create a
          mobile-adapted web app for the customer, administrative web interface,
          a simulation program for the electric scooters and an intelligence
          program in the bike.
        </p>
        <p className="text-xl">
          You can find all our programs with source code as well as descriptions
          and how to go about running the program yourself.
        </p>
        <div className="flex justify-between w-64 py-5">
          <button
            className="py-2 text-DarkBlue px-2 font-semibold hover:bg-DarkBlue
          hover:text-white rounded-xl transition border-2 border-DarkBlue"
          >
            Source Code
          </button>
          <button
            className="py-2 text-DarkBlue px-2 font-semibold hover:bg-DarkBlue
            hover:text-white rounded-xl transition border-2 border-DarkBlue"
          >
            Mobile App
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
