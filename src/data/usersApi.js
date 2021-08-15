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
