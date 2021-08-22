import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typed from "react-typed";
import "./Home.css";

function HomeNew() {
  const [currentImg, setCurrentImg] = useState(
    "https://i.ibb.co/k6JKL7q/2.png"
  );
  const history = useHistory();
  const changePage = () => {
    history.push("/search");
  };
  return (
    <div>
      <section className="home-section">
        <div className="circle"></div>
        <div className="home-content">
          <div className="textBox">
            <h2>
              Welcome to PetAPet <br /> It's a <span>Family</span>
            </h2>
            <div>
              <Typed
                strings={["Your limit is 10 puppies per month, you sicko..."]}
                typeSpeed={40}
              />
            </div>

            <div className="learnMore" onClick={changePage}>
              Learn More
            </div>
          </div>
          <div className="imgBox dog-img">
            <img src={currentImg && currentImg} alt="Dog" border="0" />
          </div>
        </div>
        <ul className="thumb">
          <li>
            <img
              onClick={() => setCurrentImg("https://i.ibb.co/k6JKL7q/2.png")}
              src="https://i.ibb.co/rs4FrpC/3.png"
              alt="3"
              border="0"
            />
          </li>
          <li>
            <img
              onClick={() => setCurrentImg("https://i.ibb.co/4N14tcp/Dog2.png")}
              src="https://i.ibb.co/4N14tcp/Dog2.png"
              alt="Dog2"
              border="0"
            />
          </li>
          <li>
            <img
              onClick={() => setCurrentImg("https://i.ibb.co/dc93D5m/1.png")}
              src="https://i.ibb.co/RcqM6YC/4.png"
              alt="4"
              border="0"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
export default HomeNew;
