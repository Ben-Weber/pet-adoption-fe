import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useCon } from "../Context/AppContext";
import { addFavoritePet, removeFavoritePet } from "../data/petsApi";
import LikeButton from "./LikeButton";
import "./SearchCard.css";

function SearchCard(props) {
  const { petId, petImg, petName, petBio } = props;
  const { currentUser } = useCon();
  const { userId } = currentUser;
  const [selected, setSelected] = useState(true);

  const data = {
    petId: petId,
    userId: userId,
  };
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/petPage`,
      state: { petId: petId },
    });
  };

  const handleClicked = () => {
    setSelected((prevSelected) => !prevSelected);
    console.log(selected);
    petAndUserId();
  };

  const petAndUserId = () => {
    if (selected) {
      addFavoritePet(data);
    } else {
      removeFavoritePet(data);
    }
  };

  return (
    <div>
      <Card style={{ width: "19rem", minHeight: "380px", margin: "10px" }}>
        <div style={{ width: "303px", height: "200px" }}>
          <Card.Img
            variant="top"
            src={petImg}
            style={{ maxWidth: "100%", height: "200px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{petName}</Card.Title>
          <div>
            <Card.Text className="textOverflow">{petBio}</Card.Text>
          </div>
          <div className="d-flex justify-content-between align-items-center mr-5 mt-3">
            <Button
              onClick={() => {
                handleClick();
              }}
              variant="success"
            >
              More Info
            </Button>
            {currentUser && (
              <>
                <div onClick={() => handleClicked()}>
                  <LikeButton />
                </div>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default SearchCard;
