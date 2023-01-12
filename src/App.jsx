import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, LoginForm } from "./components";
import auth from "./models/auth.js";
import { Home, LoginFailure, LoginSuccess, Logout, Account, About } from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
const App = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const {
    isLoggedIn,
    setIsLoggedIn,
    isGoogleAcc,
    setIsGoogleAcc,
    setIsServerAcc,
    isServerAcc,
  } = useStateContext();

  useEffect(() => {
    async function checkloggedIn() {
      const res = auth.loggedIn("JWT");
      console.log("------------- APP.JSX -------------");
      if (res) {
        setIsServerAcc(true);
        setIsLoggedIn(true);
      }
      console.log("-----------------------------------");
    }
    checkloggedIn();
  }, []);

  useEffect(() => {
    async function checkloggedIn() {
      const resGoogle = await auth.getUser();
      if (resGoogle) {
        console.log("resGoogle Ska SÄTTAS TILL TRUE");
        setIsGoogleAcc(true);
        setIsLoggedIn(true);
      }
      console.log("isGoogleAcc", isGoogleAcc);
    }
    checkloggedIn();
  }, []);

  const overlay = () => {
    let state = { click: "auto", backdrop: "blur(0px)" };
    document.body.style.overflow = "visible";
    if (displayForm) {
      document.body.style.overflow = "hidden";
      state = { click: "none", backdrop: "blur(4px)" };
    }
    return state;
  };

  return (
    <div>
      {displayForm ? (
        <div
          className="fixed top-1/2 left-1/2 z-10
        transform -translate-x-1/2 -translate-y-1/2"
        >
          <LoginForm setDisplayForm={setDisplayForm} />
        </div>
      ) : null}
      <div
        className="flex flex-col h-full min-h-screen w-full justify-between"
        style={{
          pointerEvents: overlay().click,
          filter: overlay().backdrop,
        }}
      >
        <Header setDisplayForm={setDisplayForm} />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/google/failure" element={<LoginFailure />} />
            <Route path="/login/google/success" element={<LoginSuccess />} />
            <Route path="/logout/google" element={<Logout />} />
            <Route path="/about" element={<About />} />
            {isGoogleAcc || isServerAcc ? (
              <Route path="/account" element={<Account />} />
            ) : null}
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
