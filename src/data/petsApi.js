import axios from "axios";

export const addPet = async (petData) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.post(
      "http://localhost:4000/pets/addPet",
      petData
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPetInfo = async () => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.get(
      "http://localhost:4000/pets/getPetInfo"
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPetById = async (petId) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.get(
      `http://localhost:4000/pets/getPetById/${petId}`
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavoritePet = async (data) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.post(
      "http://localhost:4000/pets/addFavoritePet",
      data
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavoritePet = async (data) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.post(
      "http://localhost:4000/pets/removeFavoritePet",
      data
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserFavoritePets = async (userId) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.get(
      `http://localhost:4000/pets/favoritePets`,
      { params: { userId } }
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePetStatus = async (ownership) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.post(
      "http://localhost:4000/pets/updatePetStatus",
      ownership
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchResult = async (data) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.post(
      "http://localhost:4000/pets/searchResult",
      data
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserAdoptedPets = async (userId) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.get(`http://localhost:4000/pets/adoptedPets`, {
      params: { userId },
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePetInfo = async (petInfo) => {
  try {
    // const tokenHeader = localStorage.getItem("token").toString();
    const response = await axios.put(
      "http://localhost:4000/pets/updatePetInfo",
      { petInfo }
      // { headers: { Authorization: "Bearer " + tokenHeader } }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
