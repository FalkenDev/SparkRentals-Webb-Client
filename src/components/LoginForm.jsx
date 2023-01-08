import React, { useState } from "react";
import auth from "../models/auth";
import { useStateContext } from "../contexts/ContextProvider";
const LoginForm = ({ setDisplayForm }) => {
  const { setIsServerAcc, setIsLoggedIn, setServerProfileId } =
    useStateContext();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleEdit = (val, field) => {
    setLoginForm({ ...loginForm, [field]: val });
  };

  const validPass = async () => {
    console.log(loginForm["email"], loginForm["password"]);
    const res = await auth.login(loginForm["email"], loginForm["password"]);
    console.log(res.message);
    if (res.message === "Success") {
      setIsLoggedIn(true);
      setIsServerAcc(true);
      setDisplayForm(false);
    }
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 z-10 rounded-xl px-3 outline outline-DarkBlue
        transform -translate-x-1/2 -translate-y-1/2 bg-white py-5"
    >
      <h1 className="font-semibold text-2xl text-center"> Login </h1>
      <button
        onClick={() => {
          setDisplayForm(false);
        }}
      >
        Close
      </button>
      <form>
        <div className="w-full">
          <div className="border-b-2 my-8 w-full text-xl">
            <input
              type="text"
              value={loginForm["email"]}
              placeholder="Email"
              name="email"
              onChange={(e) => {
                handleEdit(e.target.value, e.target.name);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg block p-2.5 w-full"
            />
          </div>
          <div className="border-b-2 my-8 w-full text-xl">
            <input
              type="password"
              onChange={(e) => {
                handleEdit(e.target.value, e.target.name);
              }}
              value={loginForm["password"]}
              name="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg block p-2.5 w-full"
            />
          </div>
        </div>
        {/* {isIncorrect ? (
          <div className="text-center text-xl text-red-700 font-semibold">
            <p>Incorrect password or email please try again!</p>
          </div>
        ) : null} */}

        <div className="p-3">
          <button
            type="button"
            onClick={() => {
              window.location.href = process.env.REACT_APP_GOOGLE_LOGIN_API_URL;
            }}
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>

        <div className="p-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              validPass();
            }}
            className="bg-violet-500 py-1 text-white rounded-full w-72
         hover:bg-violet-600 transition-colors"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
