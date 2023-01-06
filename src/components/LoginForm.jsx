import React from "react";

const LoginForm = ({
  validPass,
  email,
  password,
  setPassword,
  setEmail,
  setDisplayForm,
}) => {
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
      <form onSubmit={validPass}>
        <div className="w-full">
          <div className="border-b-2 my-8 w-full text-xl">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg block p-2.5 w-full"
            />
          </div>
          <div className="border-b-2 my-8 w-full text-xl">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
            type="submit"
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
