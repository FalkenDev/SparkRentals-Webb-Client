import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const LoginSuccess = () => {
    const { setIsLoggedIn } = useStateContext();
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/account");
        setIsLoggedIn(true)
    });
  return (
    <div className="w-screen">
      <h1>Success!</h1>
    </div>
  );
};

export default LoginSuccess;