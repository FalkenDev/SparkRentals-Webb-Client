import storage from "../models/storage";
const profile = {
    getUserInformation: async function getUserInformation(user_id, isGoogleAcc) {
        if(isGoogleAcc) {
            const tokenObj = storage.readToken();
            const response = await fetch(
                `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/users/google/${user_id}?api_key=${process.env.REACT_APP_WEBB_CLIENT_API}`,
                {
                headers: {
                    "access_token": tokenObj.token,
                },
                }
            );
            console.log("Getting user data with Google Token");
            return response.json();
        } else {
            const tokenObj = storage.readToken();
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
    }
};
export default profile;