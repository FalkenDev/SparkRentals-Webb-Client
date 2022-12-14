import React from "react";
import { Profile, History, Prepaid, Balance } from "../components";
import profile from "../models/profile.js";
import auth from "../models/auth.js";
import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import storage from "../models/storage";
const Account = () => {
  const [userData, setUserData] = useState({});
  const { isGoogleAcc, isLoggedIn } = useStateContext();

  useEffect(() => {
    if (isGoogleAcc) {
      fetchDataGoogle();
    } else {
      fetchData();
    }
  }, []);

  const reedemPrepaid = async (code) => {
    await profile.addFund(userData._id, code, isGoogleAcc);
    if (isGoogleAcc) {
      fetchDataGoogle();
    } else {
      fetchData();
    }
  };

  async function fetchData() {
    console.log("-----------ACCOUNT----------");
    const id = storage.readJwtID();
    const res = await profile.getUserInformation(id, false);
    setUserData(res.user);
    console.log("----------------------------");
  }

  async function fetchDataGoogle() {
    console.log("-----------ACCOUNT----------");
    console.log("isGoogleAcc", isGoogleAcc);
    console.log("isLoggedIn", isLoggedIn);
    const resGoogle = await auth.getUser();
    console.log("resGoogle._id", resGoogle._id);
    console.log("isGoogleAcc", isGoogleAcc);
    const res = await profile.getUserInformation(resGoogle._id, isGoogleAcc);
    console.log("Res User data", res);
    setUserData(res.user);
    console.log("----------------------------");
  }
  return (
    <>
      <div className="w-full flex flex-col py-4 px-7">
        <div className="w-full py-8">
          <Profile userData={userData} />
        </div>
        <div className="flex flex-row">
          <div className="w-2/3">
            <History userData={userData} />
          </div>
          <div className="w-1/3 flex flex-col">
            <div className="mb-10">
              <Balance balance={userData.balance} />
            </div>
            <Prepaid reedemPrepaid={reedemPrepaid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
