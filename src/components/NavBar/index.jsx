import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import "./styles.scss";

const Navigate = () => (  
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand className="links titleLogo" href="/"><span>Gif</span>MeThis</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="links gradientBorder" href="/favourites">Favourites</Nav.Link>
        <Nav.Link className="links gradientBorder" href="#link">Feeling vibes</Nav.Link>
        <Nav.Link className="links gradientBorder" href="#link">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigate;