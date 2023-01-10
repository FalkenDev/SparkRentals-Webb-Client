import React from "react";

const Balance = ({ balance }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Balance</h1>
      <div className="border-y border-gray-600">
        <p className="text-4xl text-center font-semibold p-4">{balance} kr</p>
      </div>
    </div>
  );
};

export default Balance;
