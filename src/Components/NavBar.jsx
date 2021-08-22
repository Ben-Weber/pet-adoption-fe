import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import { useCon } from "../Context/AppContext";

function NavBar() {
  const { currentUser } = useCon();
  const history = useHistory();
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <a
              href="/"
              className="logo"
              style={{ color: "#017143", fontWeight: "800" }}
            >
              PetApet
            </a>
          </Navbar.Brand>
          <Nav className="me-auto">
            {currentUser && (
              <Nav.Link as={Link} to="/homeWelcome">
                Home
              </Nav.Link>
            )}
            {!currentUser && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            {currentUser && (
              <Nav.Link as={Link} to="/myPetsPage">
                My Favorite Page
              </Nav.Link>
            )}
          </Nav>
          {currentUser && (
            <div
              className="btn btn-outline-success btn-sm"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                history.push("/");
                window.location.reload();
              }}
            >
              LogOut
            </div>
          )}
          {!currentUser && (
            <Nav.Link style={{ color: "grey" }}>
              <ModalComponent />
            </Nav.Link>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
