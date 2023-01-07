import axios from "axios";

const profile = {
    getUser: async function getUser() {
        const response = await axios.get(`${process.env.REACT_APP_WEBB_CLIENT_API_URL}/auth/google/user?api_key=${process.env.REACT_APP_WEBB_CLIENT_API}`, {
            withCredentials: true,
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