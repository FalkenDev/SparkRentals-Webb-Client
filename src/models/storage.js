const storage = {
  storeToken: function storeToken(token) {
    localStorage.setItem("tokenDate", new Date().getTime());
    localStorage.setItem("token", token);
  },

  storeJWT: function storeToken(token, id) {
    localStorage.setItem("JWTDate", new Date().getTime());
    localStorage.setItem("userID", id);
    localStorage.setItem("tokenJWT", token);
  },

  readJwtID: function readJwtID() {
    const id = localStorage.getItem("userID");
    return id;
  },

  readToken: function readToken() {
    const token = localStorage.getItem("token");
    const tokenDate = localStorage.getItem("tokenDate");
    const tokenObj = {
      token: token,
      date: tokenDate,
    };
    return tokenObj;
  },

  readJWT: function readToken() {
    const token = localStorage.getItem("tokenJWT");
    const tokenDate = localStorage.getItem("JWTDate");
    const tokenObj = {
      token: token,
      date: tokenDate,
    };
    return tokenObj;
  },

  deleteToken: function readToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenDate");
  },

  deleteJWT: function readToken() {
    localStorage.removeItem("tokenJWT");
    localStorage.removeItem("JWTDate");
  },
};

export default storage;
