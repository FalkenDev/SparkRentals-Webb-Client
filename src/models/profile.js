const profile = {
    getUser: async function getUser() {
        //const tokenObj = storage.readToken();
        console.log("get user")
        const response = await fetch(
        `${process.env.REACT_WEBB_CLIENT_API_URL}/auth/google/user?api_key=${process.env.REACT_WEBB_CLIENT_API}`);
        return response.json();
    }
};
export default profile;