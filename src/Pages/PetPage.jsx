import React from "react";
import PetPageCard from "../Components/PetPageCard";

function PetPage() {
  return (
    <div>
      <main>
        <section className="pb-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Pet Page</h1>
              <p className="lead text-muted fs-3">
                Just when you thought you knew everything...
              </p>
            </div>
          </div>
          <PetPageCard />
        </section>
      </main>
    </div>
  );
}

export default PetPage;
