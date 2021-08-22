import React, { useEffect, useState } from "react";
import { getUserFavoritePets } from "../data/petsApi";
import AnimalCard from "./AnimalCard";
import { useCon } from "../Context/AppContext";
import "./AnimalCard.css";

function FavoritePets() {
  const { currentUser } = useCon();
  const { userId } = currentUser;

  const [petInfo, setPetInfo] = useState({});

  console.log("petInfo", petInfo);
  console.log("currentUser", currentUser);

  useEffect(() => {
    currentUser &&
      getUserFavoritePets(userId).then((response) => {
        setPetInfo(response);
      });
  }, []);

  return (
    <div className="Card-container">
      <div className="d-flex flex-wrap justify-content-evenly">
        {petInfo.length > 0 &&
          petInfo.map((pet) => {
            return (
              <AnimalCard
                petImg={pet.image}
                petName={pet.petName}
                petBio={pet.petBio}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FavoritePets;
