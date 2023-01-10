import React, { useState } from "react";

const Prepaid = ({ reedemPrepaid }) => {
  const [prepaidCode, setPrepaidCode] = useState();

  return (
    <div className="border border-black rounded-xl p-3 flex flex-col justify-center align-middle">
      <h1 className="font-semibold text-2xl">Add Prepaid Card</h1>

      <div className="flex flex-col">
        <label className="mt-4">Enter card code</label>
        <input
          className="bg-gray-200 border border-gray-300 text-gray-900
                      text-sm rounded-lg block p-2.5 w-full"
          value={prepaidCode}
          onChange={(e) => {
            setPrepaidCode(e.target.value);
          }}
        />
        <button
          onClick={() => {
            reedemPrepaid(prepaidCode);
            setPrepaidCode("");
          }}
          className="py-2 text-DarkBlue px-2 font-semibold hover:bg-DarkBlue mt-6
          hover:text-white rounded-xl transition border-2 border-DarkBlue text-center"
        >
          Add Funds
        </button>
      </div>
    </div>
  );
};

export default Prepaid;
