const Profile = ({ userData }) => {
  const userInfo = () => {
    return userData.arrayOverview
      .map((item, index) => {
        return (
          <tr key={index} className="border-b text-base border-gray-400">
            <td className="py-3 px-6">{index}</td>
            <td className="py-3 px-6">{item.name}</td>
          </tr>
        );
      });
  };

  if (!userData.arrayOverview) {
    return <div>Loading</div>;
  }

  return (
    <>
      <table className="w-full text-lg content-between text-center">
        <thead className=" bg-sidebarBlue text-gray-200">
          <tr>
            <th className="font-normal px-6">ID</th>
            <th className="font-normal px-6">Name:</th>
          </tr>
        </thead>
        <tbody>{userInfo()}</tbody>
      </table>
    </>
  );
};

export default Profile;
