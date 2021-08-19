import React from "react";
// import "./LikeButton.scss";

function LikeButton() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <a
            onClick={() => {
              // classList.toggle("is-active");
              console.log("is-active");
            }}
            href="javascript:void(0);"
            className="like-button"
          >
            <i className="material-icons not-liked bouncy">favorite_border</i>
            <i className="material-icons is-liked bouncy">favorite</i>
            <span className="like-overlay"></span>
          </a>
        </div>
      </div>
      {/* {document.querySelector(document).ready(function () {
        document.querySelector(".like-button").click(function () {
          document.querySelector(this).classList.toggle("is-active");
        });
      })} */}
    </>
  );
}

export default LikeButton;
