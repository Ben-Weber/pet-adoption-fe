import React from "react";
import "../Pages/pages.css";
// import LikeButton from "./LikeButton";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchCard(props) {
  const { cardId, cardImg, cardTitle, cardText } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/petPage`,
      state: { cardId: cardId },
    });
  };

  return (
    <div className="search-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <div>
            <Card.Text>{cardText}</Card.Text>
          </div>
          <div className="d-flex justify-content-between align-items-center mr-5">
            <Button
              onClick={() => {
                handleClick();
              }}
              variant="success"
              href="/petPage"
            >
              More Info
            </Button>
            {/* <LikeButton></LikeButton> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default SearchCard;
