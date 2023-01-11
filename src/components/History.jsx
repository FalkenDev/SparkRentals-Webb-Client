import React from "react";
const History = ({ userData }) => {
  const userInfo = () => {
    return userData.history.map((item, index) => {
      return (
        <tr key={index} className="border-b border-gray-400">
          <td>{item.scooterName}</td>
          <td>{item.date}</td>
          <td>{item.totalMin}</td>
          <td>{item.totalPrice} </td>
          <td>{item.distance}</td>
        </tr>
      );
    });
  };

  if (!userData.history) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div className="pr-32">
        <h1 className="text-3xl font-semibold mb-5">History</h1>
        <table className="w-full text-lg content-between text-left">
          <thead
            className=" bg-sidebarBlue text-slate-800
         font-semibold"
          >
            <th>Scooter Name</th>
            <th>Date</th>
            <th>Minutes</th>
            <th>Price (SEK)</th>
            <th>Distance (KM)</th>
          </thead>
          <tbody>{userInfo()}</tbody>
        </table>
      </div>
    </>
  );
};

export default History;
