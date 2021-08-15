import React, { useEffect, useState } from "react";
import PetPageCard from "../Components/PetPageCard";
import { getPetInfo } from "../data/petsApi";

function PetPage() {
  const [petInfo, setPetInfo] = useState({});

  useEffect(() => {
    getPetInfo().then((response) => {
      setPetInfo(response[0]);
    });
  }, []);

  const {
    image,
    petName,
    petType,
    height,
    weight,
    color,
    petBio,
    hypoallergenic,
    dietary,
    breed,
  } = petInfo;

  return (
    <div>
      <main>
        <section className="pb-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Pet Page</h1>
              <div className="lead text-muted fs-3">
                Just when you thought you knew everything...
              </div>
            </div>
          </div>
          <PetPageCard
            img={image}
            name={petName}
            type={petType}
            height={height}
            weight={weight}
            color={color}
            bio={petBio}
            hypoallergenic={hypoallergenic}
            dietary={dietary}
            breed={breed}
          />
        </section>
      </main>
    </div>
  );
}

export default PetPage;
