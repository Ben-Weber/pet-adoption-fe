import axios from "axios";

export const registerUser = async (user) => {
  console.log("registerUser", user);
  try {
    const response = await axios.post(
      "http://localhost:4000/user/addNewUser",
      user
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
