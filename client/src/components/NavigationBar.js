import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              height="80px"
              className="tmdbLogo"
              src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
              alt="tmdb logo"
            ></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/searchform">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
