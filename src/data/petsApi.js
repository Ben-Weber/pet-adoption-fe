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
    const response = await axios.get("http://localhost:4000/pets/getPetInfo");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPetById = async (petId) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/pets/getPetById/${petId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePetStatus = async (ownership) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/pets/updatePetStatus",
      ownership
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
