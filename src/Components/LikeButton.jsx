import React, { useState } from "react";
// import { useCon } from "../Context/AppContext";
import "./LikeButton.css";

function LikeButton() {
  const [className, setClassName] = useState("");
  // const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setClassName(!className);
    // setSelected((prevSelected) => !prevSelected);
    // console.log(selected);
  };

  return (
    <div
      className={`heart ${className && "is-active"}`}
      onClick={() => handleClick()}
    ></div>
  );
}

export default LikeButton;
