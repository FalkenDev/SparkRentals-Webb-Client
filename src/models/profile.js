import storage from "../models/storage";
const profile = {
  getUserInformation: async function getUserInformation(user_id, isGoogleAcc) {
    if (isGoogleAcc) {
      console.log("I happen google");
      const tokenObj = storage.readToken();
      const response = await fetch(
        `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/users/google/${user_id}?api_key=${process.env.REACT_APP_WEBB_CLIENT_API}`,
        {
          headers: {
            access_token: tokenObj.token,
          },
        }
      );
      console.log("Getting user data with Google Token");
      return response.json();
    } else {
      console.log("I happen");
      const tokenObj = storage.readJWT();
      const response = await fetch(
        `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/users/${user_id}?api_key=${process.env.REACT_APP_WEBB_CLIENT_API}`,
        {
          headers: {
            "x-access-token": tokenObj.token,
          },
        }
      );
      console.log("Getting user data with x-acces-token");
      return response.json();
    }
  },

  addFund: async function addFund(user_id, code, isGoogleAcc) {
    if (!isGoogleAcc) {
      const tokenObj = storage.readJWT();
      const data = {
        user_id: user_id,
        prepaid_code: code,
        api_key: process.env.REACT_APP_WEBB_CLIENT_API,
      };
      console.log(data);
      await fetch(
        `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/users/addfund`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
            "x-access-token": tokenObj.token,
          },
        }
      );
    } else {
      const tokenObj = storage.readToken();
      const data = {
        user_id: user_id,
        prepaid_code: code,
        api_key: process.env.REACT_APP_WEBB_CLIENT_API,
      };
      console.log(data);
      await fetch(
        `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/users/google/addfund`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
            access_token: tokenObj.token,
          },
        }
      );
    }
  },
};
export default profile;
