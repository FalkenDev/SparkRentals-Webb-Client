import React from "react";
import LogoBlack from "../assets/LogoBlack.svg";
import { useStateContext } from "../contexts/ContextProvider";
import auth from "../models/auth.js"

const Header = ({ setDisplayForm }) => {
  const { isLoggedIn, setIsLoggedIn } = useStateContext();
  console.log(isLoggedIn);
  const logout = async () => {
    await auth.googleLogout();
    setIsLoggedIn(false);
  }
  return (
    <div className="flex w-screen flex-row justify-between">
      <div className="p-2">
        <img src={LogoBlack} alt="React Logo" className="w-64" />
      </div>
      <nav className="text-xl font-semibold">
        <button onClick={event =>  window.location.href='/'} className="p-1 m-2">Home</button>
        <button onClick={event =>  window.location.href='/about'} className="p-1 m-2">About</button>
        {isLoggedIn
        ?(<button onClick={event =>  window.location.href='/account'} className="p-1 m-2">Account</button>)
        :(<></>)
        }
        {isLoggedIn
        ?(<button onClick={() => {
          logout();
        }} className="px-3 py-1 m-4 border border-DarkBlue rounded-lg
        hover:bg-DarkBlue hover:text-white transition-all">Logout</button>)
        :(<button
          onClick={() => {
            setDisplayForm(true);
          }}
          className="px-3 py-1 m-4 border border-DarkBlue rounded-lg
      hover:bg-DarkBlue hover:text-white transition-all"
        >
        Login
      </button>)
      }
      </nav>
    </div>
  );
};

export default Header;
