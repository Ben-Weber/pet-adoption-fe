import React from "react";
import AnimalCard from "./AnimalCard";

function MyPets() {
  return (
    <div className="Card-container">
      <div className="d-flex flex-wrap justify-content-evenly">
        <AnimalCard
          petImg="https://bit.ly/3zVVUyr"
          petName="Ollie"
          petBio="Contrary to popular belief, ostriches do not bury their heads in sand to avoid danger."
        />
        <AnimalCard
          petImg="https://bit.ly/3zWO2g9"
          petName="Lio"
          petBio="Baby lions are called cubs. A mother is a lioness, and a father is called a lion. They all live in a social group called a pride, which consists of about 25 ..."
        />
      </div>
    </div>
  );
}

export default MyPets;
