import React from "react";
import { Profile, History, Prepaid } from "../components";
import profile from "../models/profile.js"
import auth from "../models/auth.js"
import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
const Account = () => {
  const [userData, setUserData] = useState({});
  const { isGoogleAcc } = useStateContext();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log("hej")
    const resGoogle = await auth.getUser()
    console.log("resGoogle._id",resGoogle._id)
    console.log("isGoogleAcc",isGoogleAcc)
    const res = await profile.getUserInformation(resGoogle._id, isGoogleAcc);
    console.log("res-----------------------",res);
    setUserData(res);
  }
  return (
    <>
      <div className="w-screen flex flex-col">
        <div className="w-screen bg-slate-400">
          <Profile userData={userData}/>
        </div>
        <div className="flex flex-row">
          <div className="w-2/3 bg-slate-800"><History userData={userData} /></div>
          <div className="w-1/3 bg-slate-900"><Prepaid /></div>
        </div>
      </div>
    </>
  );
};

export default Account;
