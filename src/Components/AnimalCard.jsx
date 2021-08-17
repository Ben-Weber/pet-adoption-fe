import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import "./AnimalCard.css";

function AnimalCard(props) {
  const tokenHeader = localStorage.getItem("token").toString();

  const { petName, petImg, petBio } = props;
  return (
    <div className="card">
      <div className="imgBx">
        <img src={petImg} alt="dog" />
      </div>
      <div className="content">
        <h2>{petName}</h2>
        <div>{petBio}</div>
        <Button
          onClick={async () => {
            console.log(tokenHeader);
            const response = await axios.get("http://localhost:4000/user/new", {
              headers: { Authorization: "Bearer " + tokenHeader },
            });
            console.log(response);
          }}
          variant="success"
        >
          See More
        </Button>
      </div>
    </div>
  );
}
export default AnimalCard;
