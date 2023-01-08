import storage from "../models/storage";
import axios from "axios";
const auth = {
  loggedIn: function loggedIn(type) {
    if (type === "JWT") {
      const token = storage.readJWT();
      const Hours = 1000 * 60 * 60;
      const notExpired = new Date().getTime() - token.date < Hours;
      return token && notExpired;
    } else {
      const token = storage.readToken();
      const Hours = 1000 * 60 * 60;
      const notExpired = new Date().getTime() - token.date < Hours;
      return token && notExpired;
    }
  },

  getUser: async function getUser() {
    const response = await axios
      .get(
        `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/auth/google/user?api_key=${process.env.REACT_APP_WEBB_CLIENT_API}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch(function () {
        return false;
      });
    console.log("GOOGLE AUTH FETCH:", response.data);
    storage.storeToken(response.data.accessToken);
    return response.data;
  },

  login: async function login(email, password) {
    const data = {
      email: email,
      password: password,
      api_key: process.env.REACT_APP_WEBB_CLIENT_API,
    };

    const response = await fetch(
      `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/auth/login/server/user`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await response.json();
    console.log(result);
    if (Object.prototype.hasOwnProperty.call(result, "errors")) {
      return {
        message: result.errors.title,
        description: result.errors.detail,
        type: "danger",
      };
    }

    storage.storeJWT(result.data.token, result.data.user.id);
    return {
      message: "Success",
      description: result.data.message,
      type: "success",
    };
  },
  logout: async function logout() {
    storage.deleteJWT();
  },
  googleLogout: async function googleLogout() {
    const response = await axios
      .get(
        `${process.env.REACT_APP_WEBB_CLIENT_API_URL}/auth/logout/google?api_key=${process.env.REACT_APP_WEBB_CLIENT_API}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch(function () {
        return false;
      });
    console.log("Logout", response.data);
    return response.data;
  },
};

export default auth;
