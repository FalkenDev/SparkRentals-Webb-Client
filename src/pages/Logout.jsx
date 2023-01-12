import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import auth from "../models/auth.js"

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
      auth.googleLogout()
      navigate("/");
    });
  return (
    <div className="w-full">
      <h1>Success, you have been loged out!</h1>
    </div>
  );
};

export default Logout;