import React from "react";
import { Button } from "react-bootstrap";
import "./AnimalCard.css";
function AnimalCard(props) {
  const { petName, petImg, petBio } = props;
  return (
    <div className="card">
      <div className="imgBx">
        <img src={petImg} alt="dog" />
      </div>
      <div className="content">
        <h2>{petName}</h2>
        <p>{petBio}</p>
        <Button variant="success">See More</Button>
      </div>
    </div>
  );
}
export default AnimalCard;
