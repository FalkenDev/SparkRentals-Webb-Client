import React from "react";
import { Profile, History, Prepaid } from "../components";
import profile from "../models/profile.js"
import { useState, useEffect } from "react";
const Account = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await profile.getUser();
    console.log(res);
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
