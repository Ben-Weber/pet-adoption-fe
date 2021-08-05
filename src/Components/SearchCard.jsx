import React from "react";
import "./SearchCard.css";
import { Button, Card } from "react-bootstrap";
// import { Button as ButtonMUI } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function SearchCard(props) {
  const { cardImg, cardTitle, cardText } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Button variant="success" href="/petPage">
            More Info
          </Button>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Card.Body>
      </Card>
    </div>
  );
}
export default SearchCard;
