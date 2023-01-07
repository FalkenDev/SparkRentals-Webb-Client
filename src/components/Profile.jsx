const Profile = ({ userData }) => {
  console.log("userData1", userData);
  if (!userData) {
    return <div>Loading</div>;
  }

  return (
    <>
      <table className="w-full text-lg content-between text-center">
        <thead className=" bg-sidebarBlue text-gray-200">
          <tr>
            <th className="font-normal px-6">ID</th>
            <th className="font-normal px-6">First Name: {userData["firstName"]}</th>
            <th className="font-normal px-6">Last Name: {userData["lastName"]}</th>
            <th className="font-normal px-6">Email: {userData["email"]}</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default Profile;
