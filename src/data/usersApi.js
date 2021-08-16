import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/user/signup",
      userData
    );
    console.log("FE axios.post 'response' from api.js:", response);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (userData) => {
  try {
    console.log("userData", "eml -", userData.email, "pw -", userData.password);
    const response = await axios.post(
      "http://localhost:4000/user/login",
      userData
    );
    console.log("FE axios.post 'response' from api.js:", response);
  } catch (error) {
    console.log(error);
  }
};
