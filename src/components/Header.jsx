import React from "react";
import { useLocation } from "react-router-dom";
import LogoBlack from "../assets/LogoBlack.svg";
import { useStateContext } from "../contexts/ContextProvider";
import auth from "../models/auth.js";
import { useNavigate } from "react-router-dom";
const Header = ({ setDisplayForm }) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useStateContext();
  console.log(isLoggedIn);
  const logout = async () => {
    await auth.logout();
    await auth.googleLogout();
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="p-5">
        <img src={LogoBlack} alt="Sparkrentals Logo" className="w-64" />
      </div>
      <nav className="text-2xl font-semibold">
        <button
          onClick={(event) => (window.location.href = "/")}
          className="p-2 m-2"
        >
          Home
        </button>
        <button
          onClick={(event) => (window.location.href = "/about")}
          className="p-2 m-2"
        >
          About
        </button>
        {isLoggedIn ? (
          <button
            onClick={(event) => (window.location.href = "/account")}
            className="p-2 m-2"
          >
            Account
          </button>
        ) : (
          <></>
        )}
        {isLoggedIn ? (
          <button
            onClick={() => {
              logout();
            }}
            className="px-3 py-1 m-4 border border-DarkBlue rounded-lg
        hover:bg-DarkBlue hover:text-white transition-all"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setDisplayForm(true);
            }}
            className="px-3 py-1 m-4 border border-DarkBlue rounded-lg
      hover:bg-DarkBlue hover:text-white transition-all"
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
