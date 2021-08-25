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

export const addFavoritePet = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/pets/addFavoritePet",
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavoritePet = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/pets/removeFavoritePet",
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserFavoritePets = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/pets/favoritePets`,
      { params: { userId } }
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

export const searchResult = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/pets/searchResult",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserAdoptedPets = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:4000/pets/adoptedPets`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePetInfo = async (petInfo) => {
  try {
    const response = await axios.put(
      "http://localhost:4000/pets/updatePetInfo",
      { petInfo }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
