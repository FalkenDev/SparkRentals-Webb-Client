import { profileInfo } from "../data/data";
const Profile = ({ userData }) => {
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

  if (!userData) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-row justify-evenly bg-slate-200 py-4 rounded-xl">
      <div className="flex flex-row justify-evenly">{userInfo()}</div>
      <div className="flex flex-col">
        <button
          className="m-1 py-2 px-3 transition-colors bg-DarkBlue w-44 
                hover:bg-DarkHover text-white rounded-xl"
        >
          Change password
        </button>
        <button
          className="
                m-1 py-2 px-3 transition-colors bg-DarkBlue w-44
                hover:bg-DarkHover text-white rounded-xl"
        >
          Delete account
        </button>
      </div>
    </div>
  );
};

export default Profile;
