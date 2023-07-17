import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand to='/'><img src='./logoFit.png' width='55' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/Home">Inicio</Link>
            <Link className="nav-link" to="/RutinasEjercicios">Ejercicios</Link>
            <Link className="nav-link" to="/PlanesEntrenamiento">Planes Entrenamiento</Link>
            <Link className="nav-link" to="/MisRutinas">Mis Rutinas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
