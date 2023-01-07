import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import auth from "../models/auth.js"

const Logout = () => {
    const { setIsLoggedIn } = useStateContext();
    const navigate = useNavigate();
    useEffect(() => {
      console.log("Loggar ut!");
      auth.googleLogout()
      navigate("/");
      setIsLoggedIn(false)
    });
  return (
    <div className="w-screen">
      <h1>Success, you have been loged out!</h1>
    </div>
  );
};

export default Logout;