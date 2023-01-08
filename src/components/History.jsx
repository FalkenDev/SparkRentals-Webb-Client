import React from "react";
const History = ({ userData }) => {
  const userInfo = () => {
    return userData.history.map((item, index) => {
      return (
        <tr key={index} className="border-b text-base border-gray-400">
          <td className="py-3 px-6">{index}</td>
          <td className="py-3 px-6">{item.name}</td>
        </tr>
      );
    });
  };

  if (!userData.history) {
    return <div>Loading</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mb-5">History</h1>
      <table className="w-full text-lg content-between text-center">
        <thead
          className=" bg-sidebarBlue text-slate-800
         font-semibold"
        >
          <tr className="flex flex-row justify-evenly">
            <th>Scooter Name</th>
            <th>Date</th>
            <th>Minutes</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{userInfo()}</tbody>
      </table>
    </>
  );
};

export default History;
