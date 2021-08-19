import React from "react";
import { useCon } from "../Context/AppContext";
import { useHistory } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";

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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
          </Nav>
          {currentUser && (
            <div
              className="btn btn-outline-success btn-sm"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
                history.push("/");
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
