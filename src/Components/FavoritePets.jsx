import React from "react";
import AnimalCard from "./AnimalCard";
import "./AnimalCard.css";

function FavoritePets() {
  return (
    <div className="Card-container">
      <div className="d-flex flex-wrap justify-content-evenly">
        <AnimalCard
          petImg="https://bit.ly/3lbCLUV"
          petName="YoniToni"
          petBio="Measuring in just under a foot tall, Bichon Frise are one of the most popular “personality” breeds. They do well with children and get along well with other dogs."
        />
        <AnimalCard
          petImg="https://bit.ly/3fcqT12"
          petName="Wally The Walrus"
          petBio="The walrus is a large flippered marine mammal with a heart of a lionness."
        />
        <AnimalCard
          petImg="https://bit.ly/3zNBBDd"
          petName="Thomas The Turtle"
          petBio="Turtles are reptiles. They are characterized by a bony or cartilaginous shell, developed from their ribs, that acts as a shield."
        />
        <AnimalCard
          petImg="https://bit.ly/2WsicJu"
          petName="Oscar The Octopus"
          petBio="Octopus are soft-bodied, eight-limbed molluscs. There are 300 species and is grouped with squids, cuttlefish, and nautiloids. "
        />
        <AnimalCard
          petImg="https://bit.ly/3iai0XS"
          petName="Eli The Elephant"
          petBio="Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant."
        />
        <AnimalCard
          petImg="https://bit.ly/3idkxjO"
          petName="Long Eared Earl"
          petBio="These big-eared dogs tend to be smart, sensitive pets who love to run around the yard before cuddling up with their family."
        />
      </div>
    </div>
  );
}

export default FavoritePets;
