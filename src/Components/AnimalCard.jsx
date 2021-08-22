import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./AnimalCard.css";

function AnimalCard(props) {
  const { petName, petImg, petBio } = props;
  const history = useHistory();
  const changePage = () => {
    history.push("/myPetsPage");
  };
  return (
    <div className="card">
      <div className="imgBx">
        <img src={petImg} alt="dog" />
      </div>
      <div className="content">
        <h2>{petName}</h2>
        <div className="TextOverflow">{petBio}</div>
        <Button onClick={changePage}>More Info</Button>
      </div>
    </div>
  );
}
export default AnimalCard;
