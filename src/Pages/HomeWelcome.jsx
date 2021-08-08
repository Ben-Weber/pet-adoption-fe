import React from "react";
import Typed from "react-typed";
import ProfileSettings from "../Components/ProfileSettings";

function HomeWelcome() {
  return (
    <div>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Home Page</h1>
              <Typed
                className="lead text-muted"
                strings={["Hi Yonitoni. Let's get some puppies..."]}
                typeSpeed={60}
              />
              <div>
                <a href="/myPetsPage" className="btn btn-success my-2 m-4">
                  My Pets Page
                </a>
                <ProfileSettings />
                {/* https://material-ui.com/components/snackbars/ */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeWelcome;
