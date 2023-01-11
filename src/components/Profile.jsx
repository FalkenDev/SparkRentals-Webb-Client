import React, { useState } from "react";
import { profileInfo } from "../data/data";
import { FiCheck, FiX } from "react-icons/fi";
import auth from "../models/auth";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
const Profile = ({ userData }) => {
  const { isGoogleAcc, setIsLoggedIn, setIsGoogleAcc } = useStateContext();
  const [isDelete, setIsDelete] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState();
  const navigate = useNavigate();
  console.log("userData1", userData);

  const userInfo = () => {
    return profileInfo.map((item, index) => {
      return (
        <div key={index} className="flex flex-col mx-3">
          <h1 className="font-semibold text-xl">{item.title}</h1>
          <p
            className="border-b border-gray-500
           text-gray-500 mr-2 w-64"
          >
            {userData[item.name]}
          </p>
        </div>
      );
    });
  };

  const deleteAccount = async () => {
    if (deleteConfirm === "DELETE") {
      await auth.deleteAcc(userData._id, isGoogleAcc);
      setIsLoggedIn(false);
      setIsGoogleAcc(false);
      navigate("/");
    }
  };

  if (!userData) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-row justify-between bg-slate-200 px-8 py-4 rounded-xl">
      <div className="flex flex-row justify-evenly">{userInfo()}</div>
      <div className="flex flex-col">
        {/* <button
          onChange={() => {}}
          className="m-1 py-2 px-3 transition-colors bg-DarkBlue w-44 
                hover:bg-DarkHover text-white rounded-xl"
        >
          Change password
        </button> */}
        {!isGoogleAcc ? (
          <div>
            {isDelete ? (
              <div>
                <label>Type "DELETE" To confirm</label>
                <input
                  placeholder="DELETE"
                  value={deleteConfirm}
                  onChange={(e) => {
                    setDeleteConfirm(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg block p-2.5 w-full"
                />
                <div className=" flex justify-center w-full py-3">
                  <button
                    onClick={() => {
                      deleteAccount();
                      setDeleteConfirm("");
                    }}
                    className="rounded-full bg-blue-600 text-white p-1 mx-2"
                  >
                    <FiCheck />
                  </button>
                  <button
                    onClick={() => {
                      setIsDelete(false);
                      setDeleteConfirm("");
                    }}
                    className="rounded-full bg-red-400 text-white p-1 mx-2"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsDelete(true);
                }}
                className="
                m-1 py-2 px-3 transition-colors bg-DarkBlue w-44
                hover:bg-DarkHover text-white rounded-xl"
              >
                Delete account
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
