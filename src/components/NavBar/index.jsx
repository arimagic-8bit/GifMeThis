import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import "./styles.scss";

const Navigate = () => (  
<Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/"><span>Gif</span>MeThat</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="links" href="#home">Favourites</Nav.Link>
        <Nav.Link href="#link">Feeling vibes</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigate;