import React from "react";
import "../Pages/pages.css";
// import LikeButton from "./LikeButton";
import { Button, Card } from "react-bootstrap";

function SearchCard(props) {
  const { cardImg, cardTitle, cardText } = props;
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
            <Button variant="success" href="/petPage">
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
