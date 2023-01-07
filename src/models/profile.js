import axios from "axios";

const profile = {
    getUserInformation: async function getUserInformation(google_id) {
        const response = await axios.get(`${process.env.REACT_APP_WEBB_CLIENT_API_URL}/users`, {
            withCredentials: true,
            params: { user_id: google_id, api_key:process.env.REACT_APP_WEBB_CLIENT_API },
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(function () {
            return false;
        })
        console.log("after fetch in get user", response.data);
        return response.data;
    }
};
export default profile;