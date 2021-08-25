import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import { useCon } from "../Context/AppContext";

function NavBar() {
  const { loggedIn } = useCon();
  const { isAdmin } = loggedIn;
  const history = useHistory();
  const changePage = () => {
    history.push("/");
  };
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <div
              onClick={changePage}
              className="logo"
              style={{ color: "#017143", fontWeight: "800", cursor: "pointer" }}
            >
              PetApet
            </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn && (
              <Nav.Link as={Link} to="/homeWelcome">
                Home
              </Nav.Link>
            )}
            {!loggedIn && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            {loggedIn && (
              <Nav.Link as={Link} to="/myPetsPage">
                My Favorite Page
              </Nav.Link>
            )}
            {isAdmin == 1 && (
              <Nav.Link as={Link} to="/admin">
                Admin Portal
              </Nav.Link>
            )}
          </Nav>
          {loggedIn && (
            <div
              className="btn btn-outline-success btn-sm"
              onClick={() => {
                localStorage.clear();
                history.push("/");
                window.location.reload();
              }}
            >
              LogOut
            </div>
          )}
          {!loggedIn && (
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
