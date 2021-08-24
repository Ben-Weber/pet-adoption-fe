import React, { useEffect, useState } from "react";
import { getUserFavoritePets } from "../data/petsApi";
import AnimalCard from "./AnimalCard";
import { useCon } from "../Context/AppContext";
import "./AnimalCard.css";

function FavoritePets() {
  const { loggedIn } = useCon();
  const userId = localStorage.getItem("userId");

  const [petInfo, setPetInfo] = useState({});

  useEffect(() => {
    loggedIn &&
      getUserFavoritePets(userId).then((response) => {
        setPetInfo(response);
      });
  }, []);

  return (
    <div className="Card-container">
      <div className="d-flex flex-wrap justify-content-evenly">
        {petInfo.length > 0 &&
          petInfo.map((pet, index) => {
            return (
              <AnimalCard
                petImg={pet.image}
                petName={pet.petName}
                petBio={pet.petBio}
                petId={pet.petId}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FavoritePets;
