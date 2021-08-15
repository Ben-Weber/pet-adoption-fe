import axios from "axios";

export const addPet = async (petData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/pets/addPet",
      petData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPetInfo = async () => {
  try {
    const response = await axios.post("http://localhost:4000/pets/getPetInfo");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
