import React from "react";
// import LikeButton from "./LikeButton";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useCon } from "../Context/AppContext";
import { addFavoritePet, removeFavoritePet } from "../data/petsApi";

function SearchCard(props) {
  const { petId, petImg, petName, petBio } = props;
  const { currentUser } = useCon();
  const { userId } = currentUser;

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

  const handleChange = (e) => {
    let inputChecked = e.target.checked;
    petAndUserId(inputChecked);
  };

  const petAndUserId = (inputChecked) => {
    if (inputChecked) {
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
            <Card.Text>{petBio}</Card.Text>
          </div>
          <div className="d-flex justify-content-between align-items-center mr-5">
            <Button
              onClick={() => {
                handleClick();
              }}
              variant="success"
            >
              More Info
            </Button>
            {currentUser && (
              <input
                type="checkbox"
                id="pet"
                name="pet"
                value={petId}
                onChange={(e) => handleChange(e)}
              />
            )}
            {/* <LikeButton></LikeButton> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default SearchCard;
