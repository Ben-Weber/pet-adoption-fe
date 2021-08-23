import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Typed from "react-typed";
import ProfileSettings from "../Components/ProfileSettings";
import { useCon } from "../Context/AppContext";

function HomeWelcome() {
  const { currentUser, loggedIn } = useCon();
  const { firstName, lastName } = currentUser;
  
  const history = useHistory();
  const changePage = () => {
    history.push("/myPetsPage");
  };

  return (
    <div>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Home Page</h1>
              {loggedIn && (
                <Typed
                  className="lead text-muted"
                  strings={[
                    `Hi ${firstName} ${lastName}. Let's get some puppies...`,
                  ]}
                  typeSpeed={60}
                />
              )}
              <div>
                <Button
                  className="btn btn-success my-2 m-4"
                  onClick={changePage}
                >
                  My Pets Page
                </Button>
                <ProfileSettings />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeWelcome;
