import axios from "axios";

export const registerUser = async (userData) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.post(
      "http://localhost:4000/user/signup",
      userData
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    console.log("FE axios.post 'response' from api.js:", response);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (userData) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.post(
      "http://localhost:4000/user/login",
      userData
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    const user = response.data.user;
    const token = response.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user.userId);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("isAdmin", user.isAdmin);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.get("http://localhost:4000/user/getAllUsers");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
